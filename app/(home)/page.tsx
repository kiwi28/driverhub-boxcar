import Features from "@/app/ui/components/home/Features";
import Hero from "@/app/ui/components/home/Hero";
import React, { Suspense } from "react";
import CarsList from "@/app/ui/components/home/CarsList";
import Footer1 from "@/app/ui/components/home/Footer1";
import { pb } from "@/app/lib/pb";
import { auth } from "@/auth";
// import {
// 	dehydrate,
// 	HydrationBoundary,
// 	QueryClient,
// } from "@tanstack/react-query";
import { countActiveListingsByBrand, getLatestListingHero } from "../lib/api";

export const metadata = {
	title: "DriverHUB || Inchirieri auto Uber & Bolt",
	description:
		"DriverHUB - Platforma noastră de închirieri auto oferă o soluție inovatoare, concepută pentru a conecta investitorii care doresc să genereze venituri prin închirierea mașinilor proprii cu șoferii Uber și Bolt care caută vehicule autorizate pentru activitatea de ride-sharing. Facilităm accesul la autoturisme de înaltă calitate și oferim suport complet pentru o experiență sigură și profitabilă, atât pentru șoferi, cât și pentru proprietarii de autovehicule. Alătură-te rețelei noastre și descoperă un parteneriat avantajos, adaptat pieței dinamice de mobilitate urbană!",
};

export default async function Home() {
	// const queryClient = new QueryClient();

	// await queryClient.prefetchQuery({
	// 	queryKey: ["recentListings"],
	// 	queryFn: () => getLatestListingHero(),
	// });

	// const dehydratedState = dehydrate(queryClient);

	// const query = useQuery({
	// 	queryKey: ["recentListings"],
	// 	queryFn: async () =>
	// 		await pb.collection("listings").getList(1, 4, {
	// 			sort: "-created",
	// 		}),
	// });

	const { items: recentListings } = await getLatestListingHero();
	const brandsCount = await countActiveListingsByBrand();
	// const session = await auth();

	// console.log("home session serer:", session);
	// console.log("home pb authStore serer:", pb.authStore);

	return (
		// <HydrationBoundary state={dehydratedState}>
		<>
			<Hero brandsCount={brandsCount} />

			<Suspense fallback={<h1>Loading CarsList top recent</h1>}>
				<CarsList listings={recentListings} />
			</Suspense>
			<Features />

			<Footer1 />
		</>
		// </HydrationBoundary>
	);
}
