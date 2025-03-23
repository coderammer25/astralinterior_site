import { AboutUsComponent } from "@/components/home-page/aboutUs";
import Banner from "@/components/home-page/banner";
import GetInTouch from "@/components/home-page/get-in-touch";
import ServicesComponent from "@/components/home-page/services";
import { TimelineDemo } from "@/components/home-page/TimelineDemo";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import type { Metadata } from "next";

type Testimonial = {
	quote: string;
	name: string;
	title: string;
};

export const metadata: Metadata = {
	title: "Astral Interior & Furniture - Elegant & Modern Designs",
	description:
		"Discover premium interior design and furniture solutions with Astra Interior & Furniture. Transform your space with our elegant and modern designs.",
};

export const testimonials: Testimonial[] = [
	{
		quote:
			"The attention to detail and creativity in our home renovation was exceptional. They transformed our space beyond our expectations.",
		name: "Sarah Johnson",
		title: "Homeowner",
	},
	{
		quote:
			"Professional, punctual, and passionate about their work. The team at Astral Interior made our dream home a reality.",
		name: "Michael Chen",
		title: "Property Developer",
	},
	{
		quote:
			"Their innovative design solutions and commitment to quality craftsmanship set them apart. Highly recommended!",
		name: "Emily Rodriguez",
		title: "Interior Design Enthusiast",
	},
	{
		quote:
			"The team's expertise in space optimization and modern design trends helped us create a perfect living environment.",
		name: "David Thompson",
		title: "Architect",
	},
	{
		quote:
			"Outstanding service from start to finish. They understood our vision and executed it flawlessly.",
		name: "Lisa Anderson",
		title: "Commercial Property Owner",
	},
]; 

export default function HomePage() {
	return (
		<>
			<Banner />
			<AboutUsComponent />
			<GetInTouch />
			<TimelineDemo />
			<ServicesComponent />
			<InfiniteMovingCards items={testimonials} />
		</>
	);
}
