import { useEffect, useState } from "react";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const center = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    setPosition(center);

    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <main className="relative min-h-screen cursor-none overflow-hidden bg-black">
      <img
        src="/monitoring-hat.png"
        alt="Black dad hat embroidered with Monitoring the Situation"
        className="pointer-events-none fixed z-10 max-h-[min(40vh,360px)] w-auto select-none object-contain"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </main>
  );
}
