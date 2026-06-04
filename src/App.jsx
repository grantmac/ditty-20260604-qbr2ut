import { useEffect, useState } from "react";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [spinKey, setSpinKey] = useState(0);

  useEffect(() => {
    const center = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    setPosition(center);

    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleClick = () => {
      setSpinKey((key) => key + 1);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <main className="relative min-h-screen cursor-none overflow-hidden bg-black">
      <div
        className="pointer-events-none fixed z-10"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          key={spinKey}
          src="/monitoring-hat.png"
          alt="Black dad hat embroidered with Monitoring the Situation"
          className={`max-h-[min(40vh,360px)] w-auto select-none object-contain ${
            spinKey > 0 ? "hat-spin" : ""
          }`}
        />
      </div>
    </main>
  );
}
