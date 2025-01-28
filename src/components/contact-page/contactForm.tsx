import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";

const ContactForm = () => {
	return (
		<div>
			<div className="text-center">
				<h2 className="uppercase text-[8rem] leading-[1] mb-[2rem]">
					Get in <span className="font-playfair text-heading">touch</span>
				</h2>
				<p className="text-[1.125rem] lg:w-1/2 mx-auto leading-[1.4]">
					Reach out to discuss your project, ask questions, or schedule a
					consultation. We’re excited to collaborate and bring your dream
					interiors to reality.
				</p>
			</div>

			<div className="flex items-center justify-center gap-4 mt-[2rem]">
				<Link
					href="https://facebook.com"
					target="_blank"
					className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white cursor-pointer"
				>
					<FaFacebookF className="w-[1.375rem] h-[1.375rem]" />
				</Link>
				<Link
					href="https://instagram.com"
					target="_blank"
					className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white cursor-pointer"
				>
					<FaInstagram className="w-[1.375rem] h-[1.375rem]" />
				</Link>
				<Link
					href="https://x.com"
					target="_blank"
					className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white cursor-pointer"
				>
					<FaXTwitter className="w-[1.375rem] h-[1.375rem]" />
				</Link>
				<Link
					href="https://linkedin.com"
					target="_blank"
					className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white cursor-pointer"
				>
					<FaLinkedinIn className="w-[1.375rem] h-[1.375rem]" />
				</Link>
				<Link
					href="https://youtube.com"
					target="_blank"
					className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white cursor-pointer"
				>
					<RiYoutubeLine className="w-[1.475rem] h-[1.475rem]" />
				</Link>
			</div>

			<div className="border border-[#d0e5e4] rounded-md my-[3rem] py-[3rem] px-[2rem] w-2/3 mx-auto bg-white shadow-md">
				<form className="space-y-[1.75rem]">
					{/* Name Field */}
					<div className="flex flex-col">
						<label
							htmlFor="name"
							className="font-bold text-[14px] leading-[20px] mb-[10px]"
						>
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="John Doe"
							className="border-2 border-[#d0e5e4] rounded-md py-[0.5rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6]"
						/>
					</div>

					{/* Email Field */}
					<div className="flex flex-col">
						<label
							htmlFor="email"
							className="font-bold text-[14px] leading-[20px] mb-[10px]"
						>
							Email Address
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="admin@gmail.com"
							className="border-2 border-[#d0e5e4] rounded-md py-[0.5rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6]"
						/>
					</div>

					{/* Subject Field */}
					<div className="flex flex-col">
						<label
							htmlFor="phone"
							className="font-bold text-[14px] leading-[20px] mb-[10px]"
						>
							Subject
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							placeholder="+8801778899444"
							className="border-2 border-[#d0e5e4] rounded-md py-[0.5rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6]"
						/>
					</div>

					{/* Message Field */}
					<div className="flex flex-col">
						<label
							htmlFor="message"
							className="font-bold text-[14px] leading-[20px] mb-[10px]"
						>
							Message
						</label>
						<textarea
							name="message"
							id="message"
							placeholder="Share Your Thoughts"
							className="border-2 border-[#d0e5e4] rounded-md py-[0.5rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6]"
						></textarea>
					</div>

					{/* Submit Button */}
					<div className="mt-[3rem]">
						<button
							type="submit"
							className="w-full bg-primary text-white border-2 rounded-md border-primary py-[0.75rem] px-[2rem] transition-all duration-500 hover:bg-white hover:text-primary"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ContactForm;
