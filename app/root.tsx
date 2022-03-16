import { useEffect, useState } from "react";
import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "remix";
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
	}, [location]);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-white dark:bg-slate-900 min-h-screen w-full relative flex flex-col overflow-x-hidden animate-fade-in">
				<animated.div style={fadeInStyles}>
					<Navbar />
					<main className="p-2">
						<Outlet />
					</main>
				</animated.div>
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === "development" && <LiveReload />}
				<BottomNavbar />
			</body>
		</html>
	);
}
