import { TestBed } from '@angular/core/testing';
import { ViewportPointerService } from './viewport-pointer.service';

describe('ViewportPointerService', () => {
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalCancelAnimationFrame = window.cancelAnimationFrame;
  const innerWidthDescriptor = Object.getOwnPropertyDescriptor(window, 'innerWidth');
  const innerHeightDescriptor = Object.getOwnPropertyDescriptor(window, 'innerHeight');

  beforeEach(() => {
    TestBed.configureTestingModule({});

    Object.defineProperty(window, 'requestAnimationFrame', {
      configurable: true,
      value: (callback: FrameRequestCallback) => {
        callback(0);
        return 1;
      },
    });
    Object.defineProperty(window, 'cancelAnimationFrame', {
      configurable: true,
      value: () => undefined,
    });
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 1000,
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'requestAnimationFrame', {
      configurable: true,
      value: originalRequestAnimationFrame,
    });
    Object.defineProperty(window, 'cancelAnimationFrame', {
      configurable: true,
      value: originalCancelAnimationFrame,
    });

    if (innerWidthDescriptor) {
      Object.defineProperty(window, 'innerWidth', innerWidthDescriptor);
    }

    if (innerHeightDescriptor) {
      Object.defineProperty(window, 'innerHeight', innerHeightDescriptor);
    }
  });

  it('emits normalized pointer coordinates and stops after unsubscribe', () => {
    const service = TestBed.inject(ViewportPointerService);
    const states: { active: boolean; x: number; y: number }[] = [];

    const unsubscribe = service.subscribe((state) => {
      states.push(state);
    });

    window.dispatchEvent(
      new PointerEvent('pointermove', {
        clientX: 750,
        clientY: 250,
        pointerType: 'mouse',
      }),
    );

    expect(states[0]).toEqual({ active: false, x: 0, y: 0 });
    expect(states.at(-1)?.active).toBe(true);
    expect(states.at(-1)?.x).toBeCloseTo(0.25, 5);
    expect(states.at(-1)?.y).toBeCloseTo(-0.25, 5);

    unsubscribe();
    const emittedStates = states.length;

    window.dispatchEvent(
      new PointerEvent('pointermove', {
        clientX: 500,
        clientY: 500,
        pointerType: 'mouse',
      }),
    );

    expect(states.length).toBe(emittedStates);
  });
});
