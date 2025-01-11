"use client";
import React, { useEffect } from "react";
import MobileMenu from "@/app/ui/components/headers/MobileMenu";
import Context from "@/context/Context";
import BackToTop from "@/app/ui/components/common/BackToTop";
// import Providers from "./providers";
import FilterSidebar from "@/app/ui/components/common/FilterSidebar";
import Header1 from "./ui/components/headers/Header1";
// import Providers from "@/app/providers";

export default function ClientLayout({ children }: React.PropsWithChildren) {
	useEffect(() => {
		if (typeof window !== "undefined") {
			import("bootstrap/dist/js/bootstrap.esm");
		}
	}, []);

	return (
		<>
			<Context>
				<Header1
					headerClass="DriverHUB-header hheader-style-v4 five"
					white
				/>
				<MobileMenu />
				<div className="DriverHUB-wrapper">{children}</div>
				<FilterSidebar />
			</Context>
			<BackToTop />
		</>
	);
}
