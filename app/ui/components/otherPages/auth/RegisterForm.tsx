"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/app/lib/yup";
import { registerWPB } from "@/app/actions";
import { useRouter } from "next/navigation";

export const RegisterForm = ({ callbackUrl }: { callbackUrl: string }) => {
	const [serverError, setServerError] = useState<string | null>(null);

	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(registerSchema) });

	const onformSubmit = useCallback(
		async (data: {
			email: string;
			password: string;
			phone: string;
			name: string;
		}) => {
			try {
				setServerError(null);
				const result = await registerWPB({
					email: data.email,
					password: data.password,
					name: data.name,
					phone: data.phone,
				});

				if (!result.success) {
					// Handle PocketBase error response
					if (result.error?.data) {
						// Convert PocketBase error format to readable message
						const errorMessages = Object.entries(result.error.data)
							.map(([field, fieldError]: [string, any]) => {
								return `${field}: ${fieldError.message}`;
							})
							.join(", ");
						setServerError(errorMessages);
					} else {
						setServerError(
							result.error?.message || "An error occurred during registration"
						);
					}
				} else {
					console.log("result success register", result.data);
					router.push(callbackUrl);
				}
			} catch (err) {
				setServerError("An unexpected error occurred. Please try again.");
				console.error("login err", err);
			}
		},
		[callbackUrl, router]
	);

	return (
		<form onSubmit={handleSubmit(onformSubmit)}>
			<div className="form_boxes">
				<label>Username</label>
				<input
					required
					type="text"
					placeholder="Creativelayer088"
					{...register("name")}
				/>
			</div>
			<div className="form_boxes">
				<label>Email</label>
				<input
					required
					type="email"
					placeholder="ion.popescu@exemplu.com"
					{...register("email")}
				/>
				{errors.email && (
					<div style={{ color: "red" }}>{errors.email.message}</div>
				)}
			</div>
			<div className="form_boxes">
				<label>Phone</label>
				<input
					required
					type="string"
					{...register("phone")}
					placeholder={"07..."}
				/>
				{errors.phone && (
					<div style={{ color: "red" }}>{errors.phone.message}</div>
				)}
			</div>
			<div className="form_boxes">
				<label>Password</label>
				<input
					required
					type="password"
					placeholder="********"
					{...register("password")}
				/>
				{errors.password && (
					<div style={{ color: "red" }}>{errors.password.message}</div>
				)}
			</div>
			{/* <div className="btn-box-three">
				<label className="contain">
					Private seller
					<input
						required
						type="radio"
						defaultChecked={true}
						name="radio"
					/>
					<span className="checkmark" />
				</label>
				<label className="contain">
					Business seller
					<input
						required
						type="radio"
						defaultChecked={true}
						name="radio"
					/>
					<span className="checkmark" />
				</label>
			</div> */}
			{serverError && <div style={{ color: "red" }}>{serverError}</div>}
			<div className="form-submit">
				<button
					type="submit"
					className="theme-btn"
				>
					Register
					<Image
						alt=""
						src="/images/arrow.svg"
						width={14}
						height={14}
					/>
				</button>
			</div>
			<div className="btn-box">
				<label className="contain">
					I accept the privacy policy
					<input
						required
						type="checkbox"
						defaultChecked={true}
					/>
					<span className="checkmark" />
				</label>
			</div>
		</form>
	);
};
