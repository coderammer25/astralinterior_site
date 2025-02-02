
import { AppSidebar } from "@/components/dashboard/component/app-sidebar";
import { NavUser } from "@/components/dashboard/component/nav-user";  // User info component
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";  // Sidebar provider context
import { Separator } from "@radix-ui/react-separator";  // Radix separator component
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;  // Optional prop to control sidebar visibility
}

const user = [
  {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
];

export default function DashboardLayout({ children, showSidebar = true }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      {/* Conditionally render the Sidebar based on the showSidebar prop */}
      {showSidebar && <AppSidebar />}
      <SidebarInset>
        {/* Header section */}
       {showSidebar && (
         <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] px-7 py-2">
         <div className="flex items-center gap-2 px-4">
           {showSidebar && <SidebarTrigger className="-ml-1" />}
           {showSidebar && <Separator orientation="vertical" className="mr-2 h-4" />}
         </div>
         <div>
          {showSidebar &&  <NavUser user={user[0]} />}
         </div>
       </header>
       )}

        {/* Main content */}
        <div className="flex flex-1 flex-col gap-4 p-10 bg-gray-50">
          <div className="flex-1 rounded-xl bg-muted/50 md:min-h-min bg-white">
            {/* Here, the children (like MessagePage or other content) will be rendered */}
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
