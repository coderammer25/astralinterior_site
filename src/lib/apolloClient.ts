import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
	ssrMode: typeof window === "undefined", // Ensures SSR compatibility
	link: new HttpLink({
		uri: "http://192.168.0.110:7000/graphql", // Replace with your API endpoint
		credentials: "same-origin",
	}),
	cache: new InMemoryCache(),
});

export default client;
