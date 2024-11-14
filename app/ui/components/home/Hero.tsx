"use client";
import React from "react";
import Image from "next/image";
import SelectComponent from "@/app/ui/components/common/SelectComponent";
import Link from "next/link";
export default function Hero() {
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
								id="tab-1"
							>
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="form_boxes">
										<SelectComponent options={["Used Cars", "Audi", "Honda"]} />
									</div>
									<div className="form_boxes">
										<SelectComponent options={["Any Makes", "A3", "Accord"]} />
									</div>
									<div className="form_boxes">
										<SelectComponent options={["Any Models", "200$", "300$"]} />
									</div>
									<div className="form_boxes">
										<SelectComponent options={["Any Price", "200$", "300$"]} />
									</div>
									<Link
										href={`/listings`}
										className="form-submit"
									>
										<button
											type="submit"
											className="theme-btn"
										>
											<i className="flaticon-search" />
										</button>
									</Link>
								</form>
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
