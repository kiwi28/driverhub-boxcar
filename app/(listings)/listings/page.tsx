"use client";
import Listings from "@/app/ui/components/carListings/Listings";
import React, { useEffect, useState } from "react";

import Footer1 from "@/app/ui/components/home/Footer1";
import { fetchListings } from "@/app/lib/api";
import { ListingRecord } from "@/app/lib/types/listingTypes";
// import Header1 from "@/app/ui/headers.old/_Header1";

export default function InventoryListPage() {
	// const { items: listingsPage1 } = await fetchListings(1, 6);
	const [page, setPage] = useState(1);

	return (
		<>
			{/* <Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" /> */}
			<Listings
				page={page}
				setPage={setPage}
			/>
			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
