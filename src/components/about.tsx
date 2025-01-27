import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import image1 from "../../public/chair-about.webp";
import image2 from "../../public/chair-2-about.webp";
import image3 from "../../public/scul-chair-about.webp";
import image4 from "../../public/mini-interior-about.webp";
import image5 from "../../public/organic-about.webp";
import image6 from "../../public/women-about.webp";
import { FaArrowLeft } from "react-icons/fa";
export default function About() {
  return (
    <div>

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
            We are a renowned interior design agency dedicated to crafting
            spaces that inspire and elevate everyday living.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            GET IN TOUCH
            <BsArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Column - Image Grid */}
        <div className="relative md:-ml-[15px] lg:-ml-[120px] md:h-[600px] w-[456px] h-[500px] md:w-[760px] lg:w-[735px] lg:h-[600px] p-3">
          {/* Image 1 - Top Right */}
          <div className="absolute top-0 right-0 h-56 w-56 md:h-60 md:w-60  lg:w-60 lg:h-60 z-20">
            <Image
              src={image1}
              alt="Interior design piece"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 - Center */}
          <div className="absolute top-1/2 left-[100px] md:left-[370px] lg:left-[340px] -translate-x-[100px] -translate-y-[250px] md:-translate-y-[200px] lg:-translate-y-[200px]  h-56 w-56 md:h-60 md:w-60 lg:w-60 lg:h-60 z-50">
            <Image
              src={image2}
              alt="Interior design element"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 3 - Bottom Right */}
          <div className="absolute bottom-16 md:bottom-16 lg:bottom-24 right-0 h-56 w-56 md:h-60 md:w-60 lg:w-60 lg:h-60 z-50">
            <Image
              src={image3}
              alt="Modern furniture"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 4 - Center Left */}
          <div className="absolute top-[100px] md:top-[360px] lg:top-[360px] left-[120px] md:left-[270px] lg:left-[240px] h-56 w-56 md:h-60 md:w-60 lg:w-60 lg:h-60 z-50">
            <Image
              alt="mini-interior"
              src={image4}
              fill
              className="object-cover"
            />
          </div>

          {/* Image 5 - Bottom Left */}
          <div className="absolute bottom-[40px] md:bottom-[110px] lg:bottom-[110px] left-0 md:left-5 lg:-left-3 h-56 w-56 md:h-60 md:w-60 lg:w-60 lg:h-60 z-40">
            <Image
              src={image5}
              alt="Interior accent"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto lg:ml-14 px-4 py-16 md:py-24">
        <div className="lg:flex md:grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative lg:w-[800px]">
            <Image
              src={image6}
              alt="Interior design professional"
              width={600}
              height={800}
              className="w-full object-cover"
              priority
            />
            <Image
              src={image4}
              alt="mini"
              className="absolute md:-mt-[310px] md:ml-[270px] lg:-mt-[490px] w-0 lg:ml-[430px] md:w-[130px] lg:w-[200px]"
            />
          </div>

          <div className="space-y-8 mt-5 lg:ml-[150px]">
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
                WHO WE ARE
              </h2>

              <p className=" lg:text-[24px] leading-relaxed ">
                Our team of experienced designers <br /> collaborates closely
                with each client, <br /> ensuring that every project reflects{" "}
                <br /> their unique style and vision. From initial <br />{" "}
                concept to final installation, we manage <br /> every aspect of
                the design journey, bringing a seamless and enjoyable
                experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <p className="md:text-5xl lg:text-7xl font-serif">+10</p>
                <p className="text-sm">Years of experience</p>
              </div>
              <div className="space-y-2">
                <p className=" md:text-5xl lg:text-7xl font-serif">+90</p>
                <p className="text-sm">Successful projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
