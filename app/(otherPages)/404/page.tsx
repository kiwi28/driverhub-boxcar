import Footer1 from "@/components/home/Footer1";
import Header1 from "@/components/headers/Header1";
import NotFound from "@/components/otherPages/NotFound";

import React from "react";

export const metadata = {
	title: "Page Not Found || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function NotFoundPage() {
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<NotFound />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
