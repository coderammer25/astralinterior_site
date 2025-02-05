"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { toast } from "react-toastify";

const initialFormData = {
	name: "",
	email: "",
	phone: "",
	location: "",
	projectType: "",
	customize: "",
	message: "",
};

const ContactForm = () => {
	const [formData, setFormData] = useState(initialFormData);

	const notify = (type: string, message: string) =>
		toast(message, {
			position: "top-center",
			autoClose: 2000,
			type: type === "error" ? "error" : "success",
			closeButton: false,
			style: {
				backgroundColor: type === "error" ? "#f8d7da" : "#d4edda",
				color: type === "error" ? "#721c24" : "#155724",
				width: "100%",
			},
		});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!formData.name ||
			!formData.email ||
			!formData.phone ||
			!formData.message
		) {
			notify("error", "name, email, phone and message can't be empty");
			return;
		}

		console.log(formData);
		notify("success", "Message sent successfully");
		setFormData(initialFormData);
	};

	return (
		<>
			<div className="text-center">
				<h2 className="uppercase text-[2rem] md:text-[3rem] xl:text-[8rem] leading-[1] mb-[2rem]">
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
					<FaFacebookF className="md:w-[1.375rem] md:h-[1.375rem]" />
				</Link>
				<Link
					href="https://instagram.com"
					target="_blank"
					className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white cursor-pointer"
				>
					<FaInstagram className="md:w-[1.375rem] md:h-[1.375rem]" />
				</Link>
				<Link
					href="https://x.com"
					target="_blank"
					className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white cursor-pointer"
				>
					<FaXTwitter className="md:w-[1.375rem] md:h-[1.375rem]" />
				</Link>
				<Link
					href="https://linkedin.com"
					target="_blank"
					className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white cursor-pointer"
				>
					<FaLinkedinIn className="md:w-[1.375rem] md:h-[1.375rem]" />
				</Link>
				<Link
					href="https://youtube.com"
					target="_blank"
					className="bg-primary p-3 rounded-md border-2 border-primary transition-all duration-500 hover:bg-white hover:text-primary text-white cursor-pointer"
				>
					<RiYoutubeLine className="md:w-[1.475rem] md:h-[1.475rem]" />
				</Link>
			</div>

/
			<div className="border border-[#d0e5e4] rounded-md my-[3rem] py-[3rem] px-[2rem] lg:w-2/3 mx-auto bg-white shadow-md">
				<form className="space-y-[1.75rem]" onSubmit={handleSubmit}>
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
							onChange={handleChange}
							value={formData.name}
						/>
					</div>

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
							onChange={handleChange}
							value={formData.email}
						/>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="phone"
							className="font-bold text-[14px] leading-[20px] mb-[10px]"
						>
							Phone
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							placeholder="+8801778899444"
							className="border-2 border-[#d0e5e4] rounded-md py-[0.5rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6]"
							onChange={handleChange}
							value={formData.phone}
						/>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="location"
							className="font-bold text-[14px] leading-[20px] mb-[10px]"
						>
							Location
						</label>
						<input
							type="text"
							name="location"
							id="location"
							placeholder="Your Site Location"
							className="border-2 border-[#d0e5e4] rounded-md py-[0.5rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6]"
							onChange={handleChange}
							value={formData.location}
						/>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="projectType"
							className="font-bold text-[14px] leading-[20px] mb-[10px]"
						>
							Select
						</label>
						<select
							name="projectType"
							id="projectType"
							className="border-2 border-[#d0e5e4] rounded-md py-[0.5rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6] w-full"
							onChange={handleChange}
							value={formData.projectType}
						>
							<option value="">Select Project Type</option>
							<option value="residential">Residential</option>
							<option value="commercial">Commercial</option>
							<option value="hospitality">Hospitality</option>
							<option value="retail">Retail</option>
						</select>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="customize"
							className="font-bold text-[14px] leading-[20px] mb-[10px]"
						>
							Customize Your Furniture
						</label>
						<div>
							<input
								type="radio"
								id="yes"
								name="customize"
								value="YES"
								checked={formData.customize === "YES"}
								onChange={handleChange}
							/>
							  <label htmlFor="yes">YES</label>
						</div>
						<div>
							<input
								type="radio"
								id="nO"
								name="customize"
								value="NO"
								checked={formData.customize === "NO"}
								onChange={handleChange}
							/>
							  <label htmlFor="nO">NO</label>
						</div>
					</div>

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
							rows={4}
							placeholder="Share Your Thoughts"
							className="border-2 border-[#d0e5e4] rounded-md py-[0.5rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6]"
							onChange={handleChange}
							value={formData.message}
						></textarea>
					</div>

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
		</>
	);
};
export default ContactForm;
