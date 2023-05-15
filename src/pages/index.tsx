import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { Registration } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const _registration = localStorage.getItem("registrations");
    const registrations: Registration[] = _registration
      ? JSON.parse(_registration)
      : [];
    const newRegistrations = [...registrations, { name, email }];
    localStorage.setItem("registrations", JSON.stringify(newRegistrations));
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Nyylä network</h1>
      <div className="flex flex-col items-center justify-center">
        <Link href="/ilmottautuneet">Ilmottautuneet</Link>
        <Link href="/kommentit">Kommentit</Link>
      </div>
      <div>
        <form onSubmit={onSubmit} className="flex flex-col">
          <label htmlFor="name">Nimi</label>
          <input
            type="text"
            name="name"
            style={{ color: "black" }}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="pt-5" htmlFor="email">
            Sähköposti
          </label>
          <input
            style={{ color: "black" }}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="pt-5" type="submit">
            Lähetä
          </button>
        </form>
      </div>
    </main>
  );
}
