import { IMAGE_LOADER, ImageLoader } from '@angular/common';
import { Provider } from '@angular/core';

const PROFILE_WIDTHS = [256, 384, 448, 504] as const;
const PROJECT_COVER_WIDTHS = [640, 960, 1280] as const;

type ProfileWidth = (typeof PROFILE_WIDTHS)[number];

const PROFILE_VARIANT_PATHS: Readonly<Record<ProfileWidth, string>> = {
  256: '/assets/profile-256.webp',
  384: '/assets/profile-384.webp',
  448: '/assets/profile.webp',
  504: '/assets/profile-504.webp',
};

const PROJECT_COVER_PATTERN =
  /^\/assets\/projects\/covers\/(?<directory>[^/]+)\/(?<basename>[^/]+)-\d+\.webp$/;

const pickBestWidth = (requestedWidth: number, availableWidths: readonly number[]): number =>
  availableWidths.find((width) => width >= requestedWidth) ?? availableWidths[availableWidths.length - 1]!;

const rewriteProfileSrc = (requestedWidth: number): string => {
  const targetWidth = pickBestWidth(requestedWidth, PROFILE_WIDTHS) as ProfileWidth;
  return PROFILE_VARIANT_PATHS[targetWidth];
};

const rewriteProjectCoverSrc = (src: string, requestedWidth: number): string | null => {
  const match = src.match(PROJECT_COVER_PATTERN);
  if (!match?.groups) return null;

  const targetWidth = pickBestWidth(requestedWidth, PROJECT_COVER_WIDTHS);
  return `/assets/projects/covers/${match.groups['directory']}/${match.groups['basename']}-${targetWidth}.webp`;
};

export const localAssetImageLoader: ImageLoader = ({ src, width }) => {
  if (!width) return src;

  if (src === '/assets/profile.webp') {
    return rewriteProfileSrc(width);
  }

  return rewriteProjectCoverSrc(src, width) ?? src;
};

export const provideLocalAssetImageLoader = (): Provider => ({
  provide: IMAGE_LOADER,
  useValue: localAssetImageLoader,
});
