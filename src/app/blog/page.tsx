import Blogs from "@/components/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Astral Interior Blog - Latest Trends & Design Tips",
	description:
		"Stay updated with the latest interior design trends, furniture inspirations, and expert tips on Astra Interior & Furniture's official blog.",
};

const BlogPage = () => {
	return (
		<>
			<Blogs />
		</>
	);
};

export default BlogPage;
