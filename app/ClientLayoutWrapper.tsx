"use client";
import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";

const ClientLayout = dynamic(() => import("./ClientLayout"), { ssr: false });

export default function ClientLayoutWrapper({
	children,
}: React.PropsWithChildren) {
	return (
		<SessionProvider>
			<ClientLayout>{children}</ClientLayout>
		</SessionProvider>
	);
}
