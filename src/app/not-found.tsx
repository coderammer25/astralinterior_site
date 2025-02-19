import Image from "next/image";
import notfound from "../../public/notfound.svg";
export default function Notfound ()  {
	return (
		<div className="flex justify-center pt-[70px] pb-[200px]">
			<Image src={notfound} alt="Not Found" className="w-1/2"></Image>
		</div>
	);
};
