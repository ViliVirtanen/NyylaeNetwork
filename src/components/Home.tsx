import Image from "next/image";
import { RegisterForm } from "@/components/RegisterForm";
import { Welcome } from "@/components/Welcome";
import { BlockQuote } from "@/components/BlockQuote";
import { Video } from "@/components/Video";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="min-h-screen flex justify-center items-center flex-col">
        <div className="glitch-wrapper">
          <div
            className="glitch max-sm:text-2xl sm:text-6xl"
            data-glitch="NYYLÄ NETWORK"
          >
            NYYLÄ NETWORK
          </div>
        </div>
        <p>Connecting Nyyläs all around the globe</p>
      </div>

      <Welcome />
      <BlockQuote
        side="left"
        creator="Lassi"
        image="./kuva1.jpg"
        text=" Löysin Nyylä Networkin täysin vahingossa, mutta se oli yksi parhaimmista
        sattumista elämässäni. Selaillessani internetiä eräänä iltana, törmäsin
        kiinnostavaan keskustelupalstaan, jossa Nyylät jakoivat luomuksiaan ja
        ideoitaan. Innostuneena päätin liittyä mukaan ja jakaa omat
        nyylä-tuotokseni."
      />

      <div className="mb-10">
        <BlockQuote
          side="right"
          creator="Founder of Nyylä Network"
          image="./founder.jpg"
          text="Nyylä Networkin visio on luoda laaja-alainen verkosto lahjakkaista
        nyyläilijöistä. Tarjoamme alustan, jossa Nyylät voivat kohdata
        toisiaan, jakaa ideoitaan, oppia uutta ja inspiroitua toinen
        toisiltaan. Riippumatta siitä, mikä intohimosi on, meillä on paikka
        juuri sinulle."
        />
      </div>
      <Video />
      <div className="my-20">
        <RegisterForm />
      </div>
    </div>
  );
}
