import { TestBed } from '@angular/core/testing';
import { BrandScene } from './brand-scene';

type IdleWindow = Window & {
  cancelIdleCallback?: (handle: number) => void;
  requestIdleCallback?: (
    callback: () => void,
    options?: { timeout?: number },
  ) => number;
};

describe('BrandScene', () => {
  const idleWindow = window as IdleWindow;
  const originalRequestIdleCallback = idleWindow.requestIdleCallback;
  const originalCancelIdleCallback = idleWindow.cancelIdleCallback;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandScene],
    }).compileComponents();
  });

  afterEach(() => {
    if (originalRequestIdleCallback) {
      Object.defineProperty(idleWindow, 'requestIdleCallback', {
        configurable: true,
        value: originalRequestIdleCallback,
      });
    } else {
      Reflect.deleteProperty(idleWindow, 'requestIdleCallback');
    }

    if (originalCancelIdleCallback) {
      Object.defineProperty(idleWindow, 'cancelIdleCallback', {
        configurable: true,
        value: originalCancelIdleCallback,
      });
    } else {
      Reflect.deleteProperty(idleWindow, 'cancelIdleCallback');
    }
  });

  it('renders the viewport and schedules idle initialization until destroy', () => {
    let requestedHandle: number | null = null;
    let canceledHandle: number | null = null;

    Object.defineProperty(idleWindow, 'requestIdleCallback', {
      configurable: true,
      value: () => {
        requestedHandle = 7;
        return requestedHandle;
      },
    });
    Object.defineProperty(idleWindow, 'cancelIdleCallback', {
      configurable: true,
      value: (handle: number) => {
        canceledHandle = handle;
      },
    });

    const fixture = TestBed.createComponent(BrandScene);
    fixture.detectChanges();

    const viewport = fixture.nativeElement.querySelector('.brand-scene__viewport');

    expect(viewport?.getAttribute('aria-hidden')).toBe('true');
    expect(requestedHandle).toBe(7);

    fixture.destroy();

    expect(canceledHandle).toBe(7);
  });
});
