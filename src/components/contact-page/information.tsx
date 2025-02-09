import {
	MdOutlineEmail,
	MdLocalPhone,
	MdOutlineLocationOn,
} from "react-icons/md";


const Information = () => {
	return (
		<div className="mt-[4rem] py-[8rem]">
			<div className="grid md:grid-cols-3 gap-[3rem]">
				<div
					className="text-center"
					data-aos="flip-up"
					data-aos-duration="1200"
				>
					<MdOutlineEmail className="w-[2.5rem] h-[2.5rem] mx-auto mb-[20px] text-primary" />
					<h4 className="font-medium text-[2rem] leading-[1] uppercase">
						Email
					</h4>
					<p className="text-[0.875rem] leading-[1.4] my-[10px]">
						Get in touch with us through email for any inquiries or support
						requests.
					</p>
					<p className="font-medium text-[14px] leading-[1.2]">
						astralinterior2@gmail.com
					</p>
				</div>

				<div
					className="text-center"
					data-aos="flip-up"
					data-aos-duration="1200"
				>
					<MdLocalPhone className="w-[2.5rem] h-[2.5rem] mx-auto mb-[20px] text-primary" />
					<h4 className="font-medium text-[2rem] leading-[1] uppercase">
						Phone
					</h4>
					<p className="text-[0.875rem] leading-[1.4] my-[10px]">
						Feel free to give us a call for instant assistance or to speak to
						our customer support team.
					</p>
					<p className="font-medium text-[14px] leading-[1.2]">
						+880 1703-706613
					</p>
				</div>

				<div
					className="text-center"
					data-aos="flip-up"
					data-aos-duration="1200"
				>
					<MdOutlineLocationOn className="w-[2.5rem] h-[2.5rem] mx-auto mb-[20px] text-primary" />
					<h4 className="font-medium text-[2rem] leading-[1] uppercase">
						office
					</h4>
					<p className="text-[0.875rem] leading-[1.4] my-[10px]">
						Our office is located at the heart of the city. Visit us for
						consultations or meetings.
					</p>
					<p className="font-medium text-[14px] leading-[1.2]">
						28 Navana Zohura Square F#D-11 (Resident), Mymensingh Road,
						BanglaMotor
					</p>
				</div>
			</div>
		</div>
	);
};
export default Information;
