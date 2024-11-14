"use client";
import FilterSidebar from "@/components/common/FilterSidebar";

import "../public/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import { useEffect } from "react";
import MobileMenu from "@/components/headers/MobileMenu";
import Context from "@/context/Context";
import BackToTop from "@/components/common/BackToTop";

export default function RootLayout({ children }) {
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						// With SSR, we usually want to set some default staleTime
						// above 0 to avoid refetching immediately on the client
						staleTime: 60 * 1000,
					},
				},
			})
	);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// Import the script only on the client side
			import("bootstrap/dist/js/bootstrap.esm").then(() => {
				// Module is imported, you can access any exported functionality if
			});
		}
	}, []);

	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<QueryClientProvider client={queryClient}>
					<Context>
						<MobileMenu />
						<div className="DriverHUB-wrapper">{children}</div>
						<FilterSidebar />
					</Context>
					<BackToTop />
				</QueryClientProvider>
			</body>
		</html>
	);
}
