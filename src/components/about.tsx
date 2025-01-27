import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import image1 from "../../public/chair-about.webp"
import image2 from "../../public/chair-2-about.webp"
import image3 from "../../public/scul-chair-about.webp"
import image4 from "../../public/mini-interior-about.webp"
import image5 from "../../public/organic-about.webp"
export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center min-h-[100vh]">
      {/* Left Column - Text Content */}
      <div className="space-y-6">
        <nav className="flex items-center gap-2 text-sm">
          <span>★</span>
          <Link href="/about-us" className="hover:underline">
            ABOUT US
          </Link>
          <span>—</span>
          <Link href="/about-us" className="hover:underline">
            ABOUT US
          </Link>
        </nav>

        <h1 className="text-[4rem] leading-tight font-light">
          BRINGING
          <br />
          IDEAS TO LIFE
        </h1>

        <p className="text-gray-600 max-w-md">
          We are a renowned interior design agency dedicated to crafting spaces that inspire and elevate everyday
          living.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
        >
          GET IN TOUCH
          <BsArrowRight className="w-4 h-4"/>
        </Link>
      </div>

      {/* Right Column - Image Grid */}
      <div className="relative w-[800px] h-[600px] border border-red-500">
        {/* Image 1 - Top Right */}
        <div className="absolute top-0 right-0 w-64 h-64 z-20">
          <Image
            src={image1}
            alt="Interior design piece"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 2 - Center */}
        <div className="absolute top-1/2 left-[340px] -translate-x-[100px] -translate-y-[200px] w-64 h-64 z-50">
          <Image
            src={image2}
            alt="Interior design element"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 3 - Bottom Right */}
        <div className="absolute bottom-16 right-0 w-64 h-64 z-50">
          <Image
            src={image3}
            alt="Modern furniture"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 4 - Center Left */}
        <div className="absolute top-[360px] left-[220px] w-64 h-64 z-50">
          <Image
          alt="mini-interior"
            src={image4}
            fill
            className="object-cover"
          />
        </div>

        {/* Image 5 - Bottom Left */}
        <div className="absolute bottom-1/4 left-0 w-64 h-64 z-40">
          <Image
            src={image5}
            alt="Interior accent"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </section>
  )
}

