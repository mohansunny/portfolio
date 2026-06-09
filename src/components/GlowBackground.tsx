import React, { useEffect, useState } from 'react';

export default function GlowBackground() {
  const [orbs, setOrbs] = useState<{ id: number; x: number; y: number; size: number; color: string; speedX: number; speedY: number }[]>([]);

  useEffect(() => {
    const initialOrbs = [
      { id: 1, x: 20, y: 30, size: 350, color: 'rgba(242, 200, 17, 0.08)', speedX: 0.1, speedY: 0.12 },
      { id: 2, x: 70, y: 60, size: 400, color: 'rgba(0, 120, 212, 0.09)', speedX: -0.08, speedY: 0.1 },
      { id: 3, x: 40, y: 80, size: 300, color: 'rgba(16, 185, 129, 0.06)', speedX: 0.12, speedY: -0.08 }
    ];
    setOrbs(initialOrbs);

    let animationFrameId: number;
    const update = () => {
      setOrbs(prev =>
        prev.map(orb => {
          let nextX = orb.x + orb.speedX;
          let nextY = orb.y + orb.speedY;

          // boundaries
          if (nextX < -10 || nextX > 110) orb.speedX *= -1;
          if (nextY < -10 || nextY > 110) orb.speedY *= -1;

          return {
            ...orb,
            x: nextX,
            y: nextY
          };
        })
      );
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#06090e]">
      {/* Background Matrix/Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
      
      {/* Dynamic Animated Blur Glow Orbs */}
      {orbs.map(orb => (
        <div
          key={orb.id}
          className="absolute rounded-full filter blur-[100px] transition-transform duration-1000 ease-linear"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            backgroundColor: orb.color,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Cyber/Data line elements for Microsoft ecosystem theme */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
    </div>
  );
}
