// const FrequentQuestions = () => {
// 	return <div className="py-[8rem]">
//     <h2></h2>
//   </div>;
// };
// export default FrequentQuestions;

"use client";

import { useState, ReactNode } from "react";

interface ItemProps {
	title: string;
	children: ReactNode;
}

const Item = ({ title, children }: ItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b">
			<button
				type="button"
				aria-label="Open item"
				title="Open item"
				className="flex items-center justify-between w-full p-6 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h4 className="text-left text-[1.4rem] uppercase">{title}</h4>
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

const FAQ = () => {
	return (
		<div className="">
			<div className="mb-[4rem]">
				<h2 className="text-center text-[5rem] leading-[1] uppercase text-primary">
					Frequently Asked <br /> Questions
				</h2>
			</div>
			<div className="space-y-4 lg:w-3/4 mx-auto">
				<Item title="How much does office interior design cost in Bangladesh?">
					The cost of office interior design in Bangladesh can vary widely
					depending on factors such as office size, design complexity,
					materials, and customization. On average, basic office interior design
					projects may start from around BDT 500 to BDT 1,500 per square foot,
					while more luxurious or high-end designs can range from BDT 2,000 to
					BDT 3,500 per square foot or more. This estimate includes the cost of
					furniture, fixtures, materials, and labor. However, prices can
					fluctuate depending on the location, the experience of the designer,
					and the specific requirements of the project. It’s always a good idea
					to get a detailed quote from an interior design firm to understand the
					full cost based on your needs.
				</Item>
				<Item title="How much does interior design in Bangladesh cost?">
					The cost of interior design in Bangladesh varies depending on the
					complexity of the project, size of the space, and the designer&apos;s
					expertise. On average, residential interior design might start from
					around BDT 500 to BDT 1,500 per square foot, while commercial or
					office interior design could range from BDT 1,500 to BDT 3,500 per
					square foot, or more for premium, customized designs. Prices are also
					affected by the materials used, level of customization, and the
					designer’s reputation.
				</Item>
				<Item title="How much does luxury bedroom interior design cost?">
					The cost of luxury bedroom interior design depends on several factors,
					including the size of the room, the complexity of the design,
					materials chosen, and the designer&apos;s expertise. On average,
					bedroom design can range from BDT 500 to BDT 1,500 per square foot in
					Bangladesh for a standard design. Higher-end designs with custom
					furnishings and luxury finishes can cost more. It&apos;s always a good
					idea to get an estimate from a designer based on your specific needs
					and preferences.
				</Item>
				<Item title="How much does home interior design cost?">
					The cost of home interior design varies depending on several factors,
					including the size of the home, the complexity of the design, the
					quality of materials, and the designer&apos;s expertise. On average,
					home interior design in Bangladesh can range from BDT 500 to BDT 1,500
					per square foot for basic designs, while premium or customized designs
					can cost BDT 2,000 to BDT 3,500 per square foot or more. It&apos;s
					best to consult with a designer for a more specific quote based on
					your needs.
				</Item>
				<Item title="How much does room interior design cost?">
					The cost of room interior design varies depending on the size of the
					room, the complexity of the design, and the materials used. In
					Bangladesh, room interior design typically ranges from BDT 500 to BDT
					1,500 per square foot for basic designs, while more luxurious or
					customized designs may range from BDT 2,000 to BDT 3,500 per square
					foot or higher. It&apos;s best to consult a designer for a specific
					estimate based on your preferences and requirements.
				</Item>
				<Item title="How much does kitchen interior design cost?">
					The cost of kitchen interior design depends on the size of the
					kitchen, the complexity of the design, the materials used, and whether
					you choose custom or pre-made components. On average, kitchen interior
					design in Bangladesh ranges from BDT 800 to BDT 2,500 per square foot
					for standard designs, while high-end or luxury kitchens can cost
					between BDT 3,000 to BDT 5,000 per square foot. For a more precise
					estimate, it&apos;s recommended to consult with a designer based on your
					kitchen&apos;s specific requirements.
				</Item>
			</div>
		</div>
	);
};

export default FAQ;
