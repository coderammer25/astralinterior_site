"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";

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
	const [isSending, setIsSending] = useState(false);

	const notify = (type: string, message: string) =>
		toast(message, {
			position: "top-right",
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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!formData.name ||
			!formData.email ||
			!formData.phone ||
			!formData.location ||
			!formData.message
		) {
			notify(
				"error",
				"Name, email, phone, location and message can't be empty"
			);
			return;
		}

		setIsSending(true);

		// Compose the styled HTML message with your provided design
		const htmlMessage = `
      <div style="font-family: Arial, sans-serif; padding: 16px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #e0e0e0;">
        <h2 style="color: #333; font-size: 20px; margin-bottom: 12px;">📩 New Contact Message</h2>
        <table style="width: 100%; font-size: 15px; color: #444;">
          <tr>
            <td style="padding: 6px 0;"><strong>Name:</strong></td>
            <td style="padding: 6px 0; text-transform: capitalize;">${formData.name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0;"><strong>Email:</strong></td>
            <td style="padding: 6px 0;">${formData.email}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0;"><strong>Phone:</strong></td>
            <td style="padding: 6px 0;">${formData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0;"><strong>Location:</strong></td>
            <td style="padding: 6px 0;">${formData.location}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0;"><strong>Project Type:</strong></td>
            <td style="padding: 6px 0; color:#9A9BED; text-transform: capitalize; font-weight: bold;">${
							formData.projectType || "N/A"
						}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0;"><strong>Customize Furniture:</strong></td>
            <td style="padding: 6px 0;">${formData.customize || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; vertical-align: top;"><strong>Message:</strong></td>
            <td style="padding: 6px 0; white-space: pre-line;">${
							formData.message
						}</td>
          </tr>
        </table>
      </div>
    `;

		const templateParams = {
			from_name: formData.name.trim(),
			from_email: formData.email,
			phone: formData.phone,
			location: formData.location,
			project_type: formData.projectType,
			customize_furniture: formData.customize,
			message: htmlMessage, // Here we send the full HTML message
			to_name: "Astral Interior Furniture",
		};

		try {
			const response = await emailjs.send(
				"service_1fxw7pq", // Replace with your actual service ID
				"template_9ad1e94", // Replace with your actual template ID
				templateParams,
				"AhMP29TWXxEpx5CRW" // Replace with your actual public key
			);

			if (response.status === 200) {
				notify("success", "Message sent successfully");
				setFormData(initialFormData);
			} else {
				notify("error", "Something went wrong. Please try again.");
			}
		} catch (error) {
			console.error("EmailJS Error:", error);
			notify("error", "Failed to send message");
		} finally {
			setIsSending(false);
		}
	};

	return (
		<>
			{/* Social links & header remain the same */}
			<div className="text-center">
				<h2
					className="uppercase text-[2rem] md:text-[3rem] xl:text-[8rem] leading-[1] mb-[2rem]"
					data-aos="fade-down"
					data-aos-duration="1000"
				>
					Contact With <span className="font-playfair text-heading">us</span>
				</h2>
				<p
					className="text-[1.125rem] lg:w-1/2 mx-auto leading-[1.4]"
					data-aos="fade-down"
					data-aos-duration="800"
				>
					Reach out to discuss your project, ask questions, or schedule a
					consultation. We’re excited to collaborate and bring your dream
					interiors to reality.
				</p>
			</div>

			<div
				className="flex items-center justify-center gap-4 mt-[2rem]"
				data-aos="fade-up"
				data-aos-duration="800"
			>
				{/* Social icons links */}
				<Link
					href="https://www.facebook.com/astralinteriorfurniture"
					target="_blank"
					className="bg-[#0a6f68] p-3 rounded-md border-2 border-[#0a6f68] transition-all duration-500 hover:bg-white hover:text-[#0a6f68] text-white cursor-pointer"
				>
					<FaFacebookF className="md:w-[1.375rem] md:h-[1.375rem]" />
				</Link>
				<Link
					href="https://www.instagram.com/astralinterior"
					target="_blank"
					className="bg-[#0a6f68] p-3 rounded-md border-2 border-[#0a6f68] transition-all duration-500 hover:bg-white hover:text-[#0a6f68] text-white cursor-pointer"
				>
					<FaInstagram className="md:w-[1.375rem] md:h-[1.375rem]" />
				</Link>
				<Link
					href="https://x.com/astralinteriors"
					target="_blank"
					className="bg-[#0a6f68] p-3 rounded-md border-2 border-[#0a6f68] transition-all duration-500 hover:bg-white hover:text-[#0a6f68] text-white cursor-pointer"
				>
					<FaXTwitter className="md:w-[1.375rem] md:h-[1.375rem]" />
				</Link>
				<Link
					href="https://www.linkedin.com/company/astral-interior-furniture-bd"
					target="_blank"
					className="bg-[#0a6f68] p-3 rounded-md border-2 border-[#0a6f68] transition-all duration-500 hover:bg-white hover:text-[#0a6f68] text-white cursor-pointer"
				>
					<FaLinkedinIn className="md:w-[1.375rem] md:h-[1.375rem]" />
				</Link>
				<Link
					href="https://www.youtube.com/@AstralInteriorFurniture"
					target="_blank"
					className="bg-[#0a6f68] p-3 rounded-md border-2 border-[#0a6f68] transition-all duration-500 hover:bg-white hover:text-[#0a6f68] text-white cursor-pointer"
				>
					<RiYoutubeLine className="md:w-[1.475rem] md:h-[1.475rem]" />
				</Link>
			</div>

			{/* Form */}
			<div
				className="border border-[#d0e5e4] rounded-md my-[3rem] py-[3rem] px-[2rem] lg:w-2/3 mx-auto bg-white shadow-md"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<form className="space-y-[1.75rem]" onSubmit={handleSubmit}>
					{/* Name */}
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
							required
							disabled={isSending}
						/>
					</div>

					{/* Email */}
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
							required
							disabled={isSending}
						/>
					</div>

					{/* Phone */}
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
							required
							disabled={isSending}
						/>
					</div>

					{/* Location */}
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
							required
							disabled={isSending}
						/>
					</div>

					{/* Project Type */}
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
							disabled={isSending}
						>
							<option value="">Select Project Type</option>
							<option value="residential">Residential</option>
							<option value="commercial">Commercial</option>
							<option value="hospitality">Hospitality</option>
							<option value="retail">Retail</option>
						</select>
					</div>

					{/* Customize Furniture */}
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
								value="yes"
								checked={formData.customize === "yes"}
								onChange={handleChange}
								disabled={isSending}
							/>
							  <label htmlFor="yes">YES</label>
						</div>
						<div>
							<input
								type="radio"
								id="no"
								name="customize"
								value="no"
								checked={formData.customize === "no"}
								onChange={handleChange}
								disabled={isSending}
							/>
							  <label htmlFor="no">NO</label>
						</div>
					</div>

					{/* Message */}
					<div className="flex flex-col">
						<label
							htmlFor="message"
							className="font-bold text-[14px] leading-[20px] mb-[10px]"
						>
							Message(Optional)
						</label>
						<textarea
							name="message"
							id="message"
							rows={4}
							placeholder="Share Your Thoughts"
							className="border-2 border-[#d0e5e4] rounded-md py-[0.5rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6]"
							onChange={handleChange}
							value={formData.message}
							disabled={isSending}
						></textarea>
					</div>

					<div className="mt-[3rem]">
						<button
							type="submit"
							className="w-full bg-[#0a6f68] text-white border-2 rounded-md border-[#0a6f68] py-[0.75rem] px-[2rem] transition-all duration-500 hover:bg-white hover:text-[#0a6f68]"
							disabled={isSending}
						>
							{isSending ? "Sending..." : "Send Message"}
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
