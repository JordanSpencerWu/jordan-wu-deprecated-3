import { useNavigate } from "@remix-run/react";

import Avatar from "~/components/Avatar";
import type { PostMeta } from "~/utils/postFromModule";
import displayDate from "~/utils/displayDate";

type Props = PostMeta;

export default function BlogPostItem(props: Props) {
	const {
		author,
		authorAvatarUrl,
		postImageUrl,
		published,
		readingTimeInMinute,
		slug,
		title,
	} = props;

	const navigate = useNavigate();

	function handleClick() {
		const state = {
			previousPathname: location.pathname,
		};

		navigate(slug, { state });
	}

	return (
		<li
			className="p-4 w-full border-b border-nav-border-color border-solid cursor-pointer"
			onClick={handleClick}
		>
			<article className="w-full">
				<div className="flex items-center">
					<Avatar src={authorAvatarUrl} size="sm" />
					<p className="ml-2">{author}</p>
				</div>
				<div className="flex justify-between mt-1">
					<p className="pr-[18px] pt-1 font-bold text-lg leading-5">{title}</p>
					<img
						alt="test"
						src={postImageUrl}
						className="rounded w-[100px] h-[62px]"
					/>
				</div>
				<p className="font-medium text-sm mt-1">
					<time
						className="after:content-['\00b7'] after:text-[18px] after:align-middle after:mx-[2px]"
						dateTime={published}
					>
						{displayDate(published)}
					</time>
					{readingTimeInMinute} min read
				</p>
			</article>
		</li>
	);
}
