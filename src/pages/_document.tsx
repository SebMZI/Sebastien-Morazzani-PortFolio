import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className="antialiased select-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
