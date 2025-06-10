import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
