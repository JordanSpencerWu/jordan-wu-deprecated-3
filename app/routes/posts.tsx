import styles from "highlight.js/styles/github-dark-dimmed.css";
import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: styles,
		},
	];
};

export default function Blog() {
	return (
		<div className="p-[16px]">
			<Outlet />
		</div>
	);
}
