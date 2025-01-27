import Image from "next/image";

import bannerImg1 from "../../../public/chair-about.webp";
import bannerImg2 from "../../../public/chair-2-about.webp";
import bannerImg3 from "../../../public/mini-interior-about.webp";
import bannerImg4 from "../../../public/organic-about.webp";
import bannerImg5 from "../../../public/scul-chair-about.webp";

const Banner = () => {
	return (
		<section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="text-center space-y-8 min-h-screen">
				<p className="text-base">
					* Space Planning - Interior Styling - Lighting Design - Furniture
					Sourcing -
				</p>
				<h1 className="uppercase text-6xl xl:text-[7rem] xl:leading-[0.9]">
					Crafting <br /> luxury <span className="font-playfair">spaces</span>
				</h1>
				<div className="relative">
					<Image
						src={bannerImg1}
						alt="Chair Image"
						width={300}
						height={300}
						className="mx-auto absolute top-0 left-1/2 -translate-x-1/2"
					/>
					<Image
						src={bannerImg2}
						alt="Chair Image"
						width={300}
						height={300}
						className="mx-auto absolute top-0 left-1/2 -translate-x-1/2 "
					/>
					<Image
						src={bannerImg3}
						alt="Chair Image"
						width={300}
						height={300}
						className="mx-auto absolute top-0 left-1/2 -translate-x-1/2 "
					/>
					<Image
						src={bannerImg4}
						alt="Chair Image"
						width={300}
						height={300}
						className="mx-auto absolute top-0 left-1/2 -translate-x-1/2 "
					/>
					<Image
						src={bannerImg5}
						alt="Chair Image"
						width={300}
						height={300}
						className="mx-auto absolute top-0 left-1/2 -translate-x-1/2 "
					/>
				</div>
				<div className="relative top-[500px] lg:top-96 flex items-center justify-between">
					<p className="uppercase text-sm">We are @astral</p>
					<p className="uppercase text-sm">interior design studio</p>
				</div>
			</div>
		</section>
	);
};

export default Banner;
