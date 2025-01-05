// "use client";
import React from "react";
import Image from "next/image";
import { signIn } from "@/app/auth";
export default function Login() {
	console.log("before use server");
	return (
		<section className="login-section layout-radius">
			<div className="inner-container">
				<div className="right-box">
					<div className="form-sec">
						<nav>
							<div
								className="nav nav-tabs"
								id="nav-tab"
								role="tablist"
							>
								<button
									className="nav-link active"
									id="nav-home-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-home"
									type="button"
									role="tab"
									aria-controls="nav-home"
									aria-selected="true"
								>
									Login
								</button>
								<button
									className="nav-link"
									id="nav-profile-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-profile"
									type="button"
									role="tab"
									aria-controls="nav-profile"
									aria-selected="false"
								>
									Register
								</button>
							</div>
						</nav>
						<div
							className="tab-content"
							id="nav-tabContent"
						>
							<div
								className="tab-pane fade show active"
								id="nav-home"
								role="tabpanel"
								aria-labelledby="nav-home-tab"
							>
								<div className="form-box">
									<form
										// onSubmit={(e) => e.preventDefault()}
										action={async (formData) => {
											"use server";
											console.log("after use server");
											console.log("formData", formData);
											try {
												await signIn("credentials", formData);
											} catch (err) {
												console.log("signin error", err);
											}
										}}
									>
										<div className="form_boxes">
											<label>Email</label>
											<input
												autoComplete="current-email"
												required
												type="email"
												name="email"
												placeholder="ion.popescu@exemplu.com"
											/>
										</div>
										<div className="form_boxes">
											<label>Password</label>
											<input
												autoComplete="current-password"
												required
												type="password"
												name="password"
												placeholder="********"
											/>
										</div>
										<div className="btn-box">
											<label className="contain">
												Remember
												<input
													required
													type="checkbox"
													defaultChecked={true}
												/>
												<span className="checkmark" />
											</label>
											<a
												href="#"
												className="pasword-btn"
											>
												Forgotten password?
											</a>
										</div>
										<div className="form-submit">
											<button
												type="submit"
												className="theme-btn"
											>
												Login
												<Image
													alt=""
													src="/images/arrow.svg"
													width={14}
													height={14}
												/>
											</button>
										</div>
									</form>
									<div className="btn-box-two">
										<span>OR</span>
										<div className="social-btns">
											<a
												href="#"
												className="fb-btn"
											>
												<i className="fa-brands fa-facebook-f" />
												Continue Facebook
											</a>
											<a
												href="#"
												className="fb-btn two"
											>
												<i className="fa-brands fa-google" />
												Continue Google
											</a>
										</div>
									</div>
								</div>
							</div>
							{/* <div
								className="tab-pane fade"
								id="nav-profile"
								role="tabpanel"
								aria-labelledby="nav-profile-tab"
							>
								<div className="form-box two">
									<form
									//  onSubmit={(e) => e.preventDefault()}
									>
										<div className="form_boxes">
											<label>Username</label>
											<input
												required
												type="text"
												name="name"
												placeholder="Creativelayer088"
											/>
										</div>
										<div className="form_boxes">
											<label>Email</label>
											<input
												required
												type="email"
												name="email"
												placeholder="Creative@gmail.com"
											/>
										</div>
										<div className="form_boxes">
											<label>Phone</label>
											<input
												required
												type="number"
												name="phone"
												placeholder={+67}
											/>
										</div>
										<div className="form_boxes">
											<label>Password</label>
											<input
												required
												type="password"
												name="password"
												placeholder="********"
											/>
										</div>
										<div className="btn-box-three">
											<label className="contain">
												Private seller
												<input
													required
													type="radio"
													defaultChecked={true}
													name="radio"
												/>
												<span className="checkmark" />
											</label>
											<label className="contain">
												Business seller
												<input
													required
													type="radio"
													defaultChecked={true}
													name="radio"
												/>
												<span className="checkmark" />
											</label>
										</div>
										<div className="form-submit">
											<button
												type="submit"
												className="theme-btn"
											>
												Register
												<Image
													alt=""
													src="/images/arrow.svg"
													width={14}
													height={14}
												/>
											</button>
										</div>
										<div className="btn-box">
											<label className="contain">
												I accept the privacy policy
												<input
													required
													type="checkbox"
													defaultChecked={true}
												/>
												<span className="checkmark" />
											</label>
										</div>
									</form>
									<div className="btn-box-two">
										<span>OR</span>
										<div className="social-btns">
											<a
												href="#"
												className="fb-btn"
											>
												<i className="fa-brands fa-facebook-f" />
												Continue Facebook
											</a>
											<a
												href="#"
												className="fb-btn two"
											>
												<i className="fa-brands fa-google" />
												Continue Google
											</a>
										</div>
									</div>
								</div>
                </div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
