import Image from "next/image";

type ClientProps = {
	client: {
		client_id: number;
		client_logo: string;
		client_thoughts: string;
		client_img: string;
		client_name: string;
		client_position: string;
		client_location: string;
	};
};

const Client = ({ client }: ClientProps) => {
	return (
		<div className="border p-[2rem] shadow-[0px_4px_6px_rgba(24,112,109,0.2)] rounded-md mx-4">
			<Image
				src={client.client_logo}
				alt={client.client_location}
				width={0}
				height={800}
				className="mb-[3rem] w-36 h-[1.5rem]"
			/>
			<p className="text-[1.125rem]">&quot;{client.client_thoughts}&quot;</p>
			<div className="flex items-center gap-4 mt-[2.5rem]">
				<Image
					src={client.client_img}
					alt="Client Profile Picture"
					width={800}
					height={800}
					className="rounded-full w-[3.5rem] h-[3.5rem]"
				/>
				<div>
					<h4 className="font-semibold text-[0.875rem]">
						{client.client_name}
					</h4>
					<h4 className="text-[0.875rem]">{client.client_location}</h4>
				</div>
			</div>
		</div>
	);
};
export default Client;
