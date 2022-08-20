import { useNavigate } from "@remix-run/react";
import { useSpring, animated } from "react-spring";
import { useSearchParams } from "@remix-run/react";

import Avatar from "~/components/Avatar";
import Tag from "~/components/Tag";
import type { PostMeta } from "~/utils/posts";
import displayDate from "~/utils/displayDate";

type Props = PostMeta;

const FADE_IN_SPRING_PROPS = {
	to: { opacity: 1 },
	from: { opacity: 0 },
};

export default function BlogPostItem(props: Props) {
	const {
		author,
		authorAvatarUrl,
		postImageUrl,
		published,
		readingTimeInMinute,
		slug,
		tags = [],
		title,
	} = props;
	const firstTag = tags[0];
	const hasMoreTags = tags.length > 1;

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
			className="px-4 py-2 w-full border-b border-nav-border-color border-solid cursor-pointer"
			onClick={handleClick}
			style={fadeInStyles}
		>
			<article className="w-full">
				<div className="flex items-center">
					<Avatar src={authorAvatarUrl} size="sm" />
					<p className="ml-2">{author}</p>
				</div>
				<div className="flex justify-between my-2">
					<p className="max-w-7/10 pt-1 font-bold text-lg leading-5">{title}</p>
					<img
						alt="test"
						src={postImageUrl}
						className="rounded w-3/10 h-[62px]"
					/>
				</div>
				<div className="flex items-center">
					<p className="font-medium text-sm mt-1 inline-block after:content-['\00b7'] after:text-[18px] after:align-middle after:mx-[2px]">
						<time
							className="after:content-['\00b7'] after:text-[18px] after:align-middle after:mx-[2px]"
							dateTime={published}
						>
							{displayDate(published)}
						</time>
						{readingTimeInMinute} min read
					</p>
					<div className="inline-flex flex-wrap gap-1 text-[13px] leading-6">
						<Tag className="max-w-[160px]">{firstTag}</Tag>
						{hasMoreTags && (
							<Tag className="max-w-[160px]">{`+ ${tags.length - 1}`}</Tag>
						)}
					</div>
				</div>
			</article>
		</animated.li>
	);
}
