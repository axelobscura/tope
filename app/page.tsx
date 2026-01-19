import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black w-full">
      <main className="flex min-h-screen w-full flex-row items-center justify-center py-32 bg-primary gap-16">
        <div>
          <Image src="/tope2.png" alt="TOPE" width={512} height={512} />
        </div>
        <div>
          <h1 className="text-6xl font-bold text-white font-oswald">¡Hola soy TOPE!</h1>
          <Chat />
          
        </div>
      </main>
    </div>
  );
}
