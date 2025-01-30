import React from "react";
import ServicesComponent from "./home-page/services";
import Transform from "./home-page/transform";

const Services = () => {
	return (
		<div className="px-4 py-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<h1 className="text-[3rem] lg:text-8xl lg:font-normal text-primary">
				SERVICES WE <br />{" "}
				<span className="font-playfair lg:font-thin">OFFER</span>{" "}
			</h1>
			<ServicesComponent />
			<Transform />
		</div>
	);
};

export default Services;
