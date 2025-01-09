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
		],
	},
};

export default nextConfig;
