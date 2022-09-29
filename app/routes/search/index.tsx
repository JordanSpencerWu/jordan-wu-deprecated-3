import { json } from "@remix-run/node";
import { Search } from "js-search";
import { useContext, useEffect, useMemo, useState } from "react";
import { useLoaderData, useSearchParams, useLocation } from "@remix-run/react";

import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import type { MouseEvent } from "react";

import SearchBar from "~/components/SearchBar";
import { SearchContext } from "~/providers/SearchProvider";
import BlogPostItem from "~/components/BlogPostItem";
import POSTS, { TAGS } from "~/utils/posts";
import Tag from "~/components/Tag";

import type { PostMeta } from "~/utils/posts";

type LocationState = {
	tag?: string;
};

export const meta: MetaFunction = () => {
	return { title: "jordanwu.xyz | Search" };
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": `public, max-age=${60 * 60 * 24}`,
	};
};

export async function loader() {
	return json(POSTS);
}

export default function SearchRoute() {
	const posts: PostMeta[] = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();
	const [orderedTags, setOrderedTags] = useState<string[]>(TAGS);
	const [searchTerm] = useContext(SearchContext);

	const filters = searchParams.get("filters")?.split(",") || [];
	const state = location?.state as LocationState;
	const tag = state?.tag;

	useEffect(() => {
		if (tag) {
			const index = orderedTags.indexOf(tag);

			if (index > -1) {
				let newOrderedTags = [...orderedTags];
				newOrderedTags.splice(index, 1);
				newOrderedTags.unshift(tag);
				setOrderedTags(newOrderedTags);
			}
		}
	}, [tag]);

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

	if (filters.length > 0) {
		displayPosts = displayPosts.filter((post) =>
			filters.some((filter) => post.tags.includes(filter))
		);
	}

	function clearFilters(event: MouseEvent<HTMLElement>) {
		event.preventDefault();

		searchParams.delete("filters");
		setSearchParams(searchParams, { replace: true });
	}

	const emptySearchResult = searchTerm && displayPosts.length === 0;

	return (
		<div className="w-full h-full flex flex-col">
			<div className="hidden md:flex pt-4">
				<SearchBar />
			</div>
			<div className="py-4 inline-flex gap-1 flex-nowrap overflow-x-auto overflow-y-hidden text-[18px] leading-6">
				{orderedTags.map((tag) => {
					const active = filters.includes(tag);

					return (
						<Tag key={tag} className="first:ml-2" active={active} clickable>
							{tag}
						</Tag>
					);
				})}
				<div
					className="bg-[#e4e4e4] text-[#727272] h-[24px] inline-block px-[8px] rounded-2xl capitalize whitespace-nowrap mr-2 cursor-pointer"
					onClick={clearFilters}
				>
					Clear Filters
				</div>
			</div>
			{displayPosts.length > 0 && (
				<ul className="w-full">
					{displayPosts.map((post) => (
						<BlogPostItem key={post.slug} {...post} />
					))}
				</ul>
			)}
			{emptySearchResult && (
				<div className="h-full w-full p-4 text-2xl flex justify-center items-center">
					<p className="w-full text-center break-words">
						Sorry could not find any matches for:{" "}
						<b className="font-bold">{searchTerm}</b>
					</p>
				</div>
			)}
		</div>
	);
}
