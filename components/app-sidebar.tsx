"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboard, ArrowUpDown, Wallet, Tags, Settings, Loader2 } from "lucide-react"
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from "@clerk/nextjs"
import HeaderLogo from "@/components/header-logo"

const routes = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/transactions", label: "Transactions", icon: ArrowUpDown },
  { href: "/accounts", label: "Accounts", icon: Wallet },
  { href: "/categories", label: "Categories", icon: Tags },
  { href: "/settings", label: "Settings", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { user, isLoaded } = useUser()

  const name =
    user?.fullName ||
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    user?.username ||
    "Account"

  const email = user?.primaryEmailAddress?.emailAddress

  return (
    <Sidebar variant="inset" collapsible="offcanvas">
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <HeaderLogo />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton asChild isActive={pathname === route.href}>
                    <Link href={route.href}>
                      <route.icon className="size-4" />
                      <span>{route.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 p-3">
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-6 animate-spin text-slate-400" />
          </ClerkLoading>

          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-medium">{name}</div>
            {email ? (
              <div className="truncate text-xs text-muted-foreground">{email}</div>
            ) : null}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
