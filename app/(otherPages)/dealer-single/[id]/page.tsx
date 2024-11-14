import Footer1 from "@/components/home/Footer1";
import Header1 from "@/components/headers/Header1";
import DealerSingle from "@/components/otherPages/DealerSingle";
import { dealers } from "@/data/dealers";

import React from "react";

export const metadata = {
	title: "Dealer Single || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function DealerSinglePage({ params }) {
	const dealerItem =
		dealers.map((elm, i) => elm.id == params.id)[0] || dealers[0];
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<DealerSingle dealerItem={dealerItem} />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
