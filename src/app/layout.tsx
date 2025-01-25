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
