// export { auth as middleware } from "@/app/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NextURL } from "next/dist/server/web/next-url";
import { pb } from "@/app/lib/pb";

export function middleware(req: NextRequest) {
	console.log("DIN MIDDLEWARE");
	const { pathname, origin } = req.nextUrl;
	const isTokenValid = pb.authStore?.isValid;
	console.log("isTokenValid din middleware", isTokenValid);
	console.log("authstore din middleware", pb.authStore.isValid);

	if (!isTokenValid) {
		// If the token is invalid and user already on the login page,
		// redirect to /login
		if (pathname !== "/login") {
			const loginUrl = new NextURL("/login", origin);
			return NextResponse.redirect(loginUrl);
		}
	} else {
		// If token is valid and trying to access login, redirect to dashboard
		if (pathname === "/login") {
			const dashboardUrl = new NextURL("/dashboard", origin);
			return NextResponse.redirect(dashboardUrl);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/dashboard", // Protect dashboard route and sub-routes
		"/login",
	],
};
