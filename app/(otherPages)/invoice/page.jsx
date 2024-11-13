import Invoice from "@/components/otherPages/Invoice";
import React from "react";

export const metadata = {
	title: "Invoice || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function InvoicePage() {
	return (
		<div className="wrapper-invoice">
			<Invoice />
		</div>
	);
}
