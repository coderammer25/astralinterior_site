import { featuredPost, recentPosts } from "../../../data";
import Image from "next/image";
import { Badge } from "antd";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Astral Interior Blog - Latest Trends & Design Tips",
	description:
		"Stay updated with the latest interior design trends, furniture inspirations, and expert tips on Astra Interior & Furniture's official blog.",
};

const BlogDetails = async ({
	params,
}: {
	params: Promise<{ blogId: string }>;
}) => {
	const { blogId } = await params;
	const allPosts = [featuredPost, ...recentPosts];

	const blog = allPosts.find((post) => post.blogId === Number(blogId));

	if (!blog) {
		return (
			<div className="container mx-auto px-4 py-16 text-center">
				<p className="text-xl">Loading blog details...</p>
			</div>
		);
	}

	return (
		<div className="px-4 py-11 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			{/* Blog Header */}
			<div className="space-y-4">
				<div className="flex items-center space-x-2 text-muted-foreground text-wrap">
					<h2 className="text-xs md:text-sm">category</h2>
					<Badge className="text-xs md:text-sm px-3 py-2 rounded-3xl bg-gray-200 text-black">
						{blog.category}
					</Badge>
					<p className="text-xs md:text-sm">
						Reading Time: {blog.readingTime} min
					</p>
				</div>
				<h1 className="md:text-3xl xl:text-6xl py-4">{blog.title}</h1>
			</div>

			{/* Blog Image */}
			<div className="relative overflow-hidden rounded-lg my-8">
				<Image
					src={blog.image || "/placeholder.svg"}
					alt={blog.title}
					width={1200}
					height={600}
					className="object-cover w-full h-[400px]"
					priority
				/>
			</div>

			{/* Blog Content */}
			<div className="prose">
				<p className="lg:text-xl">
					{blog.description}
				</p>
			</div>
		</div>
	);
};

export default BlogDetails;
