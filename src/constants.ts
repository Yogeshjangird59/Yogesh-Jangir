import { Contact, EmergencyAction } from './types';

export const MOCK_CONTACTS: Contact[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    relationship: 'Mom',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    isOnline: true,
    quickNotify: true,
  },
  {
    id: '2',
    name: 'David Chen',
    relationship: 'Husband',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    isOnline: true,
    quickNotify: true,
  },
  {
    id: '3',
    name: 'Marcus Wright',
    relationship: 'Brother',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    isOnline: false,
    quickNotify: false,
  },
];

export const EMERGENCY_ACTIONS: EmergencyAction[] = [
  {
    id: 'call911',
    label: 'Call 911',
    description: 'Direct line to dispatch',
    icon: 'Phone',
    color: 'bg-primary-container',
  },
  {
    id: 'silent',
    label: 'Trigger Silent Alarm',
    description: 'Quiet alert to contacts',
    icon: 'BellOff',
    color: 'bg-surface-highest',
  },
  {
    id: 'flash',
    label: 'Flash Camera',
    description: 'High-intensity strobe',
    icon: 'Zap',
    color: 'bg-surface-highest',
  },
  {
    id: 'update',
    label: 'Send Location Update',
    description: 'Broadcast new coordinates',
    icon: 'MapPin',
    color: 'bg-surface-highest',
  },
];
