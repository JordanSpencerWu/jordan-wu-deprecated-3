import type { HeadersFunction, MetaFunction } from "@remix-run/node";

import BlogPostItem from "../components/BlogPostItem";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | Home" };
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": `public, max-age=${60 * 60 * 24}`,
	};
};

export default function Index() {
	return (
		<div className="w-screen flex mb-[60px]">
			<ol className="w-full">
				<BlogPostItem />
			</ol>
		</div>
	);
}
