import { Injectable, NgZone, inject } from '@angular/core';

interface ViewportPointerState {
  readonly active: boolean;
  readonly x: number;
  readonly y: number;
}

type ViewportPointerListener = (state: ViewportPointerState) => void;

@Injectable({ providedIn: 'root' })
export class ViewportPointerService {
  private readonly ngZone = inject(NgZone);

  private cleanup: (() => void) | null = null;
  private frameId = 0;
  private listeners = new Set<ViewportPointerListener>();
  private state: ViewportPointerState = {
    active: false,
    x: 0,
    y: 0,
  };

  public subscribe(listener: ViewportPointerListener): () => void {
    this.listeners.add(listener);

    if (this.listeners.size == 1) {
      this.start();
    }

    listener(this.state);

    return (): void => {
      this.listeners.delete(listener);

      if (this.listeners.size == 0) {
        this.stop();
      }
    };
  }

  private emit(): void {
    this.frameId = 0;

    Array.from(this.listeners).forEach((listener) => listener(this.state));
  }

  private scheduleEmit(): void {
    if (this.frameId != 0) {
      return;
    }

    this.frameId = window.requestAnimationFrame((): void => this.emit());
  }

  private start(): void {
    if (this.cleanup || typeof window == 'undefined' || typeof document == 'undefined') {
      return;
    }

    this.ngZone.runOutsideAngular((): void => {
      const handlePointerMove = (event: PointerEvent): void => {
        if (event.pointerType == 'touch' || window.innerWidth <= 0 || window.innerHeight <= 0) {
          return;
        }

        this.state = {
          active: true,
          x: event.clientX / window.innerWidth - 0.5,
          y: event.clientY / window.innerHeight - 0.5,
        };
        this.scheduleEmit();
      };

      const reset = (): void => {
        if (!this.state.active && this.state.x == 0 && this.state.y == 0) {
          return;
        }

        this.state = {
          active: false,
          x: 0,
          y: 0,
        };
        this.scheduleEmit();
      };

      const handleVisibilityChange = (): void => {
        if (document.hidden) {
          reset();
        }
      };

      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', reset, { passive: true });
      window.addEventListener('blur', reset);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      this.cleanup = (): void => {
        window.removeEventListener('pointermove', handlePointerMove);
        document.documentElement.removeEventListener('pointerleave', reset);
        window.removeEventListener('blur', reset);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    });
  }

  private stop(): void {
    this.cleanup?.();
    this.cleanup = null;

    if (this.frameId != 0) {
      window.cancelAnimationFrame(this.frameId);
      this.frameId = 0;
    }

    this.state = {
      active: false,
      x: 0,
      y: 0,
    };
  }
}
