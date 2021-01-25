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
          <title>S.Nakamura Portfolio</title>
          <link href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic" rel='stylesheet' />
          <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel='stylesheet' />
        </Head>
        <Body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default MyDocument;
