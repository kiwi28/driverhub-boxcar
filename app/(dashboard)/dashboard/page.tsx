import Dashboard from "@/components/dashboard/Dashboard";
import Footer1 from "@/components/home/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderDashboard from "@/components/headers/HeaderDashboard";
import React from "react";

export const metadata = {
	title: "Dashboard || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function DashboardPage() {
	return (
		<>
			<div style={{ background: "var(--theme-color-dark)" }}>
				<HeaderDashboard />

				<Dashboard />
				<Footer1 parentClass="DriverHUB-footer footer-style-one v2" />
			</div>
		</>
	);
}
