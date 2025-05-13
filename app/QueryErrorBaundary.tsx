"use client";

import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

export function QueryErrorBoundary({
	children,
}: {
	children: React.ReactNode;
}) {
	const { reset } = useQueryErrorResetBoundary();

	return (
		<ErrorBoundary
			onReset={reset}
			fallbackRender={({ error, resetErrorBoundary }) => (
				<div className="error-container">
					<h2>Something went wrong!</h2>
					<p>{error.message}</p>
					<button onClick={resetErrorBoundary}>Try again</button>
				</div>
			)}
		>
			{children}
		</ErrorBoundary>
	);
}
