import { MdOutlineEmail, MdLocalPhone, MdOutlineLocationOn } from "react-icons/md";
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
				className="grid md:grid-cols-3 gap-8 mb-16"
				data-aos="fade-up"
				data-aos-delay="200"
			>
				<div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
					<div className="flex justify-center mb-6">
						<MdOutlineEmail className="w-12 h-12 text-primary" />
					</div>
					<h3 className="text-xl font-semibold mb-4">Email Us</h3>
					<p className="text-gray-600 mb-4">
						Get in touch with us through email
					</p>
					<a
						href="mailto:astralinterior2@gmail.com"
						className="text-primary hover:underline"
					>
						astralinterior2@gmail.com
					</a>
				</div>

				<div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
					<div className="flex justify-center mb-6">
						<MdLocalPhone className="w-12 h-12 text-primary" />
					</div>
					<h3 className="text-xl font-semibold mb-4">Call Us</h3>
					<p className="text-gray-600 mb-4">
						Speak to our customer support team
					</p>
					<a href="tel:+8801703706613" className="text-primary hover:underline">
						+880 1703-706613
					</a>
				</div>

				<div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
					<div className="flex justify-center mb-6">
						<MdOutlineLocationOn className="w-12 h-12 text-primary" />
					</div>
					<h3 className="text-xl font-semibold mb-4">Visit Us</h3>
					<p className="text-gray-600 mb-4">Our showroom is open for you</p>
					<p className="text-primary">
						28 Navana Zohura Square F#D-11, Mymensingh Road, BanglaMotor
					</p>
				</div>
			</div>

			{/* Map and Additional Info */}
			<div className="grid lg:grid-cols-5 gap-8 items-start">
				{/* Map Section - 3 columns */}
				<div
					className="lg:col-span-3 relative h-[500px] rounded-lg overflow-hidden shadow-lg"
					data-aos="fade-right"
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0345790250817!2d90.39161247592749!3d23.746146288938526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79c84cc9929%3A0xbbf986544f8c515!2sASTRAL%20INTERIOR!5e0!3m2!1sen!2sbd!4v1741768385670!5m2!1sen!2sbd"
						className="absolute inset-0 w-full h-full border-0"
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						aria-label="Location map of Astral Interior showroom"
					></iframe>
				</div>

				{/* Additional Info Section - 2 columns */}
				<div
					className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg"
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
							<div className="flex gap-4">
								<Link
									href="https://www.facebook.com/astralinteriorfurniture"
									target="_blank"
									className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white"
								>
									<FaFacebookF className="w-5 h-5" />
								</Link>
								<Link
									href="https://www.instagram.com/astralinterior"
									target="_blank"
									className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white"
								>
									<BsInstagram className="w-5 h-5" />
								</Link>
								<Link
									href="https://www.linkedin.com/company/astral-interior-furniture-bd"
									target="_blank"
									className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white"
								>
									<FaLinkedinIn className="w-5 h-5" />
								</Link>
								<Link
									href="https://www.youtube.com/@AstralInteriorFurniture"
									target="_blank"
									className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white"
								>
									<RiYoutubeLine className="w-5 h-5" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
