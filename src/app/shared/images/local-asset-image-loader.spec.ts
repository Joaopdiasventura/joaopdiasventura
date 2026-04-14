import { localAssetImageLoader } from './local-asset-image-loader';

describe('localAssetImageLoader', () => {
  it('keeps the original source when no width is requested', () => {
    expect(localAssetImageLoader({ src: '/assets/profile.webp' })).toBe('/assets/profile.webp');
  });

  it('maps profile widths to the nearest available responsive asset', () => {
    expect(localAssetImageLoader({ src: '/assets/profile.webp', width: 256 })).toBe(
      '/assets/profile-256.webp',
    );
    expect(localAssetImageLoader({ src: '/assets/profile.webp', width: 430 })).toBe(
      '/assets/profile.webp',
    );
    expect(localAssetImageLoader({ src: '/assets/profile.webp', width: 490 })).toBe(
      '/assets/profile-504.webp',
    );
  });

  it('maps project covers to the nearest generated variant', () => {
    expect(
      localAssetImageLoader({
        src: '/assets/projects/covers/auronix/auronix-1280.webp',
        width: 640,
      }),
    ).toBe('/assets/projects/covers/auronix/auronix-640.webp');
    expect(
      localAssetImageLoader({
        src: '/assets/projects/covers/auronix/auronix-1280.webp',
        width: 750,
      }),
    ).toBe('/assets/projects/covers/auronix/auronix-960.webp');
  });

  it('leaves unrelated assets unchanged', () => {
    expect(localAssetImageLoader({ src: '/assets/icon.svg', width: 400 })).toBe('/assets/icon.svg');
  });
});
