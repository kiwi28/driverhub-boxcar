import Footer1 from "@/app/ui/components/home/Footer1";
import Header1 from "@/app/ui/headers.old/_Header1";
import Cart from "@/app/ui/components/shop/Cart";

import React from "react";

export const metadata = {
	title: "Cart || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function CartPage() {
	return (
		<>
			{/* <Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" /> */}
			<Cart />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
