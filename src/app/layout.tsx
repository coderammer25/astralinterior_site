"use client";

import { Nav } from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { scrollToTop } from "@/utils/scroll";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient"; // Import your Apollo Client setup file
import { useEffect } from "react";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { AuthProvider } from "@/provider/AuthProvider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
		scrollToTop();
	});

	useEffect(() => {
		AOS.init();
		AOS.refresh();
		AOS.refreshHard();
	}, []);

	return (
		<html lang="en">
			<body className="antialiased font-geist text-[#2c2b28] bg-[#f3fbfa] overflow-x-hidden">
				<ApolloProvider client={client}>
					<AuthProvider>
						<Nav />
						{children}
						<Footer />
						<span className="fixed top-48 right-2 bg-green-500 text-white rounded-full p-2 text-2xl cursor-pointer transition-all duration-300">
							<Link
								href="https://wa.me/8801722080196"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWhatsapp />
							</Link>
						</span>
						<button
							onClick={scrollToTop}
							className="fixed transition-all right-2 bg-[#135a58] text-white p-3 rounded-full shadow-lg z-20 animate-bounce bottom-16"
						>
							<FaArrowUp />
						</button>
						<ToastContainer />
					</AuthProvider>
				</ApolloProvider>
			</body>
		</html>
	);
}
