"use client"; 

import Footer from "@/components/common/Footer";
import { Nav } from "@/components/common/Nav";
import { usePathname } from "next/navigation";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const hiddenRoutes = ["/dashboard", "/adminlogin"];
	const shouldHideLayout = hiddenRoutes.some((route) => pathname.startsWith(route));

	return (
		<>
			{!shouldHideLayout && <Nav />}
			{children}
			{!shouldHideLayout && <Footer />}
		</>
	);
}
