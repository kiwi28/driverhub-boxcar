// import Cta from "@/components/common/Cta";
import Header1 from "@/components/headers/Header1";
import Features from "@/components/homes/home-5/Features";
// import Brands from "@/components/homes/home-5/Brands";
// import Cars from "@/components/homes/home-5/Cars";
import Hero from "@/components/homes/home-5/Hero";
import React from "react";
import Cars2 from "@/components/homes/home-5/Cars2";
// import Inspiration from "@/components/homes/home-2/Inspiration";
// import Testimonials from "@/components/homes/home-5/Testimonials";
// import Team from "@/components/homes/home-5/Team";
// import Blogs from "@/components/homes/home-4/Blogs";
// import Brands2 from "@/components/homes/home-5/Brands2";
// import Footer3 from "@/components/footers/Footer3";
import Footer1 from "@/components/footers/Footer1";

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
