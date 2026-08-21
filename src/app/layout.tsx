import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { contactInfo, socialLinks } from '@/lib/data';
import { siteUrl, pageOpenGraph, pageTwitter } from '@/lib/seo';
import { Analytics } from '@vercel/analytics/next';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
});
const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_TITLE = 'Nozentic — Web Design, Custom Software & App Development';
const SITE_DESCRIPTION = 'Web design, custom software, app development and managed IT for teams across 30+ countries.';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF7' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_TITLE,
    template: '%s | Nozentic',
  },
  description:
    'Nozentic is a global software studio designing and engineering web platforms, custom software, mobile apps and managed IT infrastructure for ambitious teams.',
  keywords: [
    'software development company',
    'web design agency',
    'custom software development',
    'mobile app development',
    'managed IT services',
    'MSP',
    'Sri Lanka software company',
    'Nozentic',
  ],
  authors: [{ name: 'Nozentic Solutions' }],
  creator: 'Nozentic Solutions',
  publisher: 'Nozentic Solutions',
  openGraph: pageOpenGraph(SITE_TITLE, SITE_DESCRIPTION, '/'),
  twitter: pageTwitter(SITE_TITLE, SITE_DESCRIPTION),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const realSocialLinks = socialLinks.filter((s) => s.href !== '#').map((s) => s.href);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nozentic Solutions',
  alternateName: 'Nozentic',
  url: siteUrl,
  logo: `${siteUrl}/icon-512.png`,
  image: `${siteUrl}/og-image.png`,
  email: contactInfo.email,
  telephone: contactInfo.phoneTel,
  foundingDate: '2026',
  description: 'Global software studio offering web design, custom software, app development and managed IT services.',
  address: { '@type': 'PostalAddress', addressLocality: 'Colombo', addressCountry: 'LK' },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: contactInfo.email,
      telephone: contactInfo.phoneTel,
      areaServed: 'Worldwide',
      availableLanguage: 'English',
    },
  ],
  ...(realSocialLinks.length ? { sameAs: realSocialLinks } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${grotesk.variable} ${mono.variable} bg-paper font-sans text-ink transition-colors duration-300 dark:bg-ink dark:text-paper`}
      >
        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
