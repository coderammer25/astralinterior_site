import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.prod.website-files.com",
			},
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
			},
		],
	},
};

export default nextConfig;
