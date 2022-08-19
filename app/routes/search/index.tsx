import { useContext, useMemo } from "react";
import { json } from "@remix-run/node";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Search } from "js-search";

import BlogPostItem from "~/components/BlogPostItem";
import posts from "~/utils/posts";
import type { PostMeta } from "~/utils/posts";
import { SearchContext } from "~/providers/SearchProvider";

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
	const [searchTerm] = useContext(SearchContext);

	const search = useMemo(() => {
		const search = new Search("slug");
		search.addIndex("title");

		posts.forEach((post) => {
			search.addDocument(post);
		});

		return search;
	}, [posts]);

	let displayPosts = posts;

	if (searchTerm) {
		const searchedPosts = search.search(searchTerm);

		displayPosts = searchedPosts;
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
