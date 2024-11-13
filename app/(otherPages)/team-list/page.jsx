import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import TeamList from "@/components/otherPages/TeamList";

import React from "react";

export const metadata = {
	title: "Team List || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function TeamListPage() {
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<TeamList />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
