import Footer1 from "@/components/home/Footer1";
import Header1 from "@/components/headers/Header1";
import UiElements from "@/components/otherPages/UiElements";

import React from "react";

export const metadata = {
	title: "UI Elements || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function UIElementsPage() {
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<UiElements />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
