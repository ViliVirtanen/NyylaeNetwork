import { useEffect, useState } from "react";
import Home from "@/components/Home";
import Ilmoittautuneet from "./ilmoittautuneet";
import Kommentit from "./kommentit";
import { Header } from "@/components/Header";

export default function Index() {
  const [page, setPage] = useState<string>("koti");

  useEffect(() => {
    // Scrollaa sivun ylös kun vaihdetaan sivua
    window.scrollTo(0, 0);
    //jos ollaan register sivulla, scrollaa register sectioniin
    if (page === "koti#register") {
      setPage("koti");
      setTimeout(() => {
        const section = document.querySelector("#register");
        section &&
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [page]);

  return (
    <main>
      <Header setPage={setPage} />
      <div className="flex min-h-screen flex-col items-center justify-between max-w-5xl mx-auto px-4">
        {
          {
            koti: <Home />,
            ilmoittautuneet: <Ilmoittautuneet />,
            kommentit: <Kommentit />,
          }[page]
        }
      </div>
    </main>
  );
}
