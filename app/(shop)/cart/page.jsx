import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cart from "@/components/shop/Cart";

import React from "react";

export const metadata = {
	title: "Cart || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function CartPage() {
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<Cart />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
