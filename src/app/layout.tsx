import type { Metadata } from 'next';
import { Toaster } from '~/components/ui/sonner';
import { Roboto } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import 'styles/globals.scss';
import { Providers } from '~/components';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'KSKYSOLUTION',
  description: 'SOLUTION OF CASINO, SLOT, SPORTS, MINIGAMES, AND INTEGRATED API',
  icons: {
    icon: '/logo/ksky.png',
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/ksky.ico" />
      </head>
      <body
        className={`${roboto.className} bg-primary-custom antialiased`}
        suppressHydrationWarning={true}
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={1600}
          showAtBottom={false}
        />
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
