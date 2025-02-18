// app/dashboard/page.tsx
"use client";
import Image from "next/image";
import DashboardLayout from "./layout"; // Import the layout
import welcome from "../../../public/welcome.svg";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const DashboardPage = () => {
	const state = useAppSelector((state) => state.auth.accessToken);
	const route = useRouter();

	useEffect(() => {
		if (!state) {
			route.push("/login");
		}
	}, [state, route]);

	if (!state) return null;

	return (
		<DashboardLayout showSidebar={false}>
			<div className="flex justify-center">
				<Image src={welcome} className="w-3/5" alt="Admin Welcome"></Image>
			</div>
		</DashboardLayout>
	);
};

export default DashboardPage;
