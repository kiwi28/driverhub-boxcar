import PocketBase from "pocketbase";
// import { PB_URL } from "@/app/lib/constants";

export const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
