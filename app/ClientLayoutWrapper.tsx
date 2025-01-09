"use client";
import dynamic from "next/dynamic";

const ClientLayout = dynamic(() => import("./ClientLayout"), { ssr: false });

export default function ClientLayoutWrapper({
	children,
}: React.PropsWithChildren) {
	return <ClientLayout>{children}</ClientLayout>;
}
