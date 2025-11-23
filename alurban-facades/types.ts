import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  label: string;
  value: string;
  subValue?: string;
  icon: LucideIcon;
}