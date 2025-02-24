import { auth } from "@/auth";

export const convertToSlug = (text: string) => {
	return text
		.toLowerCase()
		.replace(/[^\w ]+/g, "")
		.replace(/ +/g, "-");
};

// utils/pb-api.ts
// Helper function for authenticated PB requests
// export async function pbFetch(endpoint: string, options: RequestInit = {}) {
// 	// Get the session token
// 	const session = await auth();

// 	return fetch(`${process.env.NEXT_PUBLIC_PB_URL}/api/${endpoint}`, {
// 		...options,
// 		headers: {
// 			...options.headers,
// 			Authorization: `Bearer ${session?.user?.pbToken}`,
// 			"Content-Type": "application/json",
// 		},
// 	});
// }

type PBQueryOptions = {
	page?: number;
	limit?: number;
	filter?: string;
	sort?: string;
	expand?: string;
	fields?: string;
	skipTotal?: boolean;
	requestInit?: RequestInit;
};

export async function pbFetch<T>(
	endpoint: string,
	options: PBQueryOptions = {},
	token?: string
): Promise<T> {
	const session = await auth();

	// Extract pagination and query options
	const {
		page,
		limit,
		filter,
		sort,
		expand,
		fields,
		skipTotal,
		requestInit = {},
	} = options;

	// Build query parameters
	const queryParams = new URLSearchParams();

	if (page) queryParams.set("page", page.toString());
	if (limit) queryParams.set("perPage", limit.toString());
	if (filter) queryParams.set("filter", filter);
	if (sort) queryParams.set("sort", sort);
	if (expand) queryParams.set("expand", expand);
	if (fields) queryParams.set("fields", fields);
	if (skipTotal) queryParams.set("skipTotal", "true");

	const queryString = queryParams.toString();
	const url = `${process.env.NEXT_PUBLIC_PB_URL}/api/${endpoint}${
		queryString ? `?${queryString}` : ""
	}`;
	const reqBody = {
		...requestInit,
		headers: {
			...requestInit.headers,
			"Content-Type": "application/json",
		},
	};

	if (token) {
		reqBody.headers = {
			...reqBody.headers,
			// @ts-expect-error
			Authorization: `Bearer ${token}`,
		};
	}

	const response = await fetch(url, reqBody);
	// console.log("token", token);
	// console.log("response", response);

	if (!response.ok) {
		throw new Error("PocketBase request failed:" + response.statusText);
	}

	return response.json();
}
