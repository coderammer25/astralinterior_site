import Image from "next/image";

type ImageProps = {
	style?: string;
	title: string;
	imageLink: string;
};

export const StickyImage = ({ style, imageLink, title }: ImageProps) => {
	return (
		<Image
			src={imageLink}
			alt={title}
			width={1000}
			height={1000}
			className={`sticky ${style} w-[800px] h-[821px] mb-4 object-center object-cover drop-shadow-lg`}
			data-aos="fade-up"
		/>
	);
};
