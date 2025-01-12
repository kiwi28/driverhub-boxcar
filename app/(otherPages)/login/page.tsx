import Footer1 from "@/app/ui/components/home/Footer1";
import AuthWrapper from "@/app/ui/components/otherPages/auth/AuthWrapper";

import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Login || DriverHUB - React Nextjs Car Template",
	description: "DriverHUB - React Nextjs Car Template",
};
export default async function LoginPage({
	searchParams: { callbackUrl },
}: {
	searchParams: { callbackUrl?: string };
}) {
	const session = await auth();

	if (session) {
		redirect(callbackUrl || "/");
	}

	return (
		<>
			<AuthWrapper callbackUrl={callbackUrl ?? "/"} />

			<Footer1 parentClass="DriverHUB-footer footer-style-one v1 cus-st-1" />
		</>
	);
}
