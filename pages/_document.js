import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html className='h-full'>
        <Head />

        <body className='bg-cream-500 min-h-full relative'>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
