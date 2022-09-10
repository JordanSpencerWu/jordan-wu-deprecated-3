import { useNavigate, useSearchParams, useLocation } from "@remix-run/react";
import { useSpring, animated } from "react-spring";

import Tag from "~/components/Tag";
import displayDate from "~/utils/displayDate";

import type { PostMeta } from "~/utils/posts";

type Props = PostMeta;

const FADE_IN_SPRING_PROPS = {
	to: { opacity: 1 },
	from: { opacity: 0 },
};

export default function BlogPostItem(props: Props) {
	const {
		postImageUrl,
		published,
		readingTimeInMinute,
		slug,
		tags = [],
		title,
	} = props;

	const location = useLocation();
	const [searchParams] = useSearchParams();
	const [fadeInStyles] = useSpring(() => FADE_IN_SPRING_PROPS);
	const navigate = useNavigate();

	function handleClick() {
		const state = {
			previousPathname: location.pathname,
		};

		navigate(`${slug}?${searchParams.toString()}`, { state });
	}

	return (
		<animated.li
			className="w-full border-y border-nav-border-color border-solid cursor-pointer"
			onClick={handleClick}
			style={fadeInStyles}
		>
			<article className="w-full py-2">
				<div className="px-4">
					<div className="flex justify-between mt-2">
						<div>
							<p className="max-w-7/10 pt-1 font-bold text-lg leading-5">
								{title}
							</p>
							<p className="font-medium text-sm my-2 inline-block">
								<time
									className="after:content-['\00b7'] after:text-[18px] after:align-middle after:mx-[2px]"
									dateTime={published}
								>
									{displayDate(published)}
								</time>
								{readingTimeInMinute} min read
							</p>
						</div>
						<img
							alt="blog post"
							src={postImageUrl}
							className="rounded w-3/10 h-[62px]"
						/>
					</div>
				</div>
				<div className="m-2 inline-flex flex-wrap gap-x-1 gap-y-2 text-[13px] leading-6">
					{tags.map((tag) => (
						<Tag key={tag} className="max-w-[160px]">
							{tag}
						</Tag>
					))}
				</div>
			</article>
		</animated.li>
	);
}
