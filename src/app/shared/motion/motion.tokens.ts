export type MotionRevealPreset =
  | 'caption'
  | 'headline'
  | 'copy'
  | 'card'
  | 'panel'
  | 'metric';

export interface MotionRevealConfig {
  readonly axis: 'x' | 'y';
  readonly blur: number;
  readonly distance: number;
  readonly duration: number;
  readonly scale: number;
  readonly start: string;
}

export const MOTION_REVEAL_PRESETS: Readonly<Record<MotionRevealPreset, MotionRevealConfig>> = {
  caption: {
    axis: 'y',
    blur: 8,
    distance: 18,
    duration: 0.72,
    scale: 0.98,
    start: 'top 92%',
  },
  headline: {
    axis: 'y',
    blur: 10,
    distance: 30,
    duration: 0.96,
    scale: 0.98,
    start: 'top 88%',
  },
  copy: {
    axis: 'y',
    blur: 8,
    distance: 26,
    duration: 0.88,
    scale: 0.99,
    start: 'top 90%',
  },
  card: {
    axis: 'y',
    blur: 10,
    distance: 44,
    duration: 0.92,
    scale: 0.96,
    start: 'top 88%',
  },
  panel: {
    axis: 'y',
    blur: 12,
    distance: 36,
    duration: 1.04,
    scale: 0.97,
    start: 'top 86%',
  },
  metric: {
    axis: 'y',
    blur: 6,
    distance: 24,
    duration: 0.82,
    scale: 0.94,
    start: 'top 94%',
  },
} as const;
