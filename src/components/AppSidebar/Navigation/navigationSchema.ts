import { LayoutDashboardIcon, LucideIcon, Sparkles } from 'lucide-react';

export type NavigationItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
};

type NavigationGroup = {
  [key: string]: NavigationItem[];
};

export const navigationSchema: NavigationGroup = {
  main: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboardIcon,
    },
    {
      title: 'Tracker',
      url: '/tracker',
      icon: Sparkles,
    },
  ],
};
