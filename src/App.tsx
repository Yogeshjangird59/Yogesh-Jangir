import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserPlus, Info, AlertTriangle, X, Search } from 'lucide-react';
import { TopAppBar } from './components/TopAppBar';
import { BottomNavBar } from './components/BottomNavBar';
import { MapBackground } from './components/MapBackground';
import { SOSButton } from './components/SOSButton';
import { EmergencyPanel } from './components/EmergencyPanel';
import { ContactCard } from './components/ContactCard';
import { Screen } from './types';
import { MOCK_CONTACTS } from './constants';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('map');
  const [isSOSActive, setIsSOSActive] = useState(false);

  const handleSOS = () => {
    setIsSOSActive(true);
    setActiveScreen('map');
  };

  return (
    <div className="relative h-screen w-full bg-surface overflow-hidden">
      <TopAppBar />

      <main className="relative h-full w-full pt-16">
        {/* Map is always the background for Map and SOS Active */}
        <MapBackground />

        <AnimatePresence mode="wait">
          {isSOSActive && (
            <motion.div
              key="sos-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[60] pointer-events-none"
            >
              {/* SOS Alert Banner */}
              <div className="fixed top-4 left-4 right-4 z-[70] flex justify-center pointer-events-none">
                <motion.div
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  className="bg-red-900/60 backdrop-blur-2xl w-full max-w-lg rounded-3xl p-4 flex items-center gap-4 shadow-2xl border border-white/10 pointer-events-auto"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center animate-pulse">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-headline font-bold text-white text-base leading-tight">SOS Alert Sent to Emergency Contacts</p>
                    <p className="text-white/70 text-[10px] font-medium uppercase tracking-wider mt-0.5">Live tracking active • Police notified</p>
                  </div>
                  <button 
                    onClick={() => setIsSOSActive(false)}
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </motion.div>
              </div>

              <EmergencyPanel onCancel={() => setIsSOSActive(false)} />
            </motion.div>
          )}

          {activeScreen === 'map' && !isSOSActive && (
            <motion.div
              key="map-ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10"
            >
              {/* Search Bar */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md">
                <div className="bg-surface/60 backdrop-blur-2xl rounded-full px-5 py-4 flex items-center gap-3 shadow-2xl border border-white/5">
                  <Search className="w-5 h-5 text-primary opacity-60" />
                  <input
                    type="text"
                    placeholder="Search safe locations..."
                    className="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-slate-500 w-full font-medium text-sm"
                  />
                </div>
              </div>

              <SOSButton onHoldComplete={handleSOS} />
            </motion.div>
          )}

          {activeScreen === 'settings' && (
            <motion.section
              key="emergency-network"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 w-full z-[80]"
            >
              <div className="glass rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] max-h-[85vh] overflow-hidden flex flex-col">
                {/* Pull Indicator */}
                <div className="w-full flex justify-center pt-4 pb-2">
                  <div className="w-12 h-1.5 bg-white/20 rounded-full" />
                </div>

                {/* Header */}
                <div className="px-8 py-6 flex justify-between items-center">
                  <div>
                    <h2 className="font-headline text-2xl font-extrabold tracking-tight text-white">Emergency Network</h2>
                    <p className="text-on-surface-variant text-sm mt-1">3 active contacts notified during SOS</p>
                  </div>
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-secondary text-secondary font-semibold text-xs hover:bg-secondary/10 transition-colors">
                    <UserPlus className="w-4 h-4" />
                    Add New Contact
                  </button>
                </div>

                {/* Contact List */}
                <div className="px-8 pb-40 pt-2 overflow-y-auto space-y-4">
                  {MOCK_CONTACTS.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                  ))}

                  {/* Trust Factor Card */}
                  <div className="mt-8 bg-gradient-to-br from-primary-container/20 to-transparent p-6 rounded-[2rem] border border-primary-container/10">
                    <div className="flex gap-4">
                      <Info className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-headline font-bold text-white">Trust Factor</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed mt-1">
                          Contacts with 'Quick Notify' enabled will receive your live GPS location instantly if an SOS is triggered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <BottomNavBar activeScreen={activeScreen} onNavigate={setActiveScreen} />
    </div>
  );
}
