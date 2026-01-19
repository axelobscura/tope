"use client";
import { useState } from "react";

export default function Chat() {
  const [name, setName] = useState("");

  const elnombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      alert(`¡Hola, ${name}!`);
    }
  }

  return (
    <div className="my-4">
      <p className="my-2 text-2xl text-white">¿Cómo te llamas?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={name}
          onChange={elnombre}
          className="rounded-md border-2 border-white px-4 py-2 text-2xl text-black focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          className="ml-4 rounded-md bg-accent px-4 py-2 text-2xl font-bold text-white hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Saludar
        </button>
      </form>
      {name &&
        <div className="mt-6">
          <hr/>
          <p className="my-2 text-2xl text-white"><span className="font-bold">¡Hola, {name}!</span><br/><br/>Vine trotando con mi brillito en la frente solo para darte un topecito especial.</p>
        </div>
      }
    </div>
  );
}