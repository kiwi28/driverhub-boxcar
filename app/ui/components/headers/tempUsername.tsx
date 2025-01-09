"use server";

import { auth } from "@/auth";

async function TempSes() {
	const session = await auth();
	return <div>{session ? session.user?.name : "mu3"}</div>;
}

export default TempSes;
