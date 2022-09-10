import type { ReactNode } from "react";
import {
	Links,
	LiveReload,
	Meta,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

type Props = {
	children: ReactNode;
};

export default function Document(props: Props) {
	const { children } = props;

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-white min-h-screen w-screen h-screen relative flex flex-col overflow-x-hidde animate-fade-in">
				{children}
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === "development" && <LiveReload />}
			</body>
		</html>
	);
}
