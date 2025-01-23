"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { useNavigationItems } from "@/config/navigation"

export function SiteHeader() {
  const navigationItems = useNavigationItems()
  
  return <NavBar items={navigationItems} />
} 