export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nozentic.com';

const ogImage = { url: '/og-image.png', width: 1200, height: 630, alt: 'Nozentic — Software Without Borders' };

export function pageOpenGraph(title: string, description: string, path: string) {
  return {
    type: 'website' as const,
    url: path,
    siteName: 'Nozentic',
    title,
    description,
    images: [ogImage],
  };
}

export function pageTwitter(title: string, description: string) {
  return {
    card: 'summary_large_image' as const,
    title,
    description,
    images: ['/og-image.png'],
  };
}
