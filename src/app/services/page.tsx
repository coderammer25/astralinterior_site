import Services from "@/components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services",
};

const ServicesPage = () => {
	return (
	<>
    <Services />
	</>
	)
};

export default ServicesPage;
