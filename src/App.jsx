import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-[#f7f5ef] px-8 py-12 text-[#171717] sm:px-12">
      <section className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-5xl content-center gap-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6f6a5f]">
          Ditty
        </p>
        <h1 className="max-w-3xl text-6xl font-semibold leading-none tracking-normal sm:text-8xl">
          New workspace
        </h1>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="min-h-11 w-fit border border-[#111111] bg-[#111111] px-5 text-base font-bold text-white transition hover:bg-[#35322f]"
        >
          Count {count}
        </button>
      </section>
    </main>
  );
}
