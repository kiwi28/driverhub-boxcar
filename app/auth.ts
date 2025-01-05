import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { pb } from "@/app/lib/pb";
import { loginSchema } from "./lib/yup";
import { RecordAuthResponse, RecordModel } from "pocketbase";

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		CredentialsProvider({
			// credentials: {
			// 	email: {},
			// 	password: {},
			// },
			authorize: async (credentials) => {
				console.log("from authorize");
				try {
					let authData: RecordAuthResponse<RecordModel> | null = null;
					const { email, password } = loginSchema.validateSync(credentials);

					const loginResponse = await fetch(
						"http://localhost:8090/api/collections/users/auth-with-password",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								identity: email,
								password: password,
							}),
						}
					);
					authData = await loginResponse.json();
					console.log("authData", authData);

					// authData = await pb
					// 	.collection("users")
					// 	.authWithPassword(email, password);
					if (!authData || !authData.token) {
						throw new Error("Invalid credentials.");
					}

					if (!authData) {
						const newUserData = await pb.collection("users").create({
							email: email,
							password: password,
							passwordConfirm: password,
							name: email,
						});
						return {
							id: newUserData.record.id,
							email: newUserData.record.email,
							name: newUserData.record.name,
						};
					} else {
						return {
							id: authData.record.id,
							email: authData.record.email,
							name: authData.record.name,
						};
					}
				} catch (error) {
					console.error("Authentication error:", error);
					throw error;
				}
			},
		}),
	],
});
