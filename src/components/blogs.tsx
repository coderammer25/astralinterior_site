import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    category: string
    title: string
    readingTime: number
    image: string
  }
const Blogs = () => {

      const featuredPost: BlogPost = {
        category: "Design",
        title: "UNDERSTANDING WARM VS. COOL TONES",
        readingTime: 7,
        image: "https://cdn.prod.website-files.com/6713afdf3556af8f35af46fb/673277d8ebd30f26d58d440a_Modern%20Minimalist%20Interior%20Living%20Space.jpeg",
      }
    
      const recentPosts: BlogPost[] = [
        {
          category: "Trends",
          title: "BENEFITS OF NATURAL ELEMENTS IN DESIGN",
          readingTime: 9,
          image: "https://cdn.prod.website-files.com/6713afdf3556af8f35af46fb/67327a8e786157ed4dff7a6d_Modern%20Minimalist%20Office%20Space-p-2000.jpeg",
        },
        {
          category: "Tips",
          title: "HOW TO MAKE SMALL SPACES FEEL LARGER",
          readingTime: 7,
          image: "https://cdn.prod.website-files.com/6713afdf3556af8f35af46fb/6732782eaa93607254513206_Stylish%20Modern%20Room%20with%20Elegant%20Desk%20Setup-p-2000.jpeg",
        },
        {
          category: "Design",
          title: "THE ESSENTIALS OF GOOD LIGHTING DESIGN",
          readingTime: 7,
          image: "https://cdn.prod.website-files.com/6713afdf3556af8f35af46fb/6732799323dd4996fe20a58d_Serene%20Rustic%20Sunlit%20Interior-p-2000.jpeg",
        },
      ]
      
    return (
        <div>

    <section className="container mx-auto px-4 py-16 md:py-24">
      <h1 className=" md:text-6xl lg:text-9xl font-serif mb-12 md:mb-16">OUR <span className="font-playfair">BLOG</span></h1>

      <div className="grid md:grid-cols-[2fr] lg:grid-cols-[2fr,1fr] gap-8">
        {/* Featured Post */}
        <article className="space-y-4">
          <Link href="#" className="group block relative">
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
            <Link href="#" className="grid grid-cols-[250px,1fr] gap-4 group">
              <div className="relative overflow-hidden rounded-md">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-105 w-[250px] h-[150px]"
                />
                <Badge className="absolute top-2 left-2 bg-white hover:bg-white text-black text-xs px-2 py-1 rounded-3xl">
                  {post.category}
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Reading Time: {post.readingTime} min
                </p>
                <h3 className="font-semibold tracking-wide leading-snug text-xl">
                  {post.title}
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