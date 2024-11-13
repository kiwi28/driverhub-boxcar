"use client";
import React from "react";
import Image from "next/image";
import {
	carBrands,
	contactItems,
	navItems,
	socialMediaLinks,
	vehicleTypes,
} from "@/data/footerLinks";
import Link from "next/link";
export default function Footer1({
	parentClass = "DriverHUB-footer footer-style-one cus-st-1",
}) {
	return (
		<footer className={parentClass}>
			<div className="footer-top">
				<div className="DriverHUB-container">
					<div className="right-box">
						<div className="top-left wow fadeInUp">
							<h6 className="title">Join DriverHUB</h6>
							<div className="text">
								Receive pricing updates, shopping tips &amp; more!
							</div>
						</div>
						<div
							className="subscribe-form wow fadeInUp"
							data-wow-delay="100ms"
						>
							<form
								onSubmit={(e) => e.preventDefault()}
								method="post"
								action="#"
							>
								<div className="form-group">
									<input
										type="email"
										name="email"
										className="email"
										defaultValue=""
										placeholder="Your e-mail address"
										autofill="off"
										required
									/>
									<button
										type="button"
										className="theme-btn btn-style-one hover-light"
									>
										<span className="btn-title">Sign Up</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/*  Footer Bottom */}
			<div className="footer-bottom">
				<div className="DriverHUB-container">
					<div className="inner-container">
						<div className="copyright-text wow fadeInUp">
							© <a href="#">2024 DriverHUBs.com. All rights reserved.</a>
						</div>
						<ul
							className="footer-nav wow fadeInUp"
							data-wow-delay="200ms"
						>
							<li>
								<a href="#">Terms &amp; Conditions</a>
							</li>
							<li>
								<a href="#">Privacy Notice</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
