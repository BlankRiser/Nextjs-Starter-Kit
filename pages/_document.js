import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
