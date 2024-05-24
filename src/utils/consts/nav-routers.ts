import {
  CiCircleQuestion,
  CiDatabase,
  CiSettings,
  CiSquareInfo,
  CiStickyNote,
  CiViewList,
} from 'react-icons/ci';
import { NavRouters } from '../types';

export const navRouters: NavRouters[] = [
  { name: 'Dashboard', path: '/', icon: CiDatabase },
  { name: 'Vital Task', path: '/vital-task', icon: CiSquareInfo },
  { name: 'My Task', path: '/my-task', icon: CiStickyNote },
  { name: 'Task Categories', path: '/task-categories', icon: CiViewList },
  { name: 'Settings', path: '/settings', icon: CiSettings },
  { name: 'Help', path: '/help', icon: CiCircleQuestion },
];
