import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Happy Tum Tum | FODMAP Food Reference</title>

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      {children}
    </>
  );
}
