"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../../../public/astral-logo.png";
import { motion } from "framer-motion";
import { Drawer } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { menuItems } from "@/data";
import { CustomButton } from "../ui/customButton";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export const Nav = () => {
	const [open, setOpen] = useState(false);
	const drawerContentRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLAnchorElement>(null);
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const pathname = usePathname();

	// GSAP animation on homepage for big screens only
	useEffect(() => {
		if (pathname === "/" && !isMobile && logoRef.current) {
			const logoEl = logoRef.current;

			// initial position
			gsap.set(logoEl, { x: 530, y: 300, scale: 2.2, visibility: "visible" });

			const animation = gsap.to(logoEl, {
				x: 0,
				y: 0,
				scale: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: "#navId",
					start: "top top",
					end: "+=400",
					scrub: 1.5,
				},
			});

			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
				animation.kill();
				gsap.set(logoEl, { x: 0, y: 0, scale: 1, visibility: "visible" });
			};
		} else if (logoRef.current) {
			// reset logo for all other pages or small screens
			gsap.set(logoRef.current, {
				x: 0,
				y: 0,
				scale: 1,
				visibility: "visible",
			});
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		}
	}, [pathname, isMobile]);

	const showDrawer = () => setOpen(true);
	const onClose = () => setOpen(false);

	// Close drawer on outside click
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const drawerEl = drawerContentRef.current;
			if (drawerEl && !drawerEl.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		if (open) document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);

	// Sticky nav on scroll
	useEffect(() => {
		const handleScroll = () => {
			const navId = document.getElementById("navId");
			if (!navId) return;

			if (window.scrollY > 0) {
				navId.classList.add(
					"shadow-md",
					"sticky",
					"top-0",
					"left-0",
					"bg-white/50",
					"z-10",
					"backdrop-blur-md"
				);
			} else {
				navId.classList.remove(
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
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section id="navId" className="z-50">
			<div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between">
					{/* Logo */}
					<Link ref={logoRef} href="/" className="inline-flex items-center">
						<Image
							className="w-[80px] md:w-[140px] select-none"
							src={logo}
							alt="Astral Logo"
							priority
						/>
					</Link>

					{/* Desktop Menu */}
					<nav className="hidden md:block">
						<ul className="text-xl flex items-center justify-center gap-5 mr-5">
							{menuItems.map((item) => (
								<li key={item.id}>
									<Link
										href={`/${item.path}`}
										className="hover:text-green-700 capitalize"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Buttons and Drawer */}
					<div className="flex items-center gap-4 lg:space-x-[90px]">
						<ul className="flex gap-2 items-center md:space-x-8">
							<li>
								<Link
									href="/contact-us"
									className="text-primary text-[10px] md:text-base border-b-2 border-transparent hover:border-primary"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<CustomButton link="tel:+8801703706613">Call Now</CustomButton>
							</li>
						</ul>

						{/* Mobile Menu Button */}
						<button
							aria-label="Open Menu"
							onClick={showDrawer}
							className="p-2 -mr-1 hover:bg-gray-100 md:hidden"
						>
							<svg className="w-4 md:w-5 text-gray-600" viewBox="0 0 24 24">
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

						{/* Drawer */}
						<Drawer
							placement="right"
							closable={true}
							onClose={onClose}
							open={open}
							mask={false}
						>
							<motion.div
								ref={drawerContentRef}
								className="p-10 -ml-10"
								initial={{ x: "100%" }}
								animate={{ x: "6%" }}
								exit={{ x: "100%" }}
								transition={{ duration: 0.5, ease: [0.25, 0.8, 0.5, 1] }}
							>
								<Link
									href="/"
									className="inline-flex items-center"
									onClick={() => setOpen(false)}
								>
									<Image
										className="w-[140px] select-none"
										src={logo}
										alt="Astral Logo"
									/>
								</Link>

								<div className="border-b-2 border-gray-300 p-3 pt-10 pb-[80px]">
									<nav>
										<ul className="space-y-7 text-xl">
											{menuItems.map((item) => (
												<li key={item.id}>
													<Link
														href={`/${item.path}`}
														className="hover:text-green-700 capitalize"
														onClick={() => setOpen(false)}
													>
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									</nav>
								</div>

								<div className="space-y-3 mt-10">
									<h1 className="text-3xl font-bold">
										Schedule Your Design Consultation Today!
									</h1>
									<p className="flex text-base">
										<FaPhoneAlt className="mt-1 mr-2" /> Call: +880 1703-706613
									</p>
									<p className="flex text-base">
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
