import { useEffect } from "react";
import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";

import Navbar from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
import { DARK_MODE, THEME } from "./hooks/useDarkMode";
import styles from "./tailwind.css";

export const links: LinksFunction = () => {
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
};

export default function App() {
	useEffect(() => {
		if (
			localStorage.theme === DARK_MODE ||
			(!(THEME in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add(DARK_MODE);
		} else {
			document.documentElement.classList.remove(DARK_MODE);
		}
	}, []);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-white dark:bg-slate-900 min-h-screen w-full relative flex flex-col overflow-x-hidden">
				<Navbar />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === "development" && <LiveReload />}
				<BottomNavbar />
			</body>
		</html>
	);
}
