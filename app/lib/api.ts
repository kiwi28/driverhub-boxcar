import { pb } from "@/app/lib/pb";
import { BrandCount, ListingRecord, ListResponse } from "./types/listingTypes";
import { RecordListOptions, RecordOptions } from "pocketbase";
import { pbFetch } from "./utils";

// export const fetchListingsPage = async (
// 	page: number,
// 	limit: number,
// 	options?: RecordListOptions
// ): Promise<ListResponse<ListingRecord>> => {
// 	const resp = await pb
// 		.collection("listings")
// 		.getList<ListingRecord>(page, limit, options);

// 	return resp;
// };
export const fetchListingsPage = async (
	page: number,
	limit: number,
	options?: RecordListOptions
): Promise<ListResponse<ListingRecord>> => {
	return pbFetch<ListResponse<ListingRecord>>("collections/listings/records", {
		page,
		limit,
		filter: options?.filter,
		sort: options?.sort,
		expand: options?.expand,
	});
};

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

	console.log("brandCounts", brandCounts);

	return brandCounts;
};
