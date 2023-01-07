import { json } from "@remix-run/node";
import {
	Link,
	useLoaderData,
	useLocation,
	useSearchParams,
} from "@remix-run/react";

import type { HeadersFunction, MetaFunction } from "@remix-run/node";

import displayDate from "~/utils/displayDate";
import POSTS, { TAGS } from "~/utils/posts";
import Tag from "~/components/Tag";

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
	const recentPosts = POSTS.slice(0, 10);

	return json(recentPosts);
}

export default function HomeRoute() {
	const posts: PostMeta[] = useLoaderData();
	const [searchParams] = useSearchParams();
	const location = useLocation();

	const state = {
		previousPathname: location.pathname,
	};

	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-col px-4 py-24">
				<h1 className="dark:text-white text-7xl">welcome!</h1>
				<h3 className="dark:text-white mt-2 text-3xl min-h-[116px]">
					{`My name is Jordan and I'll be blogging about `}
					<span className="text-[#75FB9F] text-4xl capitalize">
						<ReactRotatingText items={TAGS} random={true} />
					</span>
				</h3>
			</div>
			<div className="py-8 flex flex-col">
				<h3 className="dark:text-white text-2xl px-4">RECENT POSTS</h3>
				<ul className="w-full">
					{posts.map((post, index) => {
						return (
							<li key={post.slug}>
								{index === 5 && (
									<div className="w-full py-4 px-4 mt-4 flex flex-col border-y border-nav-border-color dark:border-dark-secondary-color border-solid">
										<h3 className="dark:text-white text-2xl">FIND BY TOPICS</h3>
										<div className="my-4 inline-flex flex-wrap gap-x-2 gap-y-2.5 text-[14px] leading-6">
											{TAGS.map((tag) => (
												<Tag
													key={tag}
													className="text-[18px] leading-6"
													clickable
													isSingleFilter
												>
													{tag}
												</Tag>
											))}
										</div>
									</div>
								)}
								<div className="w-full cursor-pointer mt-4 px-4">
									<Link
										to={`${post.slug}?${searchParams.toString()}`}
										state={state}
									>
										<article className="w-full py-2">
											<div className="flex justify-between">
												<div
													className={`dark:text-dark-secondary-color pr-4 w-[calc(100%_-_var(--post-image-width))]`}
												>
													<p className="max-w-7/10 pt-1 font-bold text-xl leading-6">
														{post.meta.title}
													</p>
													<p className="font-medium text-lg mt-2 inline-block">
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
													className="post-image rounded object-fill"
												/>
											</div>
										</article>
									</Link>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
