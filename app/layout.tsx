import "../public/main.scss";
import "photoswipe/dist/photoswipe.css";
import { dm_sans } from "./ui/fonts";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import TempSes from "./ui/components/headers/tempUsername";

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body className={`${dm_sans.className} antialiased`}>
				<TempSes />
				<ClientLayoutWrapper>{children}</ClientLayoutWrapper>
			</body>
		</html>
	);
}
