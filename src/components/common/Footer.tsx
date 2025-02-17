"use client";

import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import logo from "../../../public/astral-logo.png";
export default function Footer() {
	//bg-[#0a3d3b]

	return (
		<footer className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 text-black py-12">
			{/* Logo and Tagline */}
			<div className="flex flex-col gap-16 lg:gap-0 lg:flex-row justify-between mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8">
				<div className="lg:w-1/2">
					<Image
						src={logo}
						alt="Astral Logo"
						className="w-40 font-semibold mb-4"
					/>
					<div className="inline-block">
						<p className="text-black lg:w-2/3">
							Transforming spaces into timeless experiences. At Astral, we blend
							creativity, functionality, and elegance to craft interiors that
							inspire. From concept to completion, we design spaces that reflect
							your unique style and vision.
						</p>
					</div>
				</div>

				{/* Main Navigation Grid */}
				<div className="flex flex-col lg:flex-row justify-between gap-10 lg:w-1/2">
					{/* Column 5 */}
					<div className="space-y-4">
						<h4 className="font-semibold mb-8 uppercase text-xl text-[#135a58]">
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
						<Link href="/shop" className="block hover:underline">
							SHOP
						</Link>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold mb-8 uppercase text-xl text-[#135a58]">Information</h4>
						<Link href="#" className="block hover:underline">
							Terms & Conditions
						</Link>
						<Link href="#" className="block hover:underline">
							Privacy Policy
						</Link>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold mb-8 uppercase text-xl text-[#135a58]">Help & Support</h4>
						<Link href="/contact-us" className="block hover:underline">
							SUPPORT
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="mt-10 flex flex-col gap-10 lg:flex-row md:space-x-3 justify-between lg:items-center text-sm border-t border-gray-700 pt-10 lg:mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8">
				<div className="flex flex-col lg:flex-row lg:items-center gap-4">
					<span className="text-black uppercase">
						All Rights Reserved
						<Link
							href="https://www.linkedin.com/company/astral-interior-furniture-bd"
							target="_blank"
							className="text-white ml-2 inline-block hover:underline uppercase"
						>
							@Astral Interior
						</Link>
					</span>
					<span className="text-black">
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
