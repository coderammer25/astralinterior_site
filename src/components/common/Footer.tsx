"use client"

import Link from "next/link"
import { BsArrowUp, BsInstagram } from "react-icons/bs"
import { FaFacebook, FaLinkedinIn } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi"

export default function Footer() {

  return (
    <footer className="bg-gradient-to-tr from-gray-950 via-gray-950 to-black text-white py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-20">
      {/* Logo and Tagline */}
      <div className=" px-20 py-12 flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">

      <div className="mb-[150px]">
        <h2 className="text-4xl font-bold mb-4">ASRTRAL</h2>
        <div className="bg-white/20 backdrop-blur-sm inline-block px-2">
          <p className="text-white">Where design meets lifestyle in perfect harmony</p>
        </div>
      </div>

      {/* Main Navigation Grid */}
      <div className="flex justify-end space-x-[300px] gap-8 mb-24">

        {/* Column 5 */}
        <div className="space-y-4">
          <Link href="/about-us" className="block hover:underline">
            ABOUT US
          </Link>
          <Link href="/services" className="block hover:underline">
            SERVICES
          </Link>
          <Link href="/blog" className="block hover:underline">
            BLOG
          </Link>
          <Link href="/shop" className="block hover:underline">
            SHOP
          </Link>
        </div>

        {/* Social Icons Column */}
        <div className="space-y-4">
          <Link href="#" className="block w-6">
            <BsInstagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="block w-6">
            <FiYoutube className="w-5 h-5" />
          </Link>
          <Link href="#" className="block w-6">
            <FaLinkedinIn className="w-5 h-5" />
          </Link>
          <Link href="#" className="block w-6">
            <FaFacebook className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-10 mt-16">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">CREATED BY</span>
          <Link href="#" className="hover:underline">
            FLOWAZE
          </Link>
          <span className="text-gray-400 ml-4">POWERED</span>
          <Link href="#" className="hover:underline">
            WEBFLOW
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/style-guide" className="hover:underline">
            STYLE GUIDE
          </Link>
          <Link href="/licenses" className="hover:underline">
            LICENSES
          </Link>
          <Link href="/changelog" className="hover:underline">
            CHANGELOG
          </Link>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="absolute ml-[130px]  left-8 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        <BsArrowUp className="w-5 h-5" />
      </button>
      
      </div>

    </footer>
  )
}

