import Footer1 from "@/components/home/Footer1";
import Header1 from "@/components/headers/Header1";
import TeamSingle from "@/components/otherPages/TeamSingle";
import { allTeammember } from "@/data/team";

import React from "react";

export const metadata = {
	title: "Team Single || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function TeamSinglePage({ params }) {
	const teamMember =
		allTeammember.filter((elm) => elm.id == params.id)[0] || allTeammember[0];
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<TeamSingle teamMember={teamMember} />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
