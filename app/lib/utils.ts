import { auth } from "@/auth";

export const convertToSlug = (text: string) => {
	return text
		.toLowerCase()
		.replace(/[^\w ]+/g, "")
		.replace(/ +/g, "-");
};

// utils/pb-api.ts
// Helper function for authenticated PB requests
export async function pbFetch(endpoint: string, options: RequestInit = {}) {
	// Get the session token
	const session = await auth();

	return fetch(`${process.env.NEXT_PUBLIC_PB_URL}/api/${endpoint}`, {
		...options,
		headers: {
			...options.headers,
			Authorization: `Bearer ${session?.user?.pbToken}`,
			"Content-Type": "application/json",
		},
	});
}

// // Example usage in a server component:
// async function UserProfile() {
//   const response = await pbFetch('collections/users/records/RECORD_ID')
//   const userData = await response.json()

//   return <div>{userData.name}</div>
// }

// // Example for mutations (in a server action):
// 'use server'
// export async function updateUserProfile(data: any) {
//   const response = await pbFetch('collections/users/records/RECORD_ID', {
//     method: 'PATCH',
//     body: JSON.stringify(data)
//   })

//   return response.json()
// }
