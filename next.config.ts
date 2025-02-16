import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// webSocketDebuggerUrl: false, // Add this line
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "potatoes-trip.pockethost.io",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "8090",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
