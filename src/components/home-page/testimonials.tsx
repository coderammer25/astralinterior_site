import { clients } from "@/data";
import Client from "./client";

const Testimonials = () => {
  return (
		<section>
			<div className="px-4 pt-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="text-center mb-[4rem]">
					<h2 className="mb-7 text-[3rem] lg:text-[5rem] uppercase leading-[1] xl:w-2/3 mx-auto text-primary">
						What Our Clients Are <span className="font-playfair">saying</span>
					</h2>
					<p className="text-[1.125rem] leading-[1.4] w-2/3 mx-auto">
						We’re proud to have helped clients create spaces they truly love,
						and their satisfaction is our greatest reward.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-[2rem] pb-[8rem]">
				{clients.map((client) => (
					<Client key={client.client_id} client={client} />
				))}
			</div>
		</section>
	);
}
export default Testimonials