import React from 'react';
import { motion } from 'motion/react';

interface SOSButtonProps {
  onHoldComplete: () => void;
}

export const SOSButton: React.FC<SOSButtonProps> = ({ onHoldComplete }) => {
  return (
    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-40">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onPointerDown={(e) => {
          // In a real app, we'd use a timer for "hold"
          // For this demo, we'll trigger on click for responsiveness
        }}
        onClick={onHoldComplete}
        className="relative w-28 h-28 rounded-full sos-gradient flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(255,84,81,0.5)] border-4 border-white/20"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-white"
        />
        <span className="relative font-headline font-black text-3xl text-white tracking-tighter">SOS</span>
        <span className="relative text-[10px] font-black uppercase text-white/80 -mt-1">Hold</span>
      </motion.button>
    </div>
  );
};
