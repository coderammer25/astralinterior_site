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

      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white -mt-[50px] ">
      {/* Background text */}
      <div className="absolute w-full flex justify-center items-center space-x-5 ">
        <span className="text-9xl leading-none">OUR</span>
        <span className="text-9xl leading-none">PROCESS</span>
      </div>

      {/* Card stack effect */}
      <div className="relative max-w-2xl h-[280px] w-[450px] ">

        <div className="absolute top-2 left-2 w-full h-full border border-gray-200 transform rotate-2" />
        <div className="absolute top-1 left-1 w-full h-full border border-gray-200 transform rotate-1" />

        {/* Main card */}
        <div className="relative bg-white border md:p-12 space-y-3">
        <h1 className="font-playfair text-4xl font-light">01</h1>
          <h2 className="text-xl font-semibold">DISCOVERY & CONSULTATION</h2>
          <p>
            In our first meeting, we get to know your vision, lifestyle, and
            design preferences. This consultation allows us to understand your
            goals, budget, and project timeline, setting the foundation for a
            design that truly reflects you.
          </p>
        </div>
      </div>
    </div>


    <section className="mx-auto lg:mr-14 px-4 py-16 md:py-24">
        <div className="lg:flex md:grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-16 items-center">

        <div className="space-y-8 mt-5 lg:ml-[150px]">
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
                OUR MISSION
              </h2>

              <p className=" lg:text-[24px] leading-relaxed ">
              Our mission is to create spaces that <br /> inspire, uplift, and enrich the lives of <br /> those who experience them. We believe <br /> that great design goes beyond aesthetics <br />  it’s about creating functional, personalized <br />environments that reflect our clients&apos; unique lifestyles and aspirations.
              </p>
            </div>

            <div className="gap-8 pt-8">
            <Link
            href="/contact"
            className="inline-flex text-lg items-center gap-2 rounded-3xl border-b border-black text-black px-3 py-3 hover:bg-black hover:text-white transition-colors"
          >
            GET IN TOUCH
            <FaArrowLeft className="w-4 h-4 " />
          </Link>
            </div>
          </div>

          <div className="relative lg:w-[800px]">
            <Image
              src={image5}
              alt="Interior design professional"
              width={1600}
              height={800}
              className="w-full object-cover"
              priority
            />
            <Image
              src={image1}
              alt="mini"
              className="absolute md:-mt-[310px] md:-ml-[60px] lg:-mt-[490px] w-0 lg:-ml-[100px] md:w-[130px] lg:w-[200px]"
            />
          </div>

        </div>
      </section>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-7xl font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
          Discover Our <span className="font-playfair">Team</span>
        </p>
  
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <Image
              height={750}
            width={1260}
              className="absolute object-cover w-full h-full rounded"
              src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6730b9136fe128fd28f4e21f_client-01.webp"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center ">
            <p className="text-lg font-bold">Oliver Aguilerra</p>
            <p className="mb-5 text-xs text-gray-800">Product Manager</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <Image
            width={1260}
            height={750}
              className="absolute object-cover w-full h-full rounded"
              src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6730b913927351d4578c741c_client-04.webp"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Marta Clermont</p>
            <p className="mb-5 text-xs text-gray-800">Design Team Lead</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <Image
              height={750}
             width={1260}
              className="absolute object-cover w-full h-full rounded"
              src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6730b913f40f98fed80d3f35_client-02.webp"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Alice Melbourne</p>
            <p className="mb-5 text-xs text-gray-800">Human Resources</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <Image
              height={750}
             width={1260}
              className="absolute object-cover w-full h-full rounded"
              src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6730b9132c39026fe2577661_client-03.webp"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">John Doe</p>
            <p className="mb-5 text-xs text-gray-800">Good guy</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}
