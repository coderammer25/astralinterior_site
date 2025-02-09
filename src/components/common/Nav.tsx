"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/astral-logo.png";
import { motion } from "framer-motion";
import { Drawer } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Nav = () => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	// Add scroll event listener
	// if (typeof window !== "undefined") {
	// }

	const onClose = () => {
		setOpen(false);
	};

	const handleScroll = () => {
		const navId = document.getElementById("navId");
		if (window.scrollY > 0) {
			navId?.classList.add(
				"shadow-md",
				"sticky",
				"top-0",
				"left-0",
				"bg-white/50",
				"z-10",
				"backdrop-blur-md"
			);
		} else {
			navId?.classList.remove(
				"shadow-md",
				"sticky",
				"top-0",
				"left-0",
				"bg-white/50",
				"z-10",
				"backdrop-blur-md"
			);
		}
	};

	window.addEventListener("scroll", handleScroll);

	return (
		<section id="navId">
			<div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between">
					<Link
						href="/"
						aria-label="Astral"
						title="Astral"
						className="inline-flex items-center"
					>
						<Image className="w-[140px] select-none" src={logo} alt="" />
					</Link>

					<div className="flex items-center gap-4 lg:space-x-[90px]">
						<ul className="grid justify-end items-center space-x-8">
							<li>
								<Link
									href="/contact-us"
									className="text-primary inline-flex items-center justify-center h-12 px-1 font-medium tracking-wide transition duration-200 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700  border-b-2 border-transparent hover:border-primary"
									aria-label="Contact Us"
									title="Contact Us"
								>
									Contact Us
								</Link>
							</li>
						</ul>

						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
							onClick={() => showDrawer()}
						>
							<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						<Drawer
							placement="right"
							closable={true}
							onClose={onClose}
							open={open}
							mask={false}
							className=""
						>
							<motion.div
								className="p-10 -ml-10"
								initial={{ x: "100%" }}
								animate={{ x: "6%" }}
								exit={{ x: "100%" }}
								transition={{
									duration: 0.5,
									ease: [0.25, 0.8, 0.5, 1],
								}}
							>
								<Link
									href="/"
									aria-label="Astral"
									title="Astral"
									className="inline-flex items-center"
								>
									<Image className="w-[140px] select-none" src={logo} alt="" />
								</Link>
								<div className="border-b-2 border-gray-300 p-3 pt-10 pb-[80px]">
									<nav>
										<ul className="space-y-7 font-geist text-xl">
											<li>
												<Link
													href="/services"
													aria-label="services"
													title="services"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-700"
												>
													Services
												</Link>
											</li>
											<li>
												<Link
													href="/about-us"
													aria-label="about us"
													title="about us"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-700"
												>
													About
												</Link>
											</li>
											<li>
												<Link
													href="/blog"
													aria-label="Blog"
													title="Blog"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-700"
												>
													Blog
												</Link>
											</li>

											<li>
												<Link
													href="/contact-us"
													aria-label="Contact us"
													title="Contact us"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-700"
												>
													Contact
												</Link>
											</li>
										</ul>
									</nav>
								</div>

								<div className="space-y-3">
									<h1 className="text-3xl font-bold font-playfair mt-10 mb-4">
										Schedule Your Design Consultation Today!
									</h1>
									<p className="inline-flex font-geist text-base ">
										<FaPhoneAlt className="mt-1 mr-2" /> Call: +880 1703-706613
									</p>

									<p className="inline-flex font-geist text-base">
										<MdEmail className="mt-1 mr-2" /> Email:
										astralinterior2@gmail.com
									</p>
								</div>
							</motion.div>
						</Drawer>
					</div>
				</div>
			</div>
		</section>
	);
};
