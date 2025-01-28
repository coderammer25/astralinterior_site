import { AboutUsComponent } from "@/components/home-page/aboutUs";
import Banner from "@/components/home-page/banner";
import Projects from "@/components/home-page/projects";
import ServicesComponent from "@/components/home-page/services";
import Testimonials from "@/components/home-page/testimonials";
import Transform from "@/components/home-page/transform";

export default function HomePage() {
	return (
		<>
			<Banner />
			<h2 className="uppercase text-center text-8xl xl:text-[14rem] text-[#D6F1ED]">
				We are <span className="font-playfair">astral</span>{" "}
			</h2>
			<AboutUsComponent />
			<ServicesComponent />
			<Projects />
			<Testimonials />
			<Transform />
		</>
	);
}
