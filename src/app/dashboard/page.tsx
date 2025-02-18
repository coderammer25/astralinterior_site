// app/dashboard/page.tsx
"use client";
import Image from "next/image";
import DashboardLayout from "./layout"; // Import the layout
import welcome from "../../../public/welcome.svg";
const DashboardPage = () => {


	return (
		<DashboardLayout showSidebar={false}>
			<div className="flex justify-center">
				<Image src={welcome} className="w-3/5" alt="Admin Welcome"></Image>
			</div>
		</DashboardLayout>
	);
};

export default DashboardPage;
