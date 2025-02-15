"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import SelectComponent from "@/app/ui/components/common/SelectComponent";
import Link from "next/link";
// import { useQuery } from "@tanstack/react-query";
// import { countActiveListingsByBrand } from "@/app/lib/api";
import { BrandCount } from "@/app/lib/types/listingTypes";

export default function Hero({ brandsCount }: { brandsCount: BrandCount }) {
	const [selectedBrand, setSelectedbrand] = useState("Toate");

	console.log("brandsCount", brandsCount);
	const brandOptions = useMemo(() => {
		if (!brandsCount || !Object.keys(brandsCount).length) return [];

		const brandsList = Object.entries(brandsCount).map(
			([countedBrand, value]) => {
				return { [countedBrand]: `${countedBrand} (${value})` };
			}
		);

		return brandsList;
	}, [brandsCount]);

	const listingsUrl = useMemo(() => {
		const url = new URL("/listings", window.location.href);
		if (selectedBrand) {
			url.searchParams.append("brand", selectedBrand);
		}
		return url.href;
	}, [selectedBrand]);

	// const brandOptions = useMemo(() => {
	// 	const brandsList = CAR_BRANDS.map((brand) => ({ [brand]: brand }));

	// 	if (!brandsCount || !Object.keys(brandsCount).length) return brandsList;

	// 	Object.entries(brandsCount).forEach(([countedBrand, value]) => {
	// 		// const countedBrandKey = carItem.brand;

	// 		const foundBrandIdx = brandsList.findIndex(
	// 			(brandListObj) => Object.keys(brandListObj)[0] === countedBrand
	// 		);

	// 		if (foundBrandIdx === -1) return;

	// 		brandsList[foundBrandIdx][countedBrand] = `${countedBrand} (${value})`;
	// 	});

	// 	return brandsList;
	// }, [brandsCount]);

	return (
		<section className="DriverHUB-banner-section-five">
			<div className="banner-content-three">
				<div className="DriverHUB-container">
					<div className="banner-content">
						<span className="wow fadeInUp">
							Caută mai puțin. Condu mai mult
						</span>
						<h2
							className="wow fadeInUp"
							data-wow-delay="100ms"
						>
							Mașina ta potrivită
						</h2>
						<div
							className="form-tabs wow fadeInUp"
							data-wow-delay="200ms"
							style={{ paddingBottom: "100px" }}
						>
							<div
								className="form-tab-pane current"
								style={{
									display: "grid",
									gridTemplateColumns: "1fr 1fr 1fr",
									backgroundColor: "white",
									alignItems: "center",
									borderRadius: "40px",
								}}
								id="tab-1"
							>
								{/* <form onSubmit={(e) => e.preventDefault()}> */}
								<div className="form_boxes">
									<SelectComponent
										options={[{ Toate: "Marcă - Toate" }, ...brandOptions]}
										selectedOption={selectedBrand}
										setSelectedOption={setSelectedbrand}
									/>
								</div>
								{/* <div className="form_boxes">
										<SelectComponent options={["Any Makes", "A3", "Accord"]} />
									</div>
									<div className="form_boxes">
										<SelectComponent options={["Any Models", "200$", "300$"]} />
									</div> */}
								<div className="form_boxes">
									<SelectComponent options={[{ "": "Any Price" }]} />
								</div>
								<Link
									href={listingsUrl}
									className="form-submit"
									style={{ marginRight: "15px" }}
								>
									<button
										type="submit"
										className="theme-btn"
									>
										<i className="flaticon-search" />
									</button>
								</Link>
								{/* </form> */}
							</div>
						</div>
						<div
							className="image-column"
							style={{ paddingBottom: "100px" }}
						>
							<div className="image-box">
								<figure className="image">
									<Link href={`/listings`}>
										<Image
											alt=""
											src="/images/banner/banner5-1.webp"
											width={1216}
											height={738}
										/>
									</Link>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
