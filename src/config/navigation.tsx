"use client"

import { Home, Sparkles, Phone } from 'lucide-react'
import { NavItem } from '@/components/ui/tubelight-navbar'

export function useNavigationItems() {
  const items: NavItem[] = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Features', url: '#features', icon: Sparkles },
    { name: 'Contact', url: '#contact', icon: Phone }
  ]
  
  return items
} 