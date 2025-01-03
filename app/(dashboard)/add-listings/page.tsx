import AddListings from "@/app/ui/components/dashboard/AddListings";
import Footer1 from "@/app/ui/components/home/Footer1";

import HeaderDashboard from "@/app/ui/components/headers/HeaderDashboard";

export const metadata = {
	title: "Add Listings || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function AddListingsPage() {
	return (
		<>
			<div style={{ background: "var(--theme-color-dark)" }}>
				<HeaderDashboard />

				<AddListings />
				<Footer1 parentClass="DriverHUB-footer footer-style-one v2" />
			</div>
		</>
	);
}
