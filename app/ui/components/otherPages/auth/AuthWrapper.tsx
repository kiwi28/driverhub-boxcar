"use client";
import React from "react";

import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
export default function AuthWrapper({ callbackUrl }: { callbackUrl: string }) {
	// console.log("pb authStore token: ", pb.authStore.token);

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
									<LoginForm callbackUrl={callbackUrl} />
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
							<div
								className="tab-pane fade"
								id="nav-profile"
								role="tabpanel"
								aria-labelledby="nav-profile-tab"
							>
								<div className="form-box two">
									<RegisterForm callbackUrl={callbackUrl} />
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
