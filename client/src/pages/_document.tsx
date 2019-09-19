import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.typekit.net/ebq7wrd.css" />
          <link rel="stylesheet" href="https://use.typekit.net/ebq7wrd.css" />
        </Head>
        <body
          style={{
            margin: 0,
            padding: 0,
            fontFamily: `"Roboto", sans-serif !important`,
          }}
        >
          <Main />
          <NextScript />
          <script src="https://kit.fontawesome.com/7e2c3a3590.js" />
        </body>
      </html>
    );
  }
}

export default MyDocument;
