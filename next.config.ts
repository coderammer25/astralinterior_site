import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true, // disable optimization for static export
		remotePatterns: [
			{ protocol: "https", hostname: "cdn.prod.website-files.com" },
			{ protocol: "https", hostname: "assets.aceternity.com" },
			{ protocol: "https", hostname: "images.unsplash.com" },
			{ protocol: "https", hostname: "plus.unsplash.com" },
			{ protocol: "https", hostname: "res.cloudinary.com" },
		],
	},
};

export default nextConfig;
