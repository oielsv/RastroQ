import { ReactNode } from 'react';

import { inter } from '@/lib/fonts';

import { ThemeProvider } from '@/components/ThemeProvider';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'RastroQ - Job Application Tracker',
  description: 'Track and organize your job applications with ease using RastroQ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
