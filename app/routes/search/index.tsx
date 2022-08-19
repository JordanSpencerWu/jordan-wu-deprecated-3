import { useMemo } from "react";
import { json } from "@remix-run/node";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import Fuse from "fuse.js";

import BlogPostItem from "~/components/BlogPostItem";
import posts from "~/utils/posts";
import type { PostMeta } from "~/utils/posts";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | Search" };
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": `public, max-age=${60 * 60 * 24}`,
	};
};

export async function loader() {
	return json(posts);
}

export default function Index() {
	const posts: PostMeta[] = useLoaderData();
	let [searchParams] = useSearchParams();

	const searchTerm = searchParams.get("q") || "";

	const fuse = useMemo(() => {
		const options = {
			isCaseSensitive: true,
			shouldSort: false,
			minMatchCharLength: 1,
			keys: ["title"],
		};

		return new Fuse(posts, options);
	}, [posts]);

	let displayPosts = posts;

	if (searchTerm) {
		const searchedPosts = fuse.search(searchTerm);

		displayPosts = searchedPosts.map((p) => p.item);
	}

	return (
		<div className="w-screen flex">
			<ul className="w-full">
				{displayPosts.map((post, index) => (
					<BlogPostItem key={index} {...post} />
				))}
			</ul>
		</div>
	);
}
