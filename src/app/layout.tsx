import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nozentic.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Nozentic — Global Software Studio', template: '%s | Nozentic' },
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
  authors: [{ name: 'Nozentic' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Nozentic',
    title: 'Nozentic — Global Software Studio',
    description: 'Web design, custom software, app development and managed IT for teams across 30+ countries.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Nozentic' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nozentic — Global Software Studio',
    description: 'Web design, custom software, app development and managed IT for teams across 30+ countries.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/favicon.ico' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nozentic',
  url: siteUrl,
  email: 'info@nozentic.com',
  foundingDate: '2026',
  description: 'Global software studio offering web design, custom software, app development and managed IT services.',
  address: { '@type': 'PostalAddress', addressCountry: 'LK' },
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
      </body>
    </html>
  );
}
