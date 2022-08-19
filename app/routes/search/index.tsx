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
		const searchedPosts = search.search(searchTerm) as PostMeta[];

		displayPosts = searchedPosts;
	}

	const emptySearchResult = searchTerm && displayPosts.length === 0;

	return (
		<div className="w-screen h-full flex">
			{displayPosts.length > 0 && (
				<ul className="w-full">
					{displayPosts.map((post) => (
						<BlogPostItem key={post.slug} {...post} />
					))}
				</ul>
			)}
			{emptySearchResult && (
				<div className="h-full w-full p-4 text-2xl flex justify-center items-center">
					<p className="text-center break-all">
						Sorry could not find any matches for:{" "}
						<b className="font-bold">{searchTerm}</b>
					</p>
				</div>
			)}
		</div>
	);
}
