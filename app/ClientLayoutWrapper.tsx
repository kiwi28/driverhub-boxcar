"use client";
import dynamic from "next/dynamic";
// import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./providers/auth-provider";

const ClientLayout = dynamic(() => import("./ClientLayout"), { ssr: false });

export default function ClientLayoutWrapper({
	children,
}: React.PropsWithChildren) {
	return (
		// <SessionProvider>
		<AuthProvider>
			<ClientLayout>{children}</ClientLayout>
		</AuthProvider>
		// </SessionProvider>
	);
}
