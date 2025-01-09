"use server";

import { auth } from "@/auth";
import Header1 from "./Header1";

export default async function ServerHeaderWrapper() {
	const session = await auth();
	return (
		<div>
			<div>{session ? session.user?.name : "mu3"}</div>
			<Header1
				headerClass="DriverHUB-header hheader-style-v4 five"
				white
			/>
		</div>
	);
}
