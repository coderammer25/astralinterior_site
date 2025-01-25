import type { Metadata } from "next";
import "./globals.css";
import Toolbar from "@/components/shared/Toolbar";

export const metadata: Metadata = {
	title:
		"Astral Interior and Furniture | Premium Interior Solutions in Bangladesh",
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
			<body className="antialiased">
				<Toolbar />
				{children}
			</body>
		</html>
	);
}
