import {
	MdOutlineEmail,
	MdLocalPhone,
	MdOutlineLocationOn,
} from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function Location() {
	return (
		<section className="container mx-auto px-4 py-16 mt-[4rem]">
			<div className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
					Get in Touch
				</h2>
				<p
					className="text-gray-600 max-w-2xl mx-auto"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					Visit our showroom to experience our designs in person or reach out
					through any of our communication channels
				</p>
			</div>

			{/* Contact Cards */}
			<div
				className="grid lg:grid-cols-3 gap-8 mb-16 items-stretch"
				data-aos="fade-up"
				data-aos-delay="200"
			>
				<a
					href="mailto:astralinterior2@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
						<div className="flex justify-center mb-6">
							<MdOutlineEmail className="w-12 h-12 text-[#0a6f68]" />
						</div>
						<h3 className="text-xl font-semibold mb-4">Email Us</h3>
						<p className="text-gray-600 mb-4">
							Get in touch with us through email
						</p>
						<p className="text-[#0a6f68] hover:underline">
							astralinterior2@gmail.com
						</p>
					</div>
				</a>
				{/* repeat the same for other cards */}
				<a href="tel:+8801703706613" target="_blank" rel="noopener noreferrer">
					<div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
						<div className="flex justify-center mb-6">
							<MdLocalPhone className="w-12 h-12 text-[#0a6f68]" />
						</div>
						<h3 className="text-xl font-semibold mb-4">Call Us</h3>
						<p className="text-gray-600 mb-4">
							Speak to our customer support team
						</p>
						<p className="text-[#0a6f68] hover:underline">+880 1703-706613</p>
					</div>
				</a>

				<a
					href="https://www.google.com/search?q=astral+interior&oq=astral+interior&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0NTIwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
						<div className="flex justify-center mb-6">
							<MdOutlineLocationOn className="w-12 h-12 text-[#0a6f68]" />
						</div>
						<h3 className="text-xl font-semibold mb-4">Visit Us</h3>
						<p className="text-gray-600 mb-4">Our showroom is open for you</p>
						<p className="text-[#0a6f68]">
							28 Navana Zohura Square F#D-11, Mymensingh Road, BanglaMotor
						</p>
					</div>
				</a>
			</div>

			{/* Map and Additional Info */}
			<div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
				{/* Map Section - 3 columns */}
				<div
					className="w-full lg:w-2/3 relative h-[500px] rounded-lg overflow-hidden shadow-lg"
					data-aos="fade-right"
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0345790250817!2d90.39161247592749!3d23.746146288938526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79c84cc9929%3A0xbbf986544f8c515!2sASTRAL%20INTERIOR!5e0!3m2!1sen!2sbd!4v1741768385670!5m2!1sen!2sbd"
						className="absolute inset-0 w-full h-full border-2 border-[#072120] rounded-lg"
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						aria-label="Location map of Astral Interior showroom"
					></iframe>
				</div>

				{/* Additional Info Section - 2 columns */}
				<div
					className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-lg"
					data-aos="fade-left"
				>
					<div className="space-y-8">
						<div>
							<h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
							<div className="space-y-3">
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Saturday - Thursday</span>
									<span className="font-medium">10:00 AM - 6:00 PM</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Friday</span>
									<span className="font-medium">Closed</span>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
							<div className="flex justify-between sm:gap-8 sm:justify-center">
								<Link
									href="https://www.facebook.com/astralinteriorfurniture"
									target="_blank"
									className="bg-[#0a6f68] p-3 rounded-md border-2 border-[#0a6f68] transition-all duration-500 hover:bg-white hover:text-[#0a6f68] text-white"
								>
									<FaFacebookF className="md:w-5 md:h-5" />
								</Link>
								<Link
									href="https://www.instagram.com/astralinterior"
									target="_blank"
									className="bg-[#0a6f68] p-3 rounded-md border-2 border-[#0a6f68] transition-all duration-500 hover:bg-white hover:text-[#0a6f68] text-white"
								>
									<BsInstagram className="md:w-5 md:h-5" />
								</Link>
								<Link
									href="https://www.linkedin.com/company/astral-interior-furniture-bd"
									target="_blank"
									className="bg-[#0a6f68] p-3 rounded-md border-2 border-[#0a6f68] transition-all duration-500 hover:bg-white hover:text-[#0a6f68] text-white"
								>
									<FaLinkedinIn className="md:w-5 md:h-5" />
								</Link>
								<Link
									href="https://www.youtube.com/@AstralInteriorFurniture"
									target="_blank"
									className="bg-[#0a6f68] p-3 rounded-md border-2 border-[#0a6f68] transition-all duration-500 hover:bg-white hover:text-[#0a6f68] text-white"
								>
									<RiYoutubeLine className="md:w-5 md:h-5" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
