import React from 'react';
import { Menu, Bell, Settings } from 'lucide-react';

export const TopAppBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface/60 backdrop-blur-2xl bg-gradient-to-b from-surface-low to-transparent">
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <Menu className="w-6 h-6 text-primary" />
        </button>
        <h1 className="font-headline font-black text-primary tracking-widest uppercase text-xl">SafeZone</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors relative">
          <Bell className="w-6 h-6 text-primary" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full shadow-[0_0_8px_rgba(74,225,118,0.6)]"></span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-highest/40 hover:bg-white/10 transition-colors">
          <Settings className="w-6 h-6 text-primary" />
        </button>
      </div>
    </header>
  );
};
