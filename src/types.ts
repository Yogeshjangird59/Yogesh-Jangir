export interface Contact {
  id: string;
  name: string;
  relationship: string;
  avatar: string;
  isOnline: boolean;
  quickNotify: boolean;
}

export type Screen = 'map' | 'safety' | 'alerts' | 'settings';

export interface EmergencyAction {
  id: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}
