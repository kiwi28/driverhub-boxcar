"use client";

import Image from "next/image";
import Slider from "react-slick";
import { Gallery, Item } from "react-photoswipe-gallery";

const slickOptions = {
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
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

export default function ListingSliderGallery({
	images,
}: {
	images: { src: string; alt: string; width: number; height: number }[];
}) {
	// const sliderSettings = useMemo(
	// 	() => ({
	// 		// Your slider settings
	// 	}),
	// 	[]
	// ); // Empty dependency array if settings don't depend on props

	return (
		<Gallery>
			<Slider
				{...slickOptions}
				className="inner-column inventry-slider-two inner-slide"
			>
				{images.map(({ src, alt, width, height }, index) => (
					<div
						key={index}
						className="image-box d-block"
					>
						<figure className="image">
							<Item
								original={src}
								thumbnail={src}
								width={width}
								height={height}
							>
								{({ ref, open }) => (
									<a onClick={open}>
										<Image
											ref={ref}
											alt={alt}
											src={src}
											style={{
												height: "100%",
												objectFit: "cover",
											}}
											width={width}
											height={height}
										/>
									</a>
								)}
							</Item>
						</figure>
					</div>
				))}
			</Slider>
			<div className="content-box">
				<ul className="video-list">
					{/* <li>
						<a onClick={() => setOpen(true)}>
							<Image
								src="/images/resource/video1-1.svg"
								width={18}
								height={18}
								alt=""
							/>
							Video
						</a>
					</li>
					<li>
						<a href="#">
							<Image
								src="/images/resource/video1-2.svg"
								width={18}
								height={18}
								alt=""
							/>
							360 View
						</a>
					</li> */}
					<li>
						<Item
							original="/images/resource/inventory1-6.png"
							thumbnail="/images/resource/inventory1-6.png"
							width={924}
							height={550}
						>
							{({ ref, open }) => (
								<a onClick={open}>
									<Image
										ref={ref}
										src="/images/resource/video1-4.svg"
										width={18}
										height={18}
										alt=""
									/>
									All Photos
								</a>
							)}
						</Item>
					</li>
				</ul>
			</div>
		</Gallery>
	);
}
