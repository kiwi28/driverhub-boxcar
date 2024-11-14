import Footer1 from "@/app/ui/components/home/Footer1";
import Header1 from "@/app/ui/components/headers/Header1";
import Dealer from "@/app/ui/components/otherPages/Dealer";

import React from "react";

export const metadata = {
	title: "Dealer || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function DealerPage() {
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<Dealer />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
