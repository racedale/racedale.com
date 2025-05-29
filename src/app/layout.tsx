import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dale Race - Full-Stack Dev',
  description: 'Edge-optimized website running on Cloudflare Workers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="sans-serif antialiased">{children}</body>
    </html>
  );
}
