import { Metadata } from 'next';
import Footer from '@/components/footer';
import Navbar from '@/components/nav';

import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import 'styles/main.css';
import { BRAND_NAME } from './configuration';
import { GoogleTagManager } from '@next/third-parties/google';
import { Toaster } from '@/components/toast/toaster';


export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: BRAND_NAME
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-T92BKJ54" />
      <body>
        <Navbar />
        <main
          id="skip"
          className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
        >
          {children}
        </main>
        <Footer />
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
