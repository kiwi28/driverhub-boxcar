import { pb } from "@/app/lib/pb";
import { ListingRecord, ListResponse } from "./types/listingTypes";
import { RecordListOptions, RecordOptions } from "pocketbase";

export const fetchListingsPage = async (
	page: number,
	limit: number,
	options?: RecordListOptions
): Promise<ListResponse<ListingRecord>> => {
	const resp = (await pb
		.collection("listings")
		.getList<ListingRecord>(
			page,
			limit,
			options
		)) as ListResponse<ListingRecord>;

	return resp;
};

export const fetchListing = async (
	id: string,
	options?: RecordOptions
): Promise<ListingRecord> => {
	const resp = await pb
		.collection("listings")
		.getOne<ListingRecord>(id, options);

	return resp;
};
