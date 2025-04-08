import Link from "next/link";

type ButtonProps = {
	children: React.ReactNode;
	link: string;
};

export const CustomButton = ({ children, link }: ButtonProps) => {
	return (
		<Link
			href={link}
			className="uppercase text-[10px] md:text-[14px] bg-primary inline-block py-1 px-2 md:py-2 md:px-4 text-white rounded-lg hover:shadow-lg text-center"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			{children}
		</Link>
	);
};
