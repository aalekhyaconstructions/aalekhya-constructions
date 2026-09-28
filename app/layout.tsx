import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import LoadingScreen from '@/components/LoadingScreen';
import PageTransition from '@/components/PageTransition';
import FloatingAccents from '@/components/FloatingAccents';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const SITE_URL = 'https://aalekhyaconstructions.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aalekhya Constructions | Building Landmarks. Creating Legacies.',
    template: '%s | Aalekhya Constructions',
  },
  description:
    'Premium construction company specializing in luxury homes, commercial developments, resorts, parks, landscaping and infrastructure solutions across Assam and Northeast India.',
  keywords: [
    'Aalekhya Constructions',
    'luxury construction Assam',
    'premium homes Dhemaji',
    'commercial construction Northeast India',
    'resort construction',
    'park landscaping',
    'villa construction Assam',
  ],
  authors: [{ name: 'Aalekhya Constructions' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Aalekhya Constructions',
    title: 'Aalekhya Constructions | Building Landmarks. Creating Legacies.',
    description:
      'Premium construction company specializing in luxury homes, commercial developments, resorts, parks, landscaping and infrastructure solutions across Assam.',
    images: [
      {
        url: 'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
        width: 1200,
        height: 630,
        alt: 'Aalekhya Constructions — Luxury Villa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aalekhya Constructions | Building Landmarks. Creating Legacies.',
    description:
      'Premium construction company specializing in luxury homes, commercial developments, resorts, parks, landscaping and infrastructure solutions.',
    images: [
      'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200',
    ],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-body bg-ink text-white min-h-screen">
        <LoadingScreen />
        <ScrollProgress />
        <FloatingAccents />
        <Navbar />
        <PageTransition>
          <main className="relative">{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
