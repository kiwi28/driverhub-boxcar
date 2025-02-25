import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { pb } from "@/app/lib/pb";
import { loginSchema } from "@/app/lib/yup";

const credentialsConfig = Credentials({
	name: "Credentials",
	credentials: {
		email: { label: "Email", type: "text" },
		password: { label: "Password", type: "password" },
	},
	async authorize(credentials) {
		try {
			// First validate the credentials
			const { email, password } = loginSchema.validateSync(credentials);

			if (!email || !password) {
				return null;
			}

			// Attempt authentication with PocketBase
			const authData = await pb
				.collection("users")
				.authWithPassword(email, password);

			// Return a properly formatted user object
			return {
				id: authData.record.id,
				email: authData.record.email,
				name: authData.record.name || email, // fallback to email if name doesn't exist
				pbToken: authData.token,
			};
		} catch (error) {
			console.error("Authentication error:", error);
			return null;
		}
	},
});

const config = {
	providers: [credentialsConfig],
	// You might want to add these configurations
	pages: {
		signIn: "/login", // custom login page path if you have one
	},
	callbacks: {
		async session({ session, token }) {
			return {
				...session,
				user: {
					...session.user,
					pbToken: token.pbToken, // Pass the token to the session
				},
			};
		},
		async jwt({ token, user }) {
			if (user) {
				token.pbToken = user.pbToken;
			}
			return token;
		},
		authorized({ request: { nextUrl }, auth }) {
			const isLoggedIn = !!auth?.user;
			const isDashboard = nextUrl.pathname.startsWith("/dashboard");

			if (isDashboard && !isLoggedIn) {
				return false; // This will redirect to login
			}

			return true;
		},
	},
} satisfies NextAuthConfig;

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth(config);

// export async function handleSingIn() {
// 	return await signIn();
// }

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { pb } from "@/app/lib/pb";
// import { loginSchema } from "./app/lib/yup";
// import { RecordAuthResponse, RecordModel } from "pocketbase";

// export const {
// 	handlers: { GET, POST },
// 	auth,
// 	signIn,
// 	signOut,
// } = NextAuth({
// 	providers: [
// 		CredentialsProvider({
// 			// credentials: {
// 			// 	email: {},
// 			// 	password: {},
// 			// },
// 			authorize: async (credentials) => {
// 				console.log("from authorize");
// 				try {
// 					let authData: RecordAuthResponse<RecordModel> | null = null;
// 					const { email, password } = loginSchema.validateSync(credentials);

// 					console.log("credentials", email, password);
// 					authData = await pb
// 						.collection("users")
// 						.authWithPassword(email, password);
// 					// const loginResponse = await fetch(
// 					// 	"http://localhost:8090/api/collections/users/auth-with-password",
// 					// 	{
// 					// 		method: "POST",
// 					// 		headers: {
// 					// 			"Content-Type": "application/json",
// 					// 		},
// 					// 		body: JSON.stringify({
// 					// 			identity: email,
// 					// 			password: password,
// 					// 		}),
// 					// 	}
// 					// );
// 					// authData = await loginResponse.json();
// 					console.log("authData", authData);

// 					// authData = await pb
// 					// 	.collection("users")
// 					// 	.authWithPassword(email, password);
// 					if (!authData || !authData.token) {
// 						throw new Error("Invalid credentials.");
// 					}

// 					if (!authData) {
// 						const newUserData = await pb.collection("users").create({
// 							email: email,
// 							password: password,
// 							passwordConfirm: password,
// 							name: email,
// 						});
// 						return {
// 							id: newUserData.record.id,
// 							email: newUserData.record.email,
// 							name: newUserData.record.name,
// 						};
// 					} else {
// 						return {
// 							id: authData.record.id,
// 							email: authData.record.email,
// 							name: authData.record.name,
// 						};
// 					}
// 				} catch (error) {
// 					console.error("Authentication error:", error);
// 					throw error;
// 				}
// 			},
// 		}),
// 	],
// });
