"use client";

import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import logo from "../../../public/astral-logo.png";
export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#072120] text-white py-12">
			{/* Logo and Tagline */}
			<div className="flex flex-col gap-16 lg:gap-0 lg:flex-row justify-between mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8 pb-10">
				<div className="lg:w-1/2">
					<div className="space-y-4">
						<Link href="/">
							<Image
								src={logo}
								alt="Astral Logo"
								className="w-40 font-semibold mb-4"
							/>
						</Link>
						<div className="inline-block">
							<p className="text-white lg:w-2/3">
								Transforming spaces into timeless experiences. At Astral, we
								blend creativity, functionality, and elegance to craft interiors
								that inspire. From concept to completion, we design spaces that
								reflect your unique style and vision.
							</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-12 md:gap-32 mt-10">
						<div className="space-y-4">
							<h4 className="font-semibold mb-8 uppercase text-xl text-white">
								Navigate
							</h4>
							<Link href="/about-us" className="block hover:underline">
								ABOUT US
							</Link>
							<Link href="/services" className="block hover:underline">
								SERVICES
							</Link>
							<Link href="/blog" className="block hover:underline">
								BLOG
							</Link>
							<Link href="/contact-us" className="block hover:underline">
								SHOP
							</Link>
						</div>

						<div className="space-y-4">
							<h4 className="font-semibold mb-8 uppercase text-xl text-white">
								Information
							</h4>
							<Link href="#" className="block hover:underline">
								Terms & Conditions
							</Link>
							<Link href="#" className="block hover:underline">
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>

				{/* Main Navigation Grid */}
				<div className="flex flex-col lg:flex-row justify-between gap-10 lg:w-1/2">
					<div className="space-y-4 w-full">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0345790250817!2d90.39161247592749!3d23.746146288938526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79c84cc9929%3A0xbbf986544f8c515!2sASTRAL%20INTERIOR!5e0!3m2!1sen!2sbd!4v1741768385670!5m2!1sen!2sbd"
							className="h-full w-full border-0 rounded-md"
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							aria-label="Location map of Astral Interior office"
						></iframe>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="mt-10 flex flex-col gap-10 lg:flex-row md:space-x-3 justify-between lg:items-center text-sm border-t border-white pt-10 lg:mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8">
				<div className="flex flex-col lg:flex-row lg:items-center gap-2">
					<span className="text-white uppercase">
						{currentYear}
						<Link
							href="https://www.linkedin.com/company/astral-interior-furniture-bd"
							target="_blank"
							className="text-white ml-2 inline-block hover:underline uppercase"
						>
							@Astral Interior.{" "}
						</Link>{" "}
						All Rights Reserved
					</span>
					<span className="text-white">
						DEVELOPED BY
						<Link
							href="https://coderammer.com"
							target="_blank"
							className="text-white ml-2 hover:underline"
						>
							CODERAMMER
						</Link>
					</span>
				</div>

				{/* Social Icons Column */}
				<div className="flex items-center gap-4">
					<Link
						href="https://www.instagram.com/astralinterior"
						target="_blank"
						className="block w-6"
					>
						<BsInstagram className="w-5 h-5" />
					</Link>
					<Link
						href="https://www.youtube.com/@AstralInteriorFurniture"
						target="_blank"
						className="block w-6"
					>
						<FiYoutube className="w-6 h-6" />
					</Link>
					<Link
						href="https://www.linkedin.com/company/astral-interior-furniture-bd"
						target="_blank"
						className="block w-6"
					>
						<FaLinkedinIn className="w-6 h-6" />
					</Link>
					<Link
						href="https://www.facebook.com/astralinteriorfurniture"
						target="_blank"
						className="block w-6"
					>
						<FaFacebook className="w-6 h-6" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
