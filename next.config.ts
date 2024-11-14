import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "potatoes-trip.pockethost.io",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
