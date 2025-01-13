 // src/app/resources/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Helper Mojo | Resources',
  description: 'Created by Akunna Onyekachi',
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </>
  );
}
