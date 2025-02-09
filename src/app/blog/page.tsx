import Blogs from "@/components/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blogs",
};

const BlogPage = () => {
	return (
		<>
			<Blogs />
		</>
	);
};

export default BlogPage;
