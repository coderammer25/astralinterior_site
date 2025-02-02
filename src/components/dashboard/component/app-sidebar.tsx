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
import Link from "next/link"

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
        { title: "All Messages", url: "/dashboard/allmessages" },
      ],
    },
    {
      title: "Services",
      url: "#",
      icon: MdIcon as unknown as LucideIcon,
      items: [
        { title: "All Services", url: "/dashboard/allservice" },
        { title: "Add Service", url: "/dashboard/addservice" },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      icon: RiIcon as unknown as LucideIcon,
      items: [
        { title: "All Blogs", url: "/dashboard/allblogs" },
        { title: "Add Blog", url: "/dashboard/addblog" },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: GoIcon as unknown as LucideIcon,
      items: [
        { title: "All Projects", url: "/dashboard/allprojects" },
        { title: "Add Project", url: "/dashboard/addproject" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href={"/dashboard"}>
        <TeamSwitcher teams={data?.teams} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data?.navMain} />
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
