import "next-auth";

declare module "next-auth" {
	interface User {
		pbToken?: string;
	}

	interface Session extends DefaultSession {
		user: {
			pbToken?: string;
			id: string;
		} & DefaultSession["user"];
	}
}

// If you're using JWT strategy, you might also want to augment the JWT
declare module "next-auth/jwt" {
	interface JWT {
		pbToken?: string;
	}
}
