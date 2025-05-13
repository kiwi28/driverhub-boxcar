"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import SelectComponent from "@/app/ui/components/common/SelectComponent";
import Link from "next/link";
// import { useQuery } from "@tanstack/react-query";
// import { countActiveListingsByBrand } from "@/app/lib/api";
import {
	BrandCount,
	CityRecord,
	ListResponse,
} from "@/app/lib/types/listingTypes";
import { usePocketBase } from "@/app/lib/providers";
import { DEFAULT_CITY, QUERY_ALL } from "@/app/lib/constants";

const listingsBaseURl = new URL("/listings", window.location.href);
listingsBaseURl.searchParams.append("page", "0");

interface HeroProps {
	brandsCount: BrandCount;
	cities: ListResponse<CityRecord>;
}

export default function Hero({ brandsCount, cities }: HeroProps) {
	const [selectedBrand, setSelectedbrand] = useState(QUERY_ALL);
	const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);

	const pb = usePocketBase();
	console.log("pb.authStore din hero", pb.authStore);

	const brandOptions = useMemo(() => {
		if (!brandsCount || !Object.keys(brandsCount).length) return [];

		const brandsList = Object.entries(brandsCount).map(
			([countedBrand, value]) => {
				return { [countedBrand]: `${countedBrand} (${value})` };
			}
		);

		return brandsList;
	}, [brandsCount]);

	const cityOptions = useMemo(() => {
		return cities.items.map((city) => ({ [city.name]: city.name }));
	}, [cities]);

	const listingsUrl = useMemo(() => {
		if (selectedBrand) {
			const brandExistingParam = listingsBaseURl.searchParams.get("brand");
			if (!brandExistingParam) {
				listingsBaseURl.searchParams.append("brand", selectedBrand);
			} else {
				listingsBaseURl.searchParams.set("brand", selectedBrand);
			}
		}

		if (selectedCity) {
			const existingCityParam = listingsBaseURl.searchParams.get("city");
			if (!existingCityParam) {
				listingsBaseURl.searchParams.append("city", selectedCity);
			} else {
				listingsBaseURl.searchParams.set("city", selectedCity);
			}
		}
		return listingsBaseURl.href;
	}, [selectedBrand, selectedCity]);

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
	console.log("selectedbrandHero", selectedBrand);

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
										options={[
											{ [QUERY_ALL]: "Marcă - Toate" },
											...brandOptions,
										]}
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
									<SelectComponent
										options={cityOptions}
										selectedOption={selectedCity}
										setSelectedOption={setSelectedCity}
									/>
									{/* <SelectComponent options={[{ "": "Any Price" }]} /> */}
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
									<Link href={listingsUrl}>
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
