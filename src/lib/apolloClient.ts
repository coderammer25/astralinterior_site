import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
	ssrMode: typeof window === "undefined", // Ensures SSR compatibility
	link: new HttpLink({
		// access env dynamically
		uri: "http://192.168.0.108:7000/graphql",
		credentials: "same-origin",
	}),
	cache: new InMemoryCache(),
});

export default client;
