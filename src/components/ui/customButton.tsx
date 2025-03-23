import Link from "next/link";

type ButtonProps = {
	children: React.ReactNode;
	link: string;
};

export const CustomButton = ({ children, link }: ButtonProps) => {
	return (
		<Link
			href={link}
			className="uppercase text-[14px] bg-primary inline-block py-2 px-4 text-white rounded-lg hover:shadow-lg"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			{children}
		</Link>
	);
};
