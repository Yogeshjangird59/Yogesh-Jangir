import React from 'react';
import { Compass, Shield, History, Settings2 } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavBarProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeScreen, onNavigate }) => {
  const navItems = [
    { id: 'map' as Screen, label: 'Map', icon: Compass },
    { id: 'safety' as Screen, label: 'Safety', icon: Shield },
    { id: 'alerts' as Screen, label: 'Alerts', icon: History },
    { id: 'settings' as Screen, label: 'Settings', icon: Settings2 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-surface/80 backdrop-blur-2xl rounded-t-[2.5rem] border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center transition-all duration-300 px-4 py-2 rounded-2xl ${
              isActive ? 'text-primary bg-surface-highest/50' : 'text-slate-500 hover:text-white'
            }`}
          >
            <Icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-primary/20' : ''}`} />
            <span className="font-headline text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
