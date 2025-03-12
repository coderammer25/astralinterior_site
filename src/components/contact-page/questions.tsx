"use client";

import { useState, ReactNode } from "react";

interface ItemProps {
	title: string;
	children: ReactNode;
}

const Item = ({ title, children, ...props }: ItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b" {...props}>
			<button
				type="button"
				aria-label="Open item"
				title="Open item"
				className="flex items-center gap-6 justify-between w-full p-6 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h4 className="text-left text-[1.2rem] xl:text-[1.4rem] uppercase w-3/4 md:w-full">{title}</h4>
				<div className="flex items-center justify-center w-8 h-8 border rounded-full">
					<svg
						viewBox="0 0 24 24"
						className={`w-3 text-gray-600 transition-transform duration-500 ${
							isOpen ? "transform rotate-180" : ""
						}`}
					>
						<polyline
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeMiterlimit="10"
							points="2,7 12,17 22,7"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</button>

			<div className={`p-4 pt-0 ${isOpen ? "h-full block" : "h-0 hidden"}`}>
				<p className="px-6 text-[16px] leading-[1.4]">{children}</p>
			</div>
		</div>
	);
};

interface FAQProps {
	faqs: { title: string; content: string }[];
}

const FAQ = ({ faqs }: FAQProps) => {
	return (
		<div>
			<div className="my-[4rem]" data-aos="fade-up" data-aos-duration="1000">
				<h2 className="text-center text-[2rem] md:text-[3rem] xl:text-[5rem] leading-[1] uppercase text-primary">
					Frequently Asked <br /> Questions
				</h2>
			</div>
			<div className="space-y-4 lg:w-3/4 mx-auto">
				{faqs.map((faq, index) => (
					<Item key={index} title={faq.title} data-aos="fade-up" data-aos-duration={`${400 + index * 200}`}>
						{faq.content}
					</Item>
				))}
			</div>
		</div>
	);
};

export default FAQ;
