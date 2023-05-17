import { CommentObject } from "@/types";
import React from "react";
import { useState } from "react";

const Kommentit = () => {
  const [user, setUser] = useState<string>("");
  const [cmt, setCmt] = useState<string>("");
  const [list, setList] = useState<CommentObject[]>([
    { name: "Jartsa86", comment: "Titeenit oli leffa" },
    { name: "KoneAlfa", comment: "YY KAA KONE YY KAA KONE" },
    {
      name: "Ugi",
      comment:
        "Kertoo kyllä aika paljon Aalto-yliopiston opiskelijoiden älykkyyden tasosta... Ei oo aalto-yliopistoon hirveä kova taso kun tälläisen viinin himoiset sinne pääsee.",
    },
    { name: "UginPoika", comment: "faija mitä vittua nyt taas??" },
    {
      name: "veleho",
      comment:
        "Ihan ok, mutta ootko nähnyt Simpsons sarjasta jaksoa himo-läski Homer?",
    },
    {
      name: "musiikkiraati",
      comment:
        "👌👀👌👀👌 tämä on ✔ oikein hyvää👌👌paskea 👌👌tä 👌 mä👌👌👌 juuri✔tässä ✔✔vaikka itse sanonkin 💯 niin 💯 juuri mistä",
    },
    {
      name: "einsteini",
      comment:
        ">mene Helsinkiin >pieni juna ajelee keskellä katua >luule tulleesi hulluksi >ei enää ikinä Helsinkiin",
    },
  ]);

  const addComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (user != "" && cmt != "") {
      setList(list.concat({ name: user, comment: cmt }));
      setUser("");
      setCmt("");
    } else {
      window.alert(
        "Muistitko varmasti kirjoittaa oman nimimerkkisi ja jonkin mukavan kommentin? :-)"
      );
    }
  };

  const bg = (i: number) => {
    return { background: i % 2 === 0 ? "white" : "lightgrey" };
  };

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between py-24 bg-red-`}
    >
      <h2 style={{ fontSize: "3rem", paddingTop: "4rem" }}>Nyylächat</h2>

      <form onSubmit={addComment} className="flex flex-col">
        <h3 style={{ fontSize: "2rem" }}>Keskustele muiden nyylien kanssa!</h3>
        <label htmlFor="name">Nimi</label>
        <input
          type="text"
          name="name"
          style={{ color: "black" }}
          id="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="comment">Kommentti</label>
        <textarea
          name="cmt"
          style={{ color: "black" }}
          id="cmt"
          value={cmt}
          onChange={(e) => setCmt(e.target.value)}
        />
        <button
          className="mt-5 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          type="submit"
        >
          Lähetä
        </button>
      </form>

      <h4 style={{ textAlign: "center", fontSize: "2rem" }}>
        Kaikki kommentit
      </h4>
      <div className="comments">
        {list.map((c, i) => (
          <div key={c.name} style={bg(i)}>
            <span style={{ fontWeight: "bold" }}>{c.name}: </span>
            <span> {c.comment}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kommentit;
