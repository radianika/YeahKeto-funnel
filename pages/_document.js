import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/common.css"
          />
          <script type="text/javascript" src="/static/assets/js/segment.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
