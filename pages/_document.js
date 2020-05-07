import Document, { Html, Head, Main, NextScript } from 'next/document';

import Analytics from '../components/Analytics';

class CustomDocument extends Document {
  render() {
    console.log('👋 environment: ', process.env.NODE_ENV);

    return (
      <Html className='h-full'>
        <Head>
          <Analytics />

          <style>{`#__next { display: grid; grid-template-columns: 100%; grid-template-rows: auto 1fr auto; min-height: 100vh }`}</style>
        </Head>

        <body className='bg-cream-500 min-h-full relative'>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
