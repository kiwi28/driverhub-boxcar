import { object, string } from "yup";

export const loginSchema = object({
	email: string()
		.email("Adresa de email invalida")
		.required("Adresa de email este obligatorie"),
	password: string()
		.min(8, "Parola trebuie sa contina cel putin 8 caractere")
		.required("Parola este obligatorie"),
});
