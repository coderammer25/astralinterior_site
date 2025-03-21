type ServiceProp = {
	service: {
		title: string;
		description: string;
	};
	number: number
};

const IndividualService = ({ service, number }: ServiceProp) => {
	return (
		<div className="flex justify-center h-full">
			<div>
				<h2 className="text-xl md:text-[2.2rem] uppercase mb-[10px] leading-[1.1] text-primary">
					{number + 1}. {service.title}
				</h2>
				<p className="text-sm md:text-[1.125em] leading-[1.4] md:w-3/4 pt-[1em]">
					{service.description}
				</p>
			</div>
		</div>
	);
};
export default IndividualService;
