import { Outlet, useNavigate, useLocation } from "@remix-run/react";
import classNames from "classnames";
import highlightStyles from "highlight.js/styles/github-dark-dimmed.css";

import type { LinksFunction } from "@remix-run/node";

// import { DARK_MODE, THEME } from "~/hooks/useDarkMode";
import Document from "~/components/Document";
import Layout from "~/components/Layout";
import pathTo from "~/utils/pathTo";
import pathToName from "~/utils/pathToName";
import SearchProvider from "~/providers/SearchProvider";
import styles from "~/tailwind.css";

export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: highlightStyles,
		},
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

export default function App() {
	const location = useLocation();
	// useEffect(() => {
	// 	if (
	// 		localStorage.theme === DARK_MODE ||
	// 		(!(THEME in localStorage) &&
	// 			window.matchMedia("(prefers-color-scheme: dark)").matches)
	// 	) {
	// 		document.documentElement.classList.add(DARK_MODE);
	// 	} else {
	// 		document.documentElement.classList.remove(DARK_MODE);
	// 	}
	// }, []);

	const pathName = pathToName[location.pathname];

	const mainClass = classNames("h-full w-full mb-[60px]", {
		"mt-[60px]": Boolean(pathName),
	});

	return (
		<Document>
			<SearchProvider>
				<Layout>
					<main className={mainClass}>
						<Outlet />
					</main>
				</Layout>
			</SearchProvider>
		</Document>
	);
}

export function ErrorBoundary({ error }: { error: Error }) {
	const navigate = useNavigate();

	setTimeout(() => {
		navigate(pathTo.home);
	}, 3000);

	return (
		<Document>
			<Layout>
				<main className="h-full w-full my-[60px]">
					<div className="h-full flex flex-col justify-center items-center">
						<p className="text-2xl font-bold">Oops! An error has occurred.</p>
						<p className="text-xl">Redirecting back to Home...</p>
					</div>
				</main>
			</Layout>
		</Document>
	);
}
