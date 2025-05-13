import "../public/main.scss";
import "photoswipe/dist/photoswipe.css";
import { dm_sans } from "./ui/fonts";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

import { Toaster } from "react-hot-toast";
import { Providers } from "./lib/providers";
// import ServerHeaderWrapper from "./ui/components/headers/ServerHeaderWrapper";

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body className={`${dm_sans.className} antialiased`}>
				{/* <ServerHeaderWrapper /> */}
				<Toaster position="bottom-right" />
				<Providers>
					<ClientLayoutWrapper>{children}</ClientLayoutWrapper>
				</Providers>
			</body>
		</html>
	);
}
