import React from 'react';
import { motion } from 'motion/react';

export const MapBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-surface overflow-hidden">
      {/* Mock Map Mesh */}
      <div className="absolute inset-0 map-mesh opacity-40"></div>
      
      {/* Tech Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-primary/5" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-primary/5" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-primary/5" />
        <div className="absolute left-3/4 top-0 w-px h-full bg-primary/5" />
      </div>
      
      {/* Stylized Map Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,19,38,0.6)_100%)]"></div>

      {/* User Location Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-32 h-32 bg-primary/20 rounded-full"
          />
          <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,179,173,0.8)]" />
        </div>
      </div>

      {/* Safe Hub Marker */}
      <div className="absolute top-[35%] left-[60%] flex flex-col items-center">
        <div className="px-3 py-1 bg-secondary/20 backdrop-blur-md border border-secondary/40 rounded-full mb-2">
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Safe Hub</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-[0_0_20px_rgba(74,225,118,0.5)]">
          <div className="w-3 h-3 bg-on-surface rounded-full" />
        </div>
      </div>

      {/* Danger Zone */}
      <div className="absolute top-[60%] left-[30%] flex flex-col items-center">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-48 h-48 bg-error/10 rounded-full border border-error/20 flex items-center justify-center"
        >
          <span className="text-error/40 font-headline font-black text-4xl">!</span>
        </motion.div>
        <span className="mt-2 text-[10px] font-bold text-error uppercase tracking-widest bg-error/10 px-2 py-0.5 rounded">High Alert Area</span>
      </div>
    </div>
  );
};
