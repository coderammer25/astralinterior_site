"use client";
import { ToastContainer } from "react-toastify";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { scrollToTop } from "@/utils/scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { useEffect } from "react";

export default function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
		scrollToTop();
	});

	return (
		<>
			{children}
			<span className="fixed top-48 right-4 lg:right-2 bg-green-500 text-white rounded-full p-2 text-2xl cursor-pointer transition-all duration-300">
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
				className="fixed transition-all right-4 lg:right-2 bg-[#135a58] text-white p-3 rounded-full shadow-lg z-20 animate-bounce bottom-16"
			>
				<FaArrowUp />
			</button>
			<ToastContainer />
		</>
	);
}
