import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Transform = () => {
	return (
		<section className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="flex flex-col xl:flex-row items-center justify-between gap-8">
				<div className="flex xl:flex-col justify-between gap-4 xl:gap-0 xl:space-y-40">
					<Image
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50f14c39bfea0deaefc_Serene%20Geometric%20and%20Organic%20Composition-p-500.webp"
						alt="Image 1"
						width={800}
						height={800}
						className="w-[224px] h-[224px]"
					/>
					<Image
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50be6f594839db8f157_Minimalist%20Interior%20with%20Geometric%20Light-p-500.webp"
						alt="Image 1"
						width={800}
						height={800}
						className="w-[224px] h-[224px]"
					/>
				</div>

				<div className="text-center">
					<p className="text-center text-base mb-[20px]">
						* Let&apos;s talk – Let&apos;s talk – Let&apos;s talk – Let&apos;s
						talk – Let&apos;s talk – Let&apos;s talk –
					</p>
					<h2 className="text-[3rem] lg:text-[5rem] uppercase leading-[1] mb-[20px] text-primary">
						Ready to Transform Your{" "}
						<span className="font-playfair">Space?</span>.
					</h2>
					<p className="text-[1.125rem] mb-[20px]">
						Let’s bring your design vision to life! Whether you’re looking for a
						complete makeover or just a fresh update, our team is here to help.
					</p>
					<Link
						href="/contact-us"
						className="flex items-center justify-center gap-2 uppercase text-[14px] text-[#2c2b28] mt-[3rem]"
					>
						Get in touch{" "}
						<span className="bg-primary p-1">
							<FaArrowRight className="text-white" />
						</span>
					</Link>
				</div>

				<div className="flex xl:flex-col justify-between gap-4 xl:gap-0 xl:space-y-40 text-right">
					<Image
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b512870cc6e108d4e4e8_Sculptural%20Black%20Shell%20in%20Modern%20Room-p-500.webp"
						alt="Image 1"
						width={800}
						height={800}
						className="w-[224px] h-[224px]"
					/>
					<Image
						src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50be6f594839db8f157_Minimalist%20Interior%20with%20Geometric%20Light-p-500.webp"
						alt="Image 1"
						width={800}
						height={800}
						className="w-[224px] h-[224px]"
					/>
				</div>
			</div>
		</section>
	);
};
export default Transform;
