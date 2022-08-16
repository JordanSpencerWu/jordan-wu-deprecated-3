import { useEffect, useState } from "react";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useSpring, animated } from "react-spring";

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
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap",
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400;0,700;1,400;1,700&display=swap",
		},
		{
			rel: "stylesheet",
			href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
		},
	];
};

const FADE_IN_SPRING_PROPS = {
	to: { opacity: 1 },
	from: { opacity: 0 },
};

export default function App() {
	const [fadeInStyles, springApi] = useSpring(() => FADE_IN_SPRING_PROPS);
	const location = useLocation();
	const [currentPathname, setCurrentPathname] = useState(location.pathname);

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

	useEffect(() => {
		if (location.pathname !== currentPathname) {
			springApi.start(FADE_IN_SPRING_PROPS);
			setCurrentPathname(location.pathname);
		}
	}, [location, currentPathname, springApi]);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-white min-h-screen w-screen h-screen relative flex flex-col overflow-x-hidden animate-fade-in">
				<animated.div style={fadeInStyles} className="w-full flex flex-col flex-1">
					<Navbar />
					<main className="my-[60px] h-full w-full">
						<Outlet />
					</main>
				</animated.div>
				<BottomNavbar />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === "development" && <LiveReload />}
			</body>
		</html>
	);
}
