import type { ReactNode } from "react";
import {
	Links,
	LiveReload,
	Meta,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";

import type { LoaderData } from "app/root";

type Props = {
	children: ReactNode;
};

export default function Document(props: Props) {
	const { children } = props;
	const { gaTrackingId } = useLoaderData<LoaderData>() || {};

	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="bg-white min-h-screen w-screen h-screen relative flex flex-col overflow-x-hidde animate-fade-in">
				{process.env.NODE_ENV === "production" && gaTrackingId && (
					<>
						<script
							src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
							async
						/>
						<script
							id="gtag-init"
							dangerouslySetInnerHTML={{
								__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
									page_path: window.location.pathname,
                });
								`,
							}}
							async
						/>
					</>
				)}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							MathJax = {
								tex: {
									packages: ['base'],
									inlineMath: [['($', '$)']],
									displayMath: [['$$', '$$'], ['\\[', '\\]']],
								},
								startup: {
									typeset: false
								}
							};
						`,
					}}
				/>
				<script
					id="MathJax-script"
					type="text/javascript"
					src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"
					async
				/>
				{children}
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === "development" && <LiveReload />}
			</body>
		</html>
	);
}
