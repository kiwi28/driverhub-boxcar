// import Cta from "@/app/ui/components/common/Cta";
import Header1 from "@/app/ui/components/headers/Header1";
import Features from "@/app/ui/components/home/Features";
// import Brands from "@/app/ui/components/home/Brands";
// import Cars from "@/app/ui/components/home/Cars";
import Hero from "@/app/ui/components/home/Hero";
import React, { Suspense } from "react";
import CarsList from "@/app/ui/components/home/CarsList";
// import Inspiration from "@/app/ui/components/homes/home-2/Inspiration";
// import Testimonials from "@/app/ui/components/home/Testimonials";
// import Team from "@/app/ui/components/home/Team";
// import Blogs from "@/app/ui/components/homes/home-4/Blogs";
// import Brands2 from "@/app/ui/components/home/Brands2";
// import Footer3 from "@/app/ui/components/footers/Footer3";
import Footer1 from "@/app/ui/components/home/Footer1";
import { pb } from "../lib/pb";

export const metadata = {
	title: "DriverHUB || Inchirieri auto Uber & Bolt",
	description:
		"DriverHUB - Platforma noastră de închirieri auto oferă o soluție inovatoare, concepută pentru a conecta investitorii care doresc să genereze venituri prin închirierea mașinilor proprii cu șoferii Uber și Bolt care caută vehicule autorizate pentru activitatea de ride-sharing. Facilităm accesul la autoturisme de înaltă calitate și oferim suport complet pentru o experiență sigură și profitabilă, atât pentru șoferi, cât și pentru proprietarii de autovehicule. Alătură-te rețelei noastre și descoperă un parteneriat avantajos, adaptat pieței dinamice de mobilitate urbană!",
};
export default async function Home() {
	// const query = useQuery({
	// 	queryKey: ["recentListings"],
	// 	queryFn: async () =>
	// 		await pb.collection("listings").getList(1, 4, {
	// 			sort: "-created",
	// 		}),
	// });
	console.log("authStore page home", pb.authStore);

	return (
		<>
			<Header1
				headerClass="DriverHUB-header hheader-style-v4 five"
				white
			/>
			<Hero />
			{/* <div style={{ paddingBottom: "6rem" }} /> */}
			{/* <Cta /> */}
			<Suspense fallback={<h1>Loading CarsList top recent</h1>}>
				<CarsList />
			</Suspense>
			{/* <Cars /> */}
			<Features />
			{/* <Inspiration />
			<Testimonials />
			<Team /> */}
			{/* <Blogs /> */}
			{/* <Brands2 /> */}
			<Footer1 />
		</>
	);
}
