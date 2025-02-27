import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
	ssrMode: typeof window === "undefined", // Ensures SSR compatibility
	link: new HttpLink({
		// access env dynamically
		uri: process.env.NEXT_GRAPHQL_API_ENDPOINT,
		credentials: "same-origin",
	}),
	cache: new InMemoryCache(),
});

export default client;
