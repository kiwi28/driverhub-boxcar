import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Faq2 from "@/components/otherPages/Faq2";

import React from "react";

export const metadata = {
	title: "Faq || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function FaqPage() {
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<Faq2 />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
