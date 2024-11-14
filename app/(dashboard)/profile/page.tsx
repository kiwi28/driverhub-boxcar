import Profile from "@/app/ui/components/dashboard/Profile";
import Footer1 from "@/app/ui/components/home/Footer1";

import HeaderDashboard from "@/app/ui/components/headers/HeaderDashboard";
import React from "react";

export const metadata = {
	title: "Profile || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function ProfilePage() {
	return (
		<>
			<div style={{ background: "var(--theme-color-dark)" }}>
				<HeaderDashboard />

				<Profile />
				<Footer1 parentClass="DriverHUB-footer footer-style-one v2" />
			</div>
		</>
	);
}
