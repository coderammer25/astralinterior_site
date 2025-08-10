export default async (req) => {
	const body = await req.text();
	const { email } = JSON.parse(body);
	if (!email) {
		return new Response(
			JSON.stringify({
				error: "Email is required",
			}),
			{
				status: 400,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}

	try {
		const response = await fetch(
			`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID} /subscribe`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					api_key: process.env.CONVERTKIT_PUBLIC_API_KEY,
					email,
				}),
			}
		);
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.error || "Failed to subscribe");
		}
		if (data.subscription.state === "active") {
			return new Response(
				JSON.stringify({
					error: "This Email is already subscribed",
				}),
				{
					status: 409,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
		}
		return new Response(
			JSON.stringify({
				message: "Thanks for joining us. And message has been sent",
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	} catch (error) {
		console.error("Convert Kit", error);
		return new Response(
			JSON.stringify({
				error: "Something went wrong please try again",
			}),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
};
