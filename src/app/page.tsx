import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default:
			"Astral Interior and Furniture | Premium Interior Solutions in Bangladesh",
		template: "%s | Astral Interior and Furniture",
	},
	description:
		"Astral Interior and Furniture provides expert interior fixing and furniture solutions across Bangladesh. We specialize in all types of interior work, from repairs to complete design makeovers.",
	keywords:
		"Interior design, Furniture, Home decor, Office furniture, Bangladesh, Modern furniture, Custom furniture",
	robots: "index, follow",
};

export default function Home() {
	return <h1 className="bg-red-500">Hello</h1>;
}
