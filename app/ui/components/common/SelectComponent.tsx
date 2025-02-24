"use client";

import { ISelectOptions } from "@/app/lib/types/types";
import { useEffect, useRef, useState } from "react";

export default function SelectComponent({
	options = [{ "": "" }],
	selectedOption,
	setSelectedOption,
}: {
	selectedOption: any;
	setSelectedOption: any;
	options: ISelectOptions;
}) {
	const [isDromdownOpen, setIsDromdownOpen] = useState(false);

	const ref = useRef(null);
	const handleClickOutside = (event) => {
		// Check if the click was outside the referenced element
		if (ref.current && !ref.current.contains(event.target)) {
			setIsDromdownOpen(false); // Close the element or perform an action
		}
	};

	useEffect(() => {
		// Add event listener on mount
		document.addEventListener("click", handleClickOutside);

		// Clean up event listener on unmount
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={`drop-menu  ${isDromdownOpen ? "active" : ""} `}
		>
			<div
				className="select"
				onClick={() => setIsDromdownOpen((pre) => !pre)}
				style={{ minWidth: "200px" }}
			>
				<span>{selectedOption}</span>
				<i className="fa fa-angle-down" />
			</div>

			<ul
				className="dropdown"
				style={
					isDromdownOpen
						? {
								display: "block",
								opacity: 1,
								visibility: "visible",
								transition: "0.4s",
						  }
						: {
								display: "block",
								opacity: 0,
								visibility: "hidden",
								transition: "0.4s",
						  }
				}
			>
				{options.map((option, index) => (
					<li
						onClick={() => {
							setSelectedOption(Object.keys(option)[0]);
							setIsDromdownOpen(false);
						}}
						key={index}
					>
						{Object.values(option)[0]}
					</li>
				))}
			</ul>
		</div>
	);
}
