
import { Nav } from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import ClientLayout from "./ClientLayout";
import type { Metadata } from "next";
import "./globals.css";
import { LayoutProvider } from "./LayoutProvider";

export const metadata: Metadata = {
	title: {
		default: "Astral Interior and Furniture | Premium Interior Solutions in Bangladesh",
		template: "%s | Astral Interior and Furniture",
	},
	description:
		"Astral Interior and Furniture provides expert interior fixing and furniture solutions across Bangladesh. We specialize in all types of interior work, from repairs to complete design makeovers.",
	keywords:
		"Interior design, Furniture, Home decor, Office furniture, Bangladesh, Modern furniture, Custom furniture",
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	return (
		<html lang="en">
			<body className="antialiased font-geist text-[#2c2b28] bg-[#f3fbfa] overflow-x-hidden">
				<Nav />
				<ClientLayout>{children}</ClientLayout>
				<Footer />
				<LayoutProvider>{children}</LayoutProvider>
			</body>
		</html>
	);
}
