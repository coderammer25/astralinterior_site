import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { featuredPost, recentPosts } from "../data";

interface featuredPost {
    blogId: number
    category: string
    title: string
    readingTime: number
    image: string
  }
interface recentPosts {
    blogId: number
    category: string
    title: string
    readingTime: number
    image: string
  }
const Blogs = () => {
      
    return (
    <div>

    <section className="container mx-auto px-4 py-16 md:py-24">
      <h1 className=" md:text-6xl lg:text-9xl font-serif mb-12 md:mb-16">OUR <span className="font-playfair">BLOG</span></h1>

      <div className="grid md:grid-cols-[2fr] lg:grid-cols-[2fr,1fr] gap-8">
        {/* Featured Post */}
        <article className="space-y-4">
          <Link href={`/blog/${featuredPost?.blogId}`} className="group block relative">
            <div className="relative overflow-hidden">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                width={800}
                height={375}
                className="object-cover transition-transform duration-300 group-hover:scale-105 w-[800px]"
                priority
              />
              <Badge className="absolute px-3 py-2 top-4 left-4 rounded-3xl bg-white hover:bg-white text-black">
                {featuredPost.category}
              </Badge>
            </div>
            <div className="mt-4 space-y-2">
              <h2 className="text-3xl font-medium tracking-wide">{featuredPost.title}</h2>
              <p className="text-base text-muted-foreground">Reading Time: {featuredPost.readingTime} min</p>
            </div>
          </Link>
        </article>

        {/* Recent Posts */}
        <div className="space-y-8">
          {recentPosts.map((post, index) => (
            <article key={index} className="max-w-lg lg:-ml-28">
            <Link href={`/blog/${post?.blogId}`} className="grid grid-cols-[250px,1fr] gap-4 group">
             
              <div className="relative overflow-hidden rounded-md">
                <Image
                  src={post?.image || "/placeholder.svg"}
                  alt={post?.title}
                  width={800}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-105 w-[250px] h-[150px]"
                />
                <Badge className="absolute top-2 left-2 bg-white hover:bg-white text-black text-xs px-2 py-1 rounded-3xl">
                  {post?.category}
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Reading Time: {post?.readingTime} min
                </p>
                <h3 className="font-semibold tracking-wide leading-snug text-xl">
                  {post?.title}
                </h3>
              </div>
            </Link>
          </article>
          
          
          ))}

        </div>
      </div>
    </section>
        </div>
    );
};

export default Blogs;