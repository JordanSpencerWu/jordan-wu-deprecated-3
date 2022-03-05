import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, MetaFunction } from "remix";

import Navbar from "./components/TopNavbar";
import styles from "./tailwind.css";

export function links() {
	return [
		{
			rel: "stylesheet",
			href: styles,
		},
		{
			rel: "preconnect",
			href: "https://fonts.googleapis.com",
		},
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossOrigin: "anonymous",
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
		},
	];
}

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu" };
};

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="min-h-screen w-full flex flex-col overflow-x-hidden">
				<Navbar />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === "development" && <LiveReload />}
			</body>
		</html>
	);
}
