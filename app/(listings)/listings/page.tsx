import { countActiveListingsByBrand, fetchListings } from "@/app/lib/api";
import { LISTINGS_PAGE_SIZE, QUERY_ALL } from "@/app/lib/constants";
import PocketBase from "pocketbase";

import Listings from "@/app/ui/components/carListings/Listings";

import Footer1 from "@/app/ui/components/home/Footer1";
import { auth } from "@/auth";
import { BrandCount, ListingRecord } from "@/app/lib/types/listingTypes";
import { prefetchQuery } from "@/app/lib/tenstack-query";

export default async function InventoryListPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const session = await auth();
	const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
	pb.authStore.save(session?.user?.pbToken, session?.user);

	const { page, brand } = await searchParams;
	const brandsCount = await prefetchQuery<BrandCount>(
		["brandCount"],
		async () => {
			const res = await countActiveListingsByBrand();
			return res;
		}
	);

	const currentPage = parseInt(page as string) || 0;

	let filter = "";
	// prevent "Toate" to get to the PB query
	if (brand && brand != QUERY_ALL) {
		filter = pb.filter("brand = {:brand}", { brand });
	}

	console.log("page + brand + filter", page, brand, filter);
	const listings = await pb
		.collection("listings")
		.getList<ListingRecord>(currentPage, LISTINGS_PAGE_SIZE, { filter });

	return (
		<>
			{/* <Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" /> */}
			<Listings
				listings={listings}
				brandsCount={brandsCount}
			/>
			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
