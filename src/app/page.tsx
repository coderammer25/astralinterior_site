import { AboutUsComponent } from "@/components/home-page/aboutUs";
import Banner from "@/components/home-page/banner";
import ServicesComponent from "@/components/home-page/services";

export default function HomePage() {
	return (
		<>
			<Banner />
			<h2 className="uppercase text-center text-8xl xl:text-[14rem] text-[#e9e7e1]">
				We are <span className="font-playfair">astral</span>{" "}
			</h2>
			<AboutUsComponent />
			<ServicesComponent />
		</>
	);
}
