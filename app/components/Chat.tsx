"use client";
import { useState } from "react";

export default function Chat() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nombre = (e.currentTarget.elements[0] as HTMLInputElement).value;
    setName(nombre);
  }

  return (
    <div className="my-4">
      {!name && <p className="my-2 text-2xl text-white">¿Cómo te llamas?</p>}
      {!name &&
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            className="rounded-md border-2 border-white px-4 py-2 text-2xl text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="ml-4 rounded-md bg-accent px-4 py-2 text-2xl font-bold text-white hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Saludar
          </button>
        </form>
      }
      {name &&
        <div className="mt-6">
          <p className="my-2 text-2xl text-slate-950"><span className="font-bold text-5xl">¡Mucho gusto, {name}!</span><br/><br/>Vine trotando con mi brillito en la frente solo para darte un topecito especial.</p>
        </div>
      }
    </div>
  );
}