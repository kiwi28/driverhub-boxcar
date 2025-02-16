import Listings from "@/app/ui/components/carListings/Listings";

import Footer1 from "@/app/ui/components/home/Footer1";

export default async function InventoryListPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const { page, brand } = await searchParams;
	// console.log("page", page);

	return (
		<>
			{/* <Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" /> */}
			<Listings
				currentPage={parseInt(page as string) || 0}
				filters={brand as string}
			/>
			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
