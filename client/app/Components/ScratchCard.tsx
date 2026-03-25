import { useEffect, useRef, useState } from "react";

export const ScratchCard = ({
  onReveal,
  discountAmount,
}: {
  onReveal: () => void;
  discountAmount: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.fillStyle = "#10b981";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#044a33";
    ctx.font = "bold 24px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SCRATCH TO REVEAL", canvas.width / 2, canvas.height / 2);

    for (let i = 0; i < 1000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? "#14532D" : "#34D399";
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        2,
        2,
      );
    }

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
      checkReveal();
    };

    const getCoordinates = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY =
        "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const handleDown = (e: MouseEvent | TouchEvent) => {
      isDrawing.current = true;
      const { x, y } = getCoordinates(e);
      scratch(x, y);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing.current) return;
      const { x, y } = getCoordinates(e);
      scratch(x, y);
    };

    const handleUp = () => {
      isDrawing.current = false;
    };

    const checkReveal = () => {
      if (isRevealed) return;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let transparentPixels = 0;
      for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) transparentPixels++;
      }
      const percentCleared =
        (transparentPixels / (canvas.width * canvas.height)) * 100;

      if (percentCleared > 40) {
        setIsRevealed(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        onReveal();
      }
    };

    canvas.addEventListener("mousedown", handleDown);
    canvas.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    canvas.addEventListener("touchstart", handleDown, { passive: true });
    canvas.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", handleUp);

    return () => {
      canvas.removeEventListener("mousedown", handleDown);
      canvas.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      canvas.removeEventListener("touchstart", handleDown);
      canvas.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isRevealed, onReveal]);

  return (
    <div className="relative w-80 h-32 rounded-2xl overflow-hidden mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)] border border-[#10b981]/30 bg-[#0a0a0a] flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-[#0a0a0a] to-[#14532D]">
        <span className="text-gray-400 text-xs font-mono mb-1 uppercase tracking-widest">
          Unlocked {discountAmount}% Off
        </span>
        <span className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-emerald-200 tracking-widest">
          IRIS{discountAmount}
        </span>
      </div>

      <canvas
        ref={canvasRef}
        width={320}
        height={128}
        className={`absolute inset-0 cursor-crosshair transition-opacity duration-500 ${isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      />
    </div>
  );
};
