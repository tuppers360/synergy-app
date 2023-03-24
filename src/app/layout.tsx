import './globals.css';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { bottomNavigation } from '@/lib/navigation-data';

export const metadata = {
  title: 'Synergy Education Trust',
  description: 'Set for Life',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar bottomNavigation={bottomNavigation} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
