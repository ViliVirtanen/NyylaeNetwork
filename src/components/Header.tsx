import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="header p-10 fixed top-0 w-screen">
      <div className="flex flex-row justify-between">
        <h2>NYYLÄ NETWORK</h2>
        <div className="flex gap-5 items-center">
          <Link className="link" href="/">
            Koti
          </Link>
          <Link className="link" href="/ilmottautuneet">
            Ilmottautuneet
          </Link>
          <Link className="link" href="/kommentit">
            Kommentit
          </Link>
          <Link
            href="/#register"
            className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-5 rounded-full"
          >
            Liity
          </Link>
        </div>
      </div>
    </div>
  );
};
