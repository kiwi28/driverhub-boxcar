import {
	BrandCount,
	CityRecord,
	ListingRecord,
	ListResponse,
} from "./types/listingTypes";
import { RecordListOptions, RecordOptions } from "pocketbase";
import { pbFetch } from "./utils";

// export const fetchListings = async (
// 	page: number,
// 	limit: number,
// 	options?: RecordListOptions
// ): Promise<ListResponse<ListingRecord>> => {
// 	const resp = await pb
// 		.collection("listings")
// 		.getList<ListingRecord>(page, limit, options);

// 	return resp;
// };
export const fetchListings = async (
	page: number,
	limit: number,
	options?: RecordListOptions
): Promise<ListResponse<ListingRecord>> => {
	const searchParams = new URLSearchParams({
		page: page.toString(),
		perPage: limit.toString(),
		sort: options?.sort || "-created",
		// filter: options?.filter,
		// ...(options?.filter && { filter: options.filter }),
		...(options?.expand && { expand: options.expand }),
	});

	console.log("filter", options?.filter);

	let url = `${process.env.NEXT_PUBLIC_PB_URL}/api/collections/listings/records?${searchParams}`;
	if (options?.filter) {
		url = `${url}&filter=${options.filter}`;
	}
	console.log(url);

	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error(
			"Failed to fetch listings\n" +
				response.status +
				"\n" +
				response.statusText
		);
	}
	return response.json();
};
// export const fetchListings = async (
// 	page: number,
// 	limit: number,
// 	options?: RecordListOptions
// ): Promise<ListResponse<ListingRecord>> => {
// 	return pbFetch<ListResponse<ListingRecord>>("collections/listings/records", {
// 		page,
// 		limit,
// 		filter: options?.filter,
// 		sort: options?.sort || "-created",
// 		expand: options?.expand,
// 	});
// };

export const fetchListing = async (
	id: string,
	options?: RecordOptions
): Promise<ListingRecord> => {
	return pbFetch<ListingRecord>(`collections/listings/records/${id}`, {
		expand: options?.expand,
		fields: options?.fields,
	});
};

export const getLatestListingHero = async (): Promise<
	ListResponse<ListingRecord>
> => {
	return pbFetch<ListResponse<ListingRecord>>("collections/listings/records", {
		page: 1,
		limit: 4,
		sort: "-created",
	});
};

export const getCities = async (): Promise<ListResponse<CityRecord>> => {
	return pbFetch<ListResponse<CityRecord>>("collections/cities/records", {
		skipTotal: true,
		limit: 500,
		filter: "enabled=True",
	});
};

export const countActiveListingsByBrand = async (): Promise<BrandCount> => {
	// Get all records in one request
	const resp = await pbFetch<ListResponse<ListingRecord>>(
		"collections/listings/records",
		{
			filter: "isActive=True",
			// Set a high limit to get all records (similar to getFullList)
			limit: 500,
			// Skip total count for better performance if not needed
			skipTotal: true,
		}
	);

	const brandCounts: BrandCount = {};

	resp.items.forEach((listing) => {
		if (brandCounts[listing.brand]) {
			brandCounts[listing.brand]++;
		} else {
			brandCounts[listing.brand] = 1;
		}
	});

	return brandCounts;
};
