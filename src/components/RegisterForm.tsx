import { Registration } from "@/types";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const RegisterForm = () => {
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
    toast.success("Liittyminen onnistui. Olet nyt Nyylä!");
  };
  return (
    <div
      id="register"
      className="flex items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Liity mukaan
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Liity mukaan Nyylä Networkiin ja ota askel kohti nyylien
            maailmanlaajuista yhteisöä.
          </p>
        </div>

        <div className="rounded bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
          <form className="space-y-4" onSubmit={onSubmit}>
            <input type="hidden" name="remember" value="True" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="grid gap-6">
                <div className="col-span-12">
                  <label className="block text-sm font-medium text-gray-700">
                    Nimi
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-12">
                  <label className="block text-sm font-medium text-gray-700">
                    Sähköposti
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="email_address"
                    id="email_address"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Liity
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};
