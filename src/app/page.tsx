import { AboutUsComponent } from "@/components/home-page/aboutUs";
import AutoSlider from "@/components/home-page/auto-slider";
import Banner from "@/components/home-page/banner";
import Projects from "@/components/home-page/projects";
import ServicesComponent from "@/components/home-page/services";
import Testimonials from "@/components/home-page/testimonials";
import Transform from "@/components/home-page/transform";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Astra Interior & Furniture - Elegant & Modern Designs",
	description:
		"Discover premium interior design and furniture solutions with Astra Interior & Furniture. Transform your space with our elegant and modern designs.",
};

export default function HomePage() {
	return (
		<>
			<Banner />
			<AutoSlider />
			<AboutUsComponent />
			<ServicesComponent />
			<Projects />
			<Testimonials />
			<Transform />
		</>
	);
}
