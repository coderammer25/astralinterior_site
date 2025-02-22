import Services from "@/components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Services - Interior Design & Custom Furniture | Astral",
	description:
		"Explore Astral Interior & Furniture's premium interior design and custom furniture services. Transform your space with expert craftsmanship.",
};

export default function ServicesPage() {
	return (
		<>
			<Services />
		</>
	);
}
