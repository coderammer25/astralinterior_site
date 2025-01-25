import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data";
import logoImg from "../../assets/icons/logo.png";

const Toolbar = () => {
	return (
		<nav className="bg-red-400">
			<div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="flex justify-between items-center">
					<Image
						src={logoImg}
						alt="Astral Interior & Furniture"
						width={150}
						height={150}
						className="object-contain w-auto h-16"
					/>

					<div className="flex items-center gap-6">
						<ul className="flex gap-4">
							{navLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										aria-label={`Navigate to ${link.name}`}
										className="text-gray-800 hover:text-primary transition"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>

						{/* Connect Button */}
						<button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primaryHover transition">
							Let&apos;s connect
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Toolbar;
