"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { TextAnimate } from "../magicui/text-animate";

const Banner = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="px-4 pt-[4rem] pb-[8rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="text-center space-y-8 min-h-screen">
        <div
          className="lg:w-1/2 mx-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="slider-container z-10 overflow-hidden">
            <Slider {...settings}>
              <div className="whitespace-nowrap">
                <p className="text-xs lg:text-base truncate">
                  * Space Planning - Interior Styling - Lighting Design -
                  Furniture Sourcing
                </p>
              </div>
              <div className="whitespace-nowrap">
                <p className="text-xs lg:text-base truncate">
                  * Space Planning - Interior Styling - Lighting Design -
                  Furniture Sourcing
                </p>
              </div>
              <div className="whitespace-nowrap">
                <p className="text-xs lg:text-base truncate">
                  * Space Planning - Interior Styling - Lighting Design -
                  Furniture Sourcing
                </p>
              </div>
            </Slider>
          </div>
        </div>

        <h1
  className="uppercase text-6xl xl:text-[7rem] xl:leading-[0.9] text-primary "
  data-aos="fade-down"
  data-aos-duration="800"
  data-aos-once="true" // Makes the animation trigger only once when in view
>
  <TextAnimate duration={500} animation="blurInUp" by="character" delay={5}>
    {"Crafting luxury"}
  </TextAnimate>
</h1>
        <h1
  className="uppercase text-6xl xl:text-[7rem] xl:leading-[0.9] text-primary font-playfair"
  data-aos="fade-down"
  data-aos-duration="800"
  data-aos-once="true"
>
  <TextAnimate duration={500} animation="blurInUp" by="character" delay={5}>
    {"spaces"}
  </TextAnimate>
</h1>

        <motion.div
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: -400 }}
  transition={{
    duration: 1, // Increased duration for smoother animation
    ease: [0.42, 0, 0.58, 1], // Custom easing for a more professional look
  }}
  className="relative z-0"
>
  {/* First Image */}
  <motion.div
    initial={{ opacity: 0, x: -400 }} // Start off-screen to the left
	whileInView={{ opacity: 1, x: 0 }}  // End at its normal position
	transition={{ duration: 1, delay: 0.3, ease: [0.42, 0, 0.58, 1] }} // Smoother ease and delayed
	
  >
    <Image
      src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50be6f594839db8f157_Minimalist%20Interior%20with%20Geometric%20Light-p-800.webp"
      alt="Chair Image"
      width={800}
      height={800}
      className="xl:w-[18rem] xl:h-[22rem] mx-auto absolute top-10 left-1/3 -translate-x-1/2 z-10 -rotate-12 "
    />
  </motion.div>

  {/* Second Image */}
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.0, ease: [0.42, 0, 0.58, 1] }} // Added delay and smoother transition
  >
    <Image
      src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50244f3d6b890df9977_Futuristic%20Capsule%20Chair-p-500.webp"
      alt="Chair Image"
      width={800}
      height={800}
      className="xl:w-[18rem] xl:h-[24rem] mx-auto absolute -top-1 left-1/2 -translate-x-1/2 z-50"
    />
  </motion.div>

  {/* Third Image */}
  <motion.div
    initial={{ opacity: 0, x: 400 }} // Start off-screen to the right
	whileInView={{ opacity: 1, x: 0 }}  // End at its normal position
	transition={{ duration: 1, delay: 0.3, ease: [0.42, 0, 0.58, 1] }} // Smoother ease and delayed
	
  >
    <Image
      src="https://cdn.prod.website-files.com/6713afdf3556af8f35af46f9/6713b50f14c39bfea0deaefc_Serene%20Geometric%20and%20Organic%20Composition-p-800.webp"
      alt="Chair Image"
      width={800}
      height={800}
      className="xl:w-[18rem] xl:h-[22rem] mx-auto absolute top-[35px] left-2/3 -translate-x-[170px] rotate-12 z-10"
    />
  </motion.div>

</motion.div>


        <div className="relative top-[500px] lg:top-96 flex flex-col gap-4 lg:flex-row lg:gap-0 items-center justify-between">
          <p
            className="uppercase text-sm"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            We are @astral
          </p>
          <p
            className="uppercase text-sm"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            interior design studio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
