import Services from "@/components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services",
};

const ServicesPage = () => {
	return (
	<div>
    <Services />
	</div>
	)
};

export default ServicesPage;
