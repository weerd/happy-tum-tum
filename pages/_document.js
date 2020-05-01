import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />

        <body className='bg-cream-500 relative'>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
