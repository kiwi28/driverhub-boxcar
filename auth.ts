import NextAuth, { NextAuthConfig } from "next-auth";
// import type { NextAuthConfig } from "next-auth";
// import NextAuthConfig from "next-auth"
import Credentials from "next-auth/providers/credentials";

const credentialsConfig = Credentials({
	name: "Credentials",
	credentials: {
		email: { label: "Email", type: "text" },
		password: { label: "Password", type: "password" },
	},
	async authorize(credentials) {
		if (!credentials?.email || !credentials.password) {
			return null;
		} else {
			return { name: "alahu Akbar" };
		}
	},
});

const config = {
	providers: [credentialsConfig],
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
