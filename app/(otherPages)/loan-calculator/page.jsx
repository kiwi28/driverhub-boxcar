import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import LoanCalculator from "@/components/otherPages/LoanCalculator";

import React from "react";

export const metadata = {
	title: "Loan Calculator || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default function LoanCalculatorPage() {
	return (
		<>
			<Header1 headerClass="DriverHUB-header header-style-v1 style-two inner-header cus-style-1" />
			<LoanCalculator />
			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
