import './globals.css';

import { bottomNavigation } from '@/lib/data/navigation-data';

export const metadata = {
  title: 'Synergy Education Trust',
  description: 'Set for Life',
};

import NewFooter from '@/components/NewFooter';
import { Inter } from 'next/font/google';
import NewNavBar from './../../components/NewNavBar';

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
        <NewNavBar bottomNavigation={bottomNavigation} />
        {/* <NavBar bottomNavigation={bottomNavigation} /> */}
        {children}
        {/* <Footer /> */}
        <NewFooter />
      </body>
    </html>
  );
}
