import { featuredPost, recentPosts } from "../../../data";
import Image from "next/image";
import { Badge } from "antd";

const BlogDetails = async ({ params }: { params: { blogId: string } }) => {

  const { blogId } = params;
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
    <div className="container mx-auto px-4 py-16">
      {/* Blog Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Badge className="px-3 py-2 rounded-3xl bg-gray-200 text-black">
            {blog.category}
          </Badge>
          <p>Reading Time: {blog.readingTime} min</p>
        </div>
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
      <div className="prose max-w-3xl mx-auto">
        <p>
          This is where you can render the blog&apos;s content. Replace this with the
          actual content data fetched from your database or API.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
