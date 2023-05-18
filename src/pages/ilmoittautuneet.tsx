import { Registration } from "@/types";
import React, { useEffect, useState } from "react";

const dummyRegistrations: Registration[] = [
  { name: "Ugi", email: "ugi@ugi.fi" },
  { name: "SuperNyylä", email: "nyylä@nyylä.fi" },
];

/**
 *  Ilmottautuneet sivu
 */
const Ilmoittautuneet = () => {
  const [registered, setRegistered] =
    useState<Registration[]>(dummyRegistrations);

  useEffect(() => {
    //hae data lokal storagesta ja aseta se registered muuttujaan
    const registrations = localStorage.getItem("registrations");
    if (registrations) {
      setRegistered([...dummyRegistrations, ...JSON.parse(registrations)]);
    }
  }, []);

  return (
    <div
      id="registered"
      className={`flex min-h-screen flex-col items-center py-24 bg-red-`}
    >
      <h2 style={{ fontSize: "3rem", paddingTop: "4rem" }}>Nyyläperhe</h2>
      <table id="list">
        <tr id="row">
          <th className="number"></th>
          <th className="name">Nimi</th>
        </tr>
        {registered.map((c, i) => (
          <tr key={i}>
            <td className="number">{i + 1}</td>
            <td className="name">{c.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Ilmoittautuneet;
