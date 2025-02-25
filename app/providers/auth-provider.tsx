// providers/auth-provider.tsx
"use client";

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

const PocketBaseContext = createContext<PocketBase | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
	return (
		<SessionProvider>
			<PocketBaseProvider>{children}</PocketBaseProvider>
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
