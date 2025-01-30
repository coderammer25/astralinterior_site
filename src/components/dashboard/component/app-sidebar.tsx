"use client"

import * as React from "react"
import Image from "next/image"
import { NavMain } from "@/components/dashboard/component/nav-main"
import { TeamSwitcher } from "@/components/dashboard/component/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { LucideMessageSquareText, LucideIcon } from "lucide-react"
import { MdOutlineHomeRepairService as MdIcon } from "react-icons/md"
import { RiBloggerLine as RiIcon } from "react-icons/ri"
import { GoProject as GoIcon } from "react-icons/go"

const data = {

  teams: [
    {
      name: "Astral Interior",
      logo: () => <Image src="/astral-logo.png" alt="Team Logo" width={40} height={40} />,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Messages",
      url: "#",
      icon: LucideMessageSquareText as unknown as LucideIcon,
      isActive: true,
      items: [
        { title: "All Messages", url: "#" },
      ],
    },
    {
      title: "Services",
      url: "#",
      icon: MdIcon as unknown as LucideIcon,
      items: [
        { title: "Add Services", url: "#" },
        { title: "All Services", url: "#" },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      icon: RiIcon as unknown as LucideIcon,
      items: [
        { title: "All Blogs", url: "#" },
        { title: "Add Blog", url: "#" },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: GoIcon as unknown as LucideIcon,
      items: [
        { title: "All Projects", url: "#" },
        { title: "add services", url: "#" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data?.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data?.navMain} />
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
