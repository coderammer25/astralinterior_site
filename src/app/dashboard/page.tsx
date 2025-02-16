// app/dashboard/page.tsx
"use client";
import Image from "next/image";
import DashboardLayout from "./layout"; // Import the layout
import welcome from "../../../public/welcome.svg";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
const DashboardPage = () => {
	const contextValue = useAuth(); // Get user data from context
	const router = useRouter();
  
	if (!contextValue?.token) {
    router.push("/login");
  }

	return (
		<DashboardLayout showSidebar={false}>
			<div className="flex justify-center">
				<Image src={welcome} className="w-3/5" alt="Admin Welcome"></Image>
			</div>
		</DashboardLayout>
	);
};

export default DashboardPage;
