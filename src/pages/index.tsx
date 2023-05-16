import Image from "next/image";
import { Varela } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { Registration } from "@/types";
import { RegisterForm } from "@/components/RegisterForm";

const inter = Varela({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <div className="glitch-wrapper">
          <div className="glitch" data-glitch="NYYLÄ NETWORK">
            NYYLÄ NETWORK
          </div>
        </div>
        <p>Connecting Nyyläs all around the globe</p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="mb-20">Tervetuloa</h2>
        <p>
          Nyylä Network on ainutlaatuinen verkosto, joka on suunniteltu
          yhdistämään Nyyliä ympäri maailmaa. Missiomme on luoda vahva yhteisö,
          joka kokoaa yhteen kaikki Nyylät, oli kyseessä sitten kokenut konkari
          tai vasta-alkaja nyyläilyssä. Uskomme, että jokaisella Nyylällä on
          lahjoja ja taitoja, jotka ansaitsevat tulla jaetuiksi
          maailmanlaajuisesti.
        </p>
      </div>
      <div className="my-20 flex flex-row items-center">
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <div
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            style={{ width: "300px", height: "300px", position: "relative" }}
          >
            <Image
              fill
              alt="Nyylä Network"
              style={{ objectFit: "cover" }}
              src="/kuva1.jpg"
            />
          </div>
        </div>
        <blockquote className="otro-blockquote">
          Löysin Nyylä Networkin täysin vahingossa, mutta se oli yksi
          parhaimmista sattumista elämässäni. Selaillessani internetiä eräänä
          iltana, törmäsin kiinnostavaan keskustelupalstaan, jossa Nyylät
          jakoivat luomuksiaan ja ideoitaan. Innostuneena päätin liittyä mukaan
          ja jakaa omat nyylä-tuotokseni.
          <span>Lassi</span>
        </blockquote>
      </div>
      <div
        className="flex flex-col items-center"
        style={{ width: "100%", marginTop: "3rem" }}
      >
        <h2 className="mb-10">Nyyläilyä</h2>
        <video width="100%" controls poster="placeholder.jpg">
          <source
            src="https://users.aalto.fi/~maculue1/video/titeenit.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p className="text-center mt-5 font-bold">
          Esimerkki siitä, mitä Nyylät ovat saaneet aikaan
        </p>
      </div>
      <div className="my-20">
        <RegisterForm />
      </div>
    </main>
  );
}
