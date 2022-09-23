import { useState } from "react";
import { json } from "@remix-run/node";
import {
	Link,
	useLoaderData,
	useLocation,
	useNavigate,
	useSearchParams,
} from "@remix-run/react";
import FadeLoader from "react-spinners/FadeLoader";
import classNames from "classnames";

import type { HeadersFunction, MetaFunction } from "@remix-run/node";

import displayDate from "~/utils/displayDate";
import pathTo from "~/utils/pathTo";
import POSTS, { TAGS } from "~/utils/posts";
import Tag from "~/components/Tag";

import type { PostMeta } from "~/utils/posts";

var ReactRotatingText = require("react-rotating-text");

const INITIAL_LOADING_STATES = {
	favoriteTrack: true,
	favoriteAlbum: true,
	favoriteDJLiveSet: true,
};

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

export default function HomeRoute() {
	const [loadingStates, setLoadingStates] = useState(INITIAL_LOADING_STATES);
	const posts: PostMeta[] = useLoaderData();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const location = useLocation();

	const trackClass = classNames("mb-4 rounded", {
		hidden: loadingStates.favoriteTrack,
	});
	const albumClass = classNames("mb-4 rounded", {
		hidden: loadingStates.favoriteAlbum,
	});
	const LiveSetClass = classNames("mb-4 w-full rounded", {
		hidden: loadingStates.favoriteDJLiveSet,
	});

	const state = {
		previousPathname: location.pathname,
	};

	function handleClick(slug: string) {
		navigate(`${slug}?${searchParams.toString()}`, { state });
	}

	function handleLoad(loadingState: string) {
		const newLoadingStates = { [loadingState]: false };

		setLoadingStates((prevState) => ({ ...prevState, ...newLoadingStates }));
	}

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
				<h3 className="text-xl">RECENT POSTS</h3>
				<ul className="w-full">
					{posts.map((post) => (
						<li
							key={post.slug}
							className="w-full cursor-pointer"
							onClick={() => handleClick(post.slug)}
						>
							<article className="w-full py-2">
								<div className="flex justify-between mt-2">
									<div className="pr-4">
										<p className="max-w-7/10 pt-1 font-bold text-lg leading-5">
											{post.title}
										</p>
										<p className="font-medium text-sm mt-2 inline-block">
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
										className="rounded w-[118px] h-auto"
									/>
								</div>
							</article>
						</li>
					))}
				</ul>
			</div>
			<div className="py-8 px-4 flex flex-col">
				<h3 className="text-xl">FIND BY TOPICS</h3>
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
			<div className="py-8 px-4 flex flex-col items-center border-t border-nav-border-color border-solid">
				<h3 className="text-xl">CURRENT FAVORITE</h3>
				<h4 className="mt-2 mb-1 text-md">Track</h4>
				{loadingStates.favoriteTrack && <FadeLoader />}
				<iframe
					onLoad={() => handleLoad("favoriteTrack")}
					title="current favorite song"
					className={trackClass}
					src="https://open.spotify.com/embed/track/7rZgu1GRVc82bB6fCKHxYj?utm_source=generator"
					width="100%"
					height="80"
					frameBorder="0"
					allowFullScreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				></iframe>
				<h4 className="mt-2 mb-1 text-md">Album</h4>
				{loadingStates.favoriteAlbum && <FadeLoader />}
				<iframe
					onLoad={() => handleLoad("favoriteAlbum")}
					title="current favorite album"
					className={albumClass}
					src="https://open.spotify.com/embed/album/4yrjPmonSHiJIHum5TrqEe?utm_source=generator"
					width="100%"
					height="380"
					frameBorder="0"
					allowFullScreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				></iframe>
				<h4 className="mt-2 mb-1 text-md">DJ Set</h4>
				{loadingStates.favoriteDJLiveSet && <FadeLoader />}
				<iframe
					onLoad={() => handleLoad("favoriteDJLiveSet")}
					width="560"
					height="315"
					className={LiveSetClass}
					src="https://www.youtube.com/embed/E9nrKitD05g"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<div className="my-4 flex justify-center">
					<Link
						to={pathTo.favorites}
						state={state}
						className="text-sky-500 underline"
					>
						CHECK OUT MY LIST OF FAVORITES
					</Link>
				</div>
			</div>
		</div>
	);
}
