import { json } from "@remix-run/node";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import BlogPostItem from "~/components/BlogPostItem";
import POSTS, { TAGS } from "~/utils/posts";
import type { PostMeta } from "~/utils/posts";

var ReactRotatingText = require("react-rotating-text");

export const meta: MetaFunction = () => {
	return { title: "jordanwu.xyz | Home" };
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": `public, max-age=${60 * 60 * 24}`,
	};
};

export async function loader() {
	return json(POSTS);
}

export default function Index() {
	const posts: PostMeta[] = useLoaderData();

	return (
		<div className="w-screen flex flex-col">
			<div className="flex flex-col px-4 py-24">
				<h1 className="text-7xl">welcome!</h1>
				<h3 className="mt-2 text-2xl min-h-[64px]">
					{`My name is Jordan and I'll be blogging about `}
					<ReactRotatingText items={TAGS} random={true} />
				</h3>
			</div>
			<ul className="w-full">
				{posts.map((post) => (
					<BlogPostItem key={post.slug} {...post} />
				))}
			</ul>
		</div>
	);
}
