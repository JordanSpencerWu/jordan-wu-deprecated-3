import { json } from "@remix-run/node";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Tag from "~/components/Tag";
import displayDate from "~/utils/displayDate";
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
				<h3 className="mt-2 text-2xl min-h-[96px]">
					{`My name is Jordan and I'll be blogging about `}
					<ReactRotatingText items={TAGS} random={true} />
				</h3>
			</div>
			<div className="py-8 px-4 flex flex-col border-y border-nav-border-color border-solid">
				<h4 className="text-md">RECENT POSTS</h4>
				<ul className="w-full">
					{posts.map((post) => (
						<li className="w-full cursor-pointer">
							<article className="w-full py-2">
								<div className="flex justify-between mt-2">
									<div>
										<p className="max-w-7/10 pt-1 font-bold text-lg leading-5">
											{post.title}
										</p>
										<p className="font-medium text-sm my-2 inline-block">
											<time
												className="after:content-['\00b7'] after:text-[18px] after:align-middle after:mx-[2px]"
												dateTime={post.published}
											>
												{displayDate(post.published)}
											</time>
											{post.readingTimeInMinute} min read
										</p>
									</div>
									<img
										alt="blog post"
										src={post.postImageUrl}
										className="rounded w-3/10 h-[62px]"
									/>
								</div>
							</article>
						</li>
					))}
				</ul>
			</div>
			<div className="py-8 px-4 flex flex-col">
				<h4 className="text-md">FIND BY TOPICS</h4>
				<div className="my-4 inline-flex flex-wrap gap-x-2 gap-y-2.5 text-[14px] leading-6">
					{TAGS.map((tag) => (
						<Tag key={tag} className="text-[18px] leading-6" clickable>
							{tag}
						</Tag>
					))}
				</div>
			</div>
		</div>
	);
}
