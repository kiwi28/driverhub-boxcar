"use client";
import React, { useEffect } from "react";
import MobileMenu from "@/app/ui/components/headers/MobileMenu";
import Context from "@/context/Context";
import BackToTop from "@/app/ui/components/common/BackToTop";
// import Providers from "./providers";
import FilterSidebar from "@/app/ui/components/common/FilterSidebar";
import Providers from "@/app/providers";

export default function ClientLayout({ children }: React.PropsWithChildren) {
	useEffect(() => {
		if (typeof window !== "undefined") {
			import("bootstrap/dist/js/bootstrap.esm");
		}
	}, []);

	return (
		<Providers>
			<Context>
				<MobileMenu />
				<div className="DriverHUB-wrapper">{children}</div>
				<FilterSidebar />
			</Context>
			<BackToTop />
		</Providers>
	);
}
