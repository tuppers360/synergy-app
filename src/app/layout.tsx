import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
