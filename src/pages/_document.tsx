import { Header } from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fi">
      <Head />
      <title>Nyylä Network</title>
      <body>
        <Header />
        <div
          className={`flex min-h-screen flex-col items-center justify-between max-w-5xl mx-auto px-4`}
        >
          <Main />
        </div>

        <NextScript />
      </body>
    </Html>
  );
}
