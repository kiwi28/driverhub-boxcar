"use client";
import dynamic from "next/dynamic";
// import { AuthProvider } from "./lib/providers";
// import { SessionProvider } from "next-auth/react";

const ClientLayout = dynamic(() => import("./ClientLayout"), { ssr: false });

export default function ClientLayoutWrapper({
	children,
}: React.PropsWithChildren) {
	return (
		// <SessionProvider>
		// <AuthProvider>
		<ClientLayout>{children}</ClientLayout>
		// </AuthProvider>
		// </SessionProvider>
	);
}
