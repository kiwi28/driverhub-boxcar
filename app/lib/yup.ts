import { object, string } from "yup";

export const loginSchema = object({
	email: string()
		.email("Adresa de email invalida")
		.required("Adresa de email este obligatorie"),
	password: string()
		.min(8, "Parola trebuie sa contina cel putin 8 caractere")
		.required("Parola este obligatorie"),
});

export const registerSchema = object({
	email: string()
		.email("Adresa de email invalida")
		.required("Adresa de email este obligatorie"),
	password: string()
		.min(8, "Parola trebuie sa contina cel putin 8 caractere")
		.required("Parola este obligatorie"),
	phone: string()
		.min(10, "Numarul de telefon trebuie sa contina cel putin 10 caractere")
		.required("Numarul de telefon este obligatoriu"),
	name: string()
		.min(3, "Numele trebuie sa contina cel putin 3 caractere")
		.max(50, "Numele trebuie sa contina cel mult 50 caractere")
		.required("Numele este obligatoriu"),
});
