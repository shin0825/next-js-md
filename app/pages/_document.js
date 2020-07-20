import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>
          </style>
          <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel='stylesheet' />
          <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel='stylesheet' />
        </Head>
        <body style={{padding:0, margin:0}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;