import { TextAnimate } from "@/components/magicui/text-animate";
import Gallery from "@/components/video-gallery/gallery";

export default function VideoGallery() {
  return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<h2
				className="text-xxl md:text-5xl lg:text-[4rem] 2xl:text-[5rem] uppercase leading-[1] mb-[4rem] text-primary text-center"
				data-aos="fade-up"
				data-aos-duration="800"
			>
				<TextAnimate
					duration={800}
					animation="blurInDown"
					by="character"
					delay={3}
				>
					{"Visual Stories of Style"}
				</TextAnimate>
			</h2>
      <Gallery/>
		</section>
	);
}