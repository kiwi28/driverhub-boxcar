import Footer1 from "@/components/home/Footer1";
import Header1 from "@/components/headers/Header1";
import ShopSingle from "@/components/shop/ShopSingle";
import { products } from "@/data/products";

import React from "react";

export const metadata = {
	title: "Shop Single || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function ShopSinglePage({ params }) {
	const product =
		products.filter((elm) => elm.id == params.id)[0] || products[0];
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<ShopSingle product={product} />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
