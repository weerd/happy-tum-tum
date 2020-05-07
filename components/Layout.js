import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import Analytics from './Analytics';

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <Analytics />

        <title>Happy Tum Tum | FODMAP Food Reference</title>

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        <style>{`#__next { display: grid; grid-template-columns: 100%; grid-template-rows: auto 1fr auto; min-height: 100vh }`}</style>
      </Head>

      <div className='bg-pink-400 h-2 w-full fixed top-0 left-0 z-10'></div>

      <Header page={page} />

      {children}

      <Footer />
    </>
  );
}
