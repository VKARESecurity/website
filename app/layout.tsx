import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'VKARE Security | Enterprise Cybersecurity',
  description:
    'VKARE Security delivers elite cybersecurity services for modern enterprises, combining advanced testing, resilience engineering, and executive-level advisory.',
  keywords: ['cybersecurity', 'security testing', 'risk management', 'vulnerability assessment'],
  openGraph: {
    title: 'VKARE Security | Enterprise Cybersecurity',
    description:
      'Protect your organization with precision-led cybersecurity services built for resilience and trust.',
    type: 'website',
    url: 'https://vkaresecurity.com',
  },
  alternates: {
    canonical: 'https://vkaresecurity.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
