// providers/auth-provider.tsx
"use client";

import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
	DehydratedState,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";
import PocketBase from "pocketbase";
import { useSession } from "next-auth/react";
import { QueryErrorBoundary } from "../QueryErrorBaundary";

const PocketBaseContext = createContext<PocketBase | null>(null);

export function Providers({ children }: PropsWithChildren) {
	return (
		<SessionProvider>
			<PocketBaseProvider>
				<QueryProvider>
					<QueryErrorBoundary>{children}</QueryErrorBoundary>
				</QueryProvider>
			</PocketBaseProvider>
		</SessionProvider>
	);
}

function PocketBaseProvider({ children }: PropsWithChildren) {
	const [pb] = useState(() => new PocketBase(process.env.NEXT_PUBLIC_PB_URL));
	const { data: session } = useSession();

	useEffect(() => {
		console.log("session din provider effect", session);
		if (session?.user?.pbToken) {
			pb.authStore.save(session.user.pbToken);
		} else {
			pb.authStore.clear();
		}
	}, [session, pb]);

	return (
		<PocketBaseContext.Provider value={pb}>
			{children}
		</PocketBaseContext.Provider>
	);
}

export const usePocketBase = () => {
	const pb = useContext(PocketBaseContext);
	if (!pb)
		throw new Error("usePocketBase must be used within PocketBaseProvider");
	return pb;
};

function QueryProvider({
	children,
}: // dehydratedState,
{
	children: React.ReactNode;
	// dehydratedState: DehydratedState;
}) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000 * 5, // 5 minutes
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			{/* <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary> */}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
