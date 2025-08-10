import { useState } from "react";
import { toast } from "react-toastify";

const NewsletterSubscribe = () => {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch(
				`https://api.convertkit.com/v3/forms/{use form numb}/subscribe`, //add form number
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						api_key: "{use api key}", //add api key (not the secret key)
						email,
					}),
				}
			);

			const data = await response.json();

			if (!response.ok || data.error) {
				toast.error(data.error || "Failed to subscribe. Please try again.");
				return;
			}

			toast.success("Thanks for subscribing!");
			setEmail("");
		} catch (error) {
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="max-w-md mx-auto p-4 -ml-5 pointer-events-auto relative z-50"
			>
				<div className="flex">
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full px-4 py-3 mb-2 border border-gray-300 rounded-xl bg-transparent"
						required
					/>
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-44 h-10 ml-2 text-white font-medium rounded shadow-md bg-[#0a6f68] hover:bg-[#088a81] hover:shadow-lg transition-colors duration-500 cursor-pointer mt-[4.5px]"
					>
						{isSubmitting ? "Subscribing..." : "Subscribe"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewsletterSubscribe;
