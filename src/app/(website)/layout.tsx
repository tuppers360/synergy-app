import './globals.css';

import NavBar from '@/components/NavBar';
import { bottomNavigation } from '@/lib/navigation-data';

export const metadata = {
  title: 'Synergy Education Trust',
  description: 'Set for Life',
};

import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <NavBar bottomNavigation={bottomNavigation} />
        {children}
        <Footer />
      </body>
    </html>
  );
}