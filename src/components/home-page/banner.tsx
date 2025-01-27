import Image from "next/image";

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
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50244f3d6b890df9977_Futuristic%20Capsule%20Chair-p-500.webp"
						alt="Chair Image"
						width={800}
						height={800}
						className="w-[22rem] h-[28rem] mx-auto absolute top-0 left-1/2 -translate-x-1/2"
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
