import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold text-red-500 dark:text-white">Home</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">Welcome to my app!</p>
    </div>
  );
}
