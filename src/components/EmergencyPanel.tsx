import React from 'react';
import { motion } from 'motion/react';
import { Phone, BellOff, Zap, MapPin, X } from 'lucide-react';
import { EMERGENCY_ACTIONS } from '../constants';

interface EmergencyPanelProps {
  onCancel: () => void;
}

const ICON_MAP: Record<string, any> = {
  Phone,
  BellOff,
  Zap,
  MapPin,
};

export const EmergencyPanel: React.FC<EmergencyPanelProps> = ({ onCancel }) => {
  return (
    <div className="absolute top-24 right-6 z-50 w-72">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-surface-highest/90 backdrop-blur-3xl rounded-[2.5rem] p-2 shadow-2xl border border-white/5"
      >
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-headline font-extrabold text-[10px] tracking-widest uppercase text-primary">Emergency Panel</span>
            <div className="flex gap-1">
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary-container"
              />
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {EMERGENCY_ACTIONS.map((action) => {
              const Icon = ICON_MAP[action.icon];
              return (
                <motion.button
                  key={action.id}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-4 p-3.5 rounded-3xl group transition-all duration-200 ${
                    action.id === 'call911' ? 'bg-primary-container' : 'bg-surface-container hover:bg-surface-highest'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                    action.id === 'call911' ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'
                  }`}>
                    <Icon className={`w-5 h-5 ${action.id === 'call911' ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <div className="text-left">
                    <p className={`font-bold text-sm ${action.id === 'call911' ? 'text-white' : 'text-on-surface'}`}>
                      {action.label}
                    </p>
                    <p className={`text-[10px] font-medium ${action.id === 'call911' ? 'text-white/80' : 'text-on-surface-variant'}`}>
                      {action.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <button
            onClick={onCancel}
            className="w-full mt-2 py-4 rounded-xl font-headline font-bold text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors"
          >
            Cancel SOS Alert
          </button>
        </div>
      </motion.div>
    </div>
  );
};
