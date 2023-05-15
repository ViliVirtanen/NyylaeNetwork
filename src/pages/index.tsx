import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Nyylä network</h1>
      <div className="flex flex-col items-center justify-center">
        <Link href="/ilmottautuneet">Ilmottautuneet</Link>
        <Link href="/kommentit">Kommentit</Link>
      </div>
    </main>
  );
}
