"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/app/lib/yup";
import { signIn } from "next-auth/react";

export const LoginForm = ({ callbackUrl }: { callbackUrl: string }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchema) });

	const onformSubmit = useCallback(
		async (data: { email: string; password: string }) => {
			try {
				const result = await signIn("credentials", {
					email: data.email,
					password: data.password,
					redirect: true,
					redirectTo: callbackUrl,
				});

				if (result?.error) {
					console.log("Sign in error:", result.error);
					// Handle error - show error message to user
				} else {
					// router.push("/dashboard"); // Redirect on success
				}
			} catch (err) {
				console.log("login err", err);
			}
		},
		[callbackUrl]
	);

	return (
		<form onSubmit={handleSubmit(onformSubmit)}>
			<div className="form_boxes">
				<label>Email</label>
				<input
					autoComplete="email"
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
				<label>Password</label>
				<input
					autoComplete="current-password"
					required
					type="password"
					placeholder="********"
					{...register("password")}
				/>
				{errors.password && (
					<div style={{ color: "red" }}>{errors.password.message}</div>
				)}
			</div>
			<div className="btn-box">
				<label className="contain">
					Remember
					<input
						required
						type="checkbox"
						defaultChecked={true}
					/>
					<span className="checkmark" />
				</label>
				<a
					href="#"
					className="pasword-btn"
				>
					Forgotten password?
				</a>
			</div>
			<div className="form-submit">
				<button
					type="submit"
					className="theme-btn"
				>
					Login
					<Image
						alt=""
						src="/images/arrow.svg"
						width={14}
						height={14}
					/>
				</button>
			</div>
		</form>
	);
};
