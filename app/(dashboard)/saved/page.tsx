import Saved from "@/app/ui/components/dashboard/Saved";
import Footer1 from "@/app/ui/components/home/Footer1";

import HeaderDashboard from "@/app/ui/headers.old/_HeaderDashboard";
import React from "react";

export const metadata = {
	title: "Saved || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function SavedPage() {
	return (
		<>
			<div style={{ background: "var(--theme-color-dark)" }}>
				{/* <Header1 /> */}

				<Saved />
				<Footer1 parentClass="DriverHUB-footer footer-style-one v2" />
			</div>
		</>
	);
}
