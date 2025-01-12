import { pb } from "./lib/pb";
import { registerSchema } from "./lib/yup";

export const registerWPB = async ({
	email,
	password,
	name,
	phone,
}: {
	email: string;
	password: string;
	name: string;
	phone: string;
}) => {
	try {
		const {
			email: validatedEmail,
			password: validatedPassword,
			name: validatedName,
			phone: validatedPhone,
		} = registerSchema.validateSync({
			email,
			password,
			name,
			phone,
		});

		const response = await pb.collection("users").create({
			email: validatedEmail,
			password: validatedPassword,
			passwordConfirm: validatedPassword,
			name: validatedName,
			phone: validatedPhone,
			role: "agent",
		});

		return { success: true, data: response };
	} catch (error: any) {
		// Log the full error object to see its structure
		console.log("Full error:", error);

		// PocketBase ClientResponseError contains these properties
		return {
			success: false,
			error: error.response, // This should contain the original response from PocketBase
		};
	}
};
