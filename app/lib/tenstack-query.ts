import { QueryClient } from "@tanstack/react-query";

export async function prefetchQuery<T>(
	queryKey: Array<string>,
	queryFn: () => Promise<T>
): Promise<T> {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey,
		queryFn,
	});
	const data = queryClient.getQueryData<T>(queryKey);

	if (data === undefined) {
		throw new Error(
			`Failed to prefetch data for query key: ${JSON.stringify(queryKey)}`
		);
	}

	return data;
}
