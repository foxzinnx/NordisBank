"use client";

import { useRef, useState } from 'react';

interface WaveButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function WaveButton({ label, onClick, className = "" }: WaveButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [waveStyle, setWaveStyle] = useState({
    left: '50%',
    top: '50%',
    width: '0px',
    height: '0px'
  });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const size = Math.max(rect.width, rect.height) * 2.5;
      
      setWaveStyle({
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`
      });
      
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setWaveStyle(prev => ({
      ...prev,
      width: '0px',
      height: '0px'
    }));
    
    setIsHovering(false);
  };

  return (
    <div 
      ref={buttonRef}
      className={`relative w-60 mt-5 flex justify-center items-center border-2 border-black p-3 rounded-3xl cursor-pointer overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <button 
        className={`w-full cursor-pointer relative z-10 font-semibold transition-colors duration-500 ${isHovering ? 'text-white' : 'text-black'}`}
        type="button"
      >
        {label}
      </button>
      <span 
        className="absolute bg-black rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-600 z-0"
        style={waveStyle}
      />
    </div>
  );
}