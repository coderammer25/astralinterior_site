import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
	weight: ["400", "700", "900"],
	subsets: ["latin"],
});

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
			<body
				className={`${roboto.className} ${playfairDisplay.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
