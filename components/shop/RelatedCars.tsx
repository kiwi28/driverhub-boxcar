"use client";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { products } from "@/data/products";
import { useContextElement } from "@/context/Context";
export default function RelatedCars() {
	const { addProductToCart, isAddedToCartProducts } = useContextElement();
	const sliceOptions = {
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	};
	return (
		<div className="cars-section-fourteen v1">
			<div className="DriverHUB-container">
				<div className="DriverHUB-title wow fadeInUp">
					<h2>Related Products</h2>
					<a
						href="#"
						className="btn-title"
					>
						View All
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={14}
							height={14}
							viewBox="0 0 14 14"
							fill="none"
						>
							<g clipPath="url(#clip0_601_243)">
								<path
									d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z"
									fill="#050B20"
								/>
							</g>
							<defs>
								<clipPath id="clip0_601_243">
									<rect
										width={14}
										height={14}
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
				<Slider
					{...sliceOptions}
					className="row car-slider-three"
				>
					{products.map((product, index) => (
						<div
							key={index}
							className="car-block-fourteen col-lg-3 col-md-12 col-sm-12"
							data-wow-delay={product.wowDelay}
						>
							<div className="inner-box">
								<div className="image-box">
									<figure className="image">
										<Link href={`/shop-single/${product.id}`}>
											<Image
												alt={product.title}
												src={product.imgSrc}
												width={186}
												height={186}
											/>
										</Link>
									</figure>
								</div>
								<div className="content-box">
									<ul className="rating">
										{[...Array(5)].map((_, i) => (
											<li key={i}>
												<i className="fa fa-star" />
											</li>
										))}
									</ul>
									<div className="text">
										<Link
											href={`/shop-single/${product.id}`}
											title=""
										>
											{product.title}
										</Link>
									</div>
									<h6 className="title">
										<del>${product.originalPrice}</del>$
										{product.discountedPrice}
									</h6>
									<a
										onClick={() => addProductToCart(product.id)}
										className="shoping-btn"
									>
										<i className="fa-solid fa-cart-shopping" />
										{isAddedToCartProducts(product.id)
											? "Already Added"
											: "Add To Cart"}
									</a>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}
