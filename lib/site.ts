export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBasePath}${normalizedPath}`;
}

export const brandLogo = assetPath("/brand/norte-one-logo-premium.png");
export const brandLogoSmall = assetPath("/brand/norte-one-logo-premium-small.jpg");
