import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Contact } from '../types';

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <div className="bg-surface-container rounded-3xl p-4 flex items-center justify-between group transition-all hover:bg-surface-highest border border-transparent hover:border-white/5 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={contact.avatar}
            alt={contact.name}
            className={`w-14 h-14 rounded-2xl object-cover ${!contact.isOnline ? 'grayscale opacity-60' : ''}`}
            referrerPolicy="no-referrer"
          />
          {contact.isOnline && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-surface-container" />
          )}
        </div>
        <div>
          <h3 className={`font-headline font-bold text-lg ${contact.isOnline ? 'text-white' : 'text-white/50'}`}>
            {contact.name}
          </h3>
          <p className={`text-sm font-medium ${contact.isOnline ? 'text-on-surface-variant' : 'text-on-surface-variant/40'}`}>
            {contact.relationship}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="text-right hidden sm:block">
          <span className="block text-[10px] uppercase tracking-wider text-on-surface-variant mb-1">Quick Notify</span>
          <div className={`w-12 h-6 rounded-full relative p-1 cursor-pointer transition-colors ${contact.quickNotify ? 'bg-secondary/20' : 'bg-white/5'}`}>
            <div className={`w-4 h-4 rounded-full absolute transition-all ${contact.quickNotify ? 'bg-secondary right-1' : 'bg-slate-600 left-1'}`} />
          </div>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-highest/40 text-on-surface hover:text-primary transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
