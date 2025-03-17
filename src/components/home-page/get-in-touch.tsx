"use client";

import { Select, SelectProps } from "antd";
import { TextAnimate } from "../magicui/text-animate";

type DropdownOption = {
	label: string;
	value: string;
};

const furnitureList: DropdownOption[] = [
	{
		label: "Chair",
		value: "chair",
	},
	{
		label: "Bed",
		value: "bed",
	},
	{
		label: "Table",
		value: "table",
	},
	{
		label: "Cabinet",
		value: "cabinet",
	},
	{
		label: "Study Desk",
		value: "study desk",
	},
	{
		label: "Dressing unit",
		value: "dressing Unit",
	},
];

const projectTypeList: DropdownOption[] = [
	{
		value: "residential",
		label: "Residential",
	},
	{
		value: "commercial",
    label: "Commercial",
	},
	{
		value: "hospitality",
    label: "Hospitality",
	},
	{
    value: "retail",
    label: "Retail",
  },
];


export default function GetInTouch() {
	const furnitureOptions: SelectProps["options"] = [];
	const projectOptions: SelectProps["options"] = [];

	for (let i = 0; i < furnitureList.length; i++) {
		furnitureOptions.push({
			value: furnitureList[i].value,
			label: furnitureList[i].label,
		});
	}

	for (let i = 0; i < projectTypeList.length; i++) {
		projectOptions.push({
			value: projectTypeList[i].value,
			label: projectTypeList[i].label,
		});
	}

	const handleChange = (value: string | string[]) => {
		console.log(`Selected: ${value}`);
	};

	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<h2
				className="text-2xl md:text-5xl capitalize leading-[1] mb-[4rem] text-primary text-center"
				data-aos="fade-up"
				data-aos-duration="800"
			>
				<TextAnimate
					duration={800}
					animation="blurInDown"
					by="character"
					delay={3}
				>
					{"let's create your dream space"}
				</TextAnimate>
			</h2>
			<div className="flex justify-between items-start gap-8">
				{/* Map */}
				<div
					className="w-full lg:w-1/2 relative h-[940px] rounded-lg overflow-hidden shadow-lg"
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
				{/* Form */}
				<div
					className="border border-[#d0e5e4] rounded-md py-[3rem] px-[2rem] mx-auto bg-white shadow-md w-full lg:w-1/2 "
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<form className="space-y-[1.75rem]">
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
							/>
						</div>

						<div className="flex flex-col">
							<label
								htmlFor="projectType"
								className="font-bold text-[14px] leading-[20px] mb-[10px]"
							>
								Select Project Type
							</label>
							{/* <Select
								id="projectType"
								onChange={handleChange}
								mode="tags"
								placeholder="Select ProjectType"
								style={{ width: "100%" }}
								options={projectOptions}
								
							/> */}
							<Select
								id="projectType"
								onChange={handleChange}
								style={{ width: "100%" }}
								placeholder="Select ProjectType"
								options={projectTypeList}
								className="border-2 border-[#d0e5e4] rounded-md py-[0.4rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6] w-full text-lg"
							/>
						</div>

						<div className="flex flex-col">
							<label
								htmlFor="furniture"
								className="font-bold text-[14px] leading-[20px] mb-[10px]"
							>
								Customize Your Furniture
							</label>
							<Select
								id="furniture"
								mode="multiple"
								onChange={handleChange}
								placeholder="Select Furniture"
								style={{ width: "100%" }}
								options={furnitureOptions}
								className="border-2 border-[#d0e5e4] rounded-md py-[0.4rem] px-[1rem] transition-all focus:border-[#3cb1a6] focus:outline focus:outline-[#3cb1a6] w-full text-lg"
							/>
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

								// value={formData.message}
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
			</div>
		</section>
	);
}
