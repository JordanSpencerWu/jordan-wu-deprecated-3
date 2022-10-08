import { useEffect } from "react";
import { Outlet, useCatch, useNavigate, useLocation } from "@remix-run/react";
import highlightStyles from "highlight.js/styles/github-dark-dimmed.css";
import { json } from "@remix-run/node";

import type {
	LinksFunction,
	LoaderFunction,
	MetaFunction,
} from "@remix-run/node";

// import { DARK_MODE, THEME } from "~/hooks/useDarkMode";
import Document from "~/components/Document";
import Layout from "~/components/Layout";
import pathTo from "~/utils/pathTo";
import SearchProvider from "~/providers/SearchProvider";
import styles from "~/tailwind.css";
import { WEBSITE_NAME } from "~/utils/pathToName";

export type LoaderData = {
	gaTrackingId: string | undefined;
};

export const loader: LoaderFunction = async () => {
	return json<LoaderData>({ gaTrackingId: process.env.GA_TRACKING_ID });
};

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

export const meta: MetaFunction = () => ({
	author: "Jordan Wu",
	charset: "utf-8",
	description:
		"The website provides many blog posts about a variety of topics including software engineering, DJ software, sound design, web development, etc.",
	title: WEBSITE_NAME,
	viewport: "width=device-width,initial-scale=1",
});

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

	return (
		<Document>
			<SearchProvider>
				<Layout>
					<main className="h-full w-full max-w-[1140px] my-[60px] md:mb-0">
						<Outlet />
					</main>
				</Layout>
			</SearchProvider>
		</Document>
	);
}

export function CatchBoundary() {
	const caught = useCatch();
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => navigate(pathTo.home()), 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Document>
			<Layout>
				<main className="h-full w-full max-w-[1140px] my-[60px]">
					<div className="h-full flex flex-col justify-center items-center">
						<div className="text-4xl -translate-y-20 text-center">
							<h1>Status Code: {caught.status}</h1>
							<h2>{caught.statusText}</h2>
						</div>
					</div>
				</main>
			</Layout>
		</Document>
	);
}

export function ErrorBoundary({ error }: { error: Error }) {
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => navigate(pathTo.home()), 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Document>
			<Layout>
				<main className="h-full w-full max-w-[1140px] my-[60px]">
					<div className="h-full flex flex-col justify-center items-center">
						<p className="text-2xl font-bold">Oops! An error has occurred.</p>
						<p className="text-xl">Redirecting back to Home...</p>
					</div>
				</main>
			</Layout>
		</Document>
	);
}
