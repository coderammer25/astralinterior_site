"use client";

import { Nav } from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient"; // Import your Apollo Client setup file
import { useEffect } from "react";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// useEffect(() => {
	// 	scrollToTop();
	// });

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<html lang="en">
			<body className="antialiased font-geist text-[#2c2b28] bg-[#f3fbfa] overflow-x-hidden">
				<ApolloProvider client={client}>
					<Provider store={store}>
						<Nav />
						{children}
						<Footer />
						<span>
							<Link
								href="https://wa.me/8801722080196"
								target="_blank"
								rel="noopener noreferrer"
								className="fixed top-48 right-0 lg:-right-1 bg-green-500 hover:pr-8 text-white p-2 text-2xl cursor-pointer transition-all duration-300 rounded-l-md z-10"
							>
								<FaWhatsapp />
							</Link>
						</span>
						<button
							onClick={scrollToTop}
							className="fixed transition-all right-2 bg-[#135a58] text-white p-3 rounded-full shadow-lg z-20 bottom-16"
						>
							<FaArrowUp />
						</button>
						<ToastContainer />
					</Provider>
				</ApolloProvider>
			</body>
		</html>
	);
}
