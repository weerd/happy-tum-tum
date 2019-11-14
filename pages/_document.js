import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>FODMAP</title>

          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />

          <link
            href='https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
            rel='stylesheet'
          />
        </Head>

        <body className='bg-blue-200'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

// Note:
// _document is only rendered on the server side and not on the client side.
// Event handlers like onClick can't be added to this file.
