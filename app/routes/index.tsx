import { json } from "@remix-run/node";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import BlogPostItem from "~/components/BlogPostItem";
import POSTS from "~/utils/posts";
import type { PostMeta } from "~/utils/posts";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | Home" };
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
		<div className="w-screen flex">
			<ul className="w-full">
				{posts.map((post) => (
					<BlogPostItem key={post.slug} {...post} />
				))}
			</ul>
		</div>
	);
}
