"use client";
import FilterSidebar from "@/app/ui/components/common/FilterSidebar";

import "../public/main.scss";
import "photoswipe/dist/photoswipe.css";
// import "rc-slider/assets/index.css";
import React, { useEffect } from "react";
import MobileMenu from "@/app/ui/components/headers/MobileMenu";
import Context from "@/context/Context";
import BackToTop from "@/app/ui/components/common/BackToTop";
import Providers from "./providers";
import { dm_sans } from "./ui/fonts";

export default function RootLayout({ children }: React.PropsWithChildren) {
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
			<head></head>
			<body className={`${dm_sans.className} antialiased`}>
				<Providers>
					<Context>
						<MobileMenu />
						<div className="DriverHUB-wrapper">{children}</div>
						<FilterSidebar />
					</Context>
					<BackToTop />
				</Providers>
			</body>
		</html>
	);
}
