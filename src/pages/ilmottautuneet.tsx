import { Registration } from "@/types";
import React, { useEffect, useState } from "react";

const Ilmottautuneet = () => {
  const [registered, setRegistered] = useState<Registration[]>([]);

  useEffect(() => {
    const registrations = localStorage.getItem("registrations");
    if (registrations) {
      setRegistered(JSON.parse(registrations));
    }
  }, []);
  return <div>Ilmottautuneet</div>;
};

export default Ilmottautuneet;
