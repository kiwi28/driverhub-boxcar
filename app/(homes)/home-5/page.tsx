// import Cta from "@/components/common/Cta";
import Header1 from "@/components/headers/Header1";
import Features from "@/components/home/Features";
// import Brands from "@/components/home/Brands";
// import Cars from "@/components/home/Cars";
import Hero from "@/components/home/Hero";
import React from "react";
import Cars2 from "@/components/home/Cars2";
// import Inspiration from "@/components/homes/home-2/Inspiration";
// import Testimonials from "@/components/home/Testimonials";
// import Team from "@/components/home/Team";
// import Blogs from "@/components/homes/home-4/Blogs";
// import Brands2 from "@/components/home/Brands2";
// import Footer3 from "@/components/footers/Footer3";
import Footer1 from "@/components/home/Footer1";

export const metadata = {
	title: "DriverHUB || Inchirieri auto Uber & Bolt",
	description:
		"DriverHUB - Platforma noastră de închirieri auto oferă o soluție inovatoare, concepută pentru a conecta investitorii care doresc să genereze venituri prin închirierea mașinilor proprii cu șoferii Uber și Bolt care caută vehicule autorizate pentru activitatea de ride-sharing. Facilităm accesul la autoturisme de înaltă calitate și oferim suport complet pentru o experiență sigură și profitabilă, atât pentru șoferi, cât și pentru proprietarii de autovehicule. Alătură-te rețelei noastre și descoperă un parteneriat avantajos, adaptat pieței dinamice de mobilitate urbană!",
};
export default function HomePage5() {
	return (
		<>
			<Header1
				headerClass="DriverHUB-header hheader-style-v4 five"
				white
			/>
			<Hero />
			{/* <div style={{ paddingBottom: "6rem" }} /> */}
			{/* <Cta /> */}
			<Cars2 />
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
