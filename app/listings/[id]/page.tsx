import Single from "@/app/ui/components/carSingles/Single";
import Footer1 from "@/app/ui/components/home/Footer1";
import Header1 from "@/app/ui/components/headers/Header1";
import React from "react";
// import { useParams } from "next/navigation";

export const metadata = {
	title: "Inventory Single 2 || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};

interface PageProps {
	params: {
		id: string;
	};
}

export default function ListingDetails({ params }: PageProps) {
	const { id } = params;
	console.log("id", id);

	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<Single listingId={id} />
			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
