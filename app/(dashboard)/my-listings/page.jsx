import MyListings from "@/components/dashboard/MyListings";
import Footer1 from "@/components/footers/Footer1";
import HeaderDashboard from "@/components/headers/HeaderDashboard";
import React from "react";

export const metadata = {
	title: "My Listings || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function MyListingsPage() {
	return (
		<>
			<div style={{ background: "var(--theme-color-dark)" }}>
				<HeaderDashboard />

				<MyListings />
				<Footer1 parentClass="DriverHUB-footer footer-style-one v2" />
			</div>
		</>
	);
}
