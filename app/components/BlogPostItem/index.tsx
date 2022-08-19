import { useNavigate } from "@remix-run/react";

import Avatar from "~/components/Avatar";
import Tag from "~/components/Tag";
import type { PostMeta } from "~/utils/posts";
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
		tags = [],
		title,
	} = props;
	const mainTag = tags[0];

	const navigate = useNavigate();

	function handleClick() {
		const state = {
			previousPathname: location.pathname,
		};

		navigate(slug, { state });
	}

	return (
		<li
			className="px-4 py-2 w-full border-b border-nav-border-color border-solid cursor-pointer"
			onClick={handleClick}
		>
			<article className="w-full">
				<div className="flex items-center">
					<Avatar src={authorAvatarUrl} size="sm" />
					<p className="ml-2">{author}</p>
				</div>
				<div className="flex justify-between my-2">
					<p className="pr-[18px] pt-1 font-bold text-lg leading-5">{title}</p>
					<img
						alt="test"
						src={postImageUrl}
						className="rounded w-[100px] h-[62px]"
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
					<Tag className="max-w-[160px]">{mainTag}</Tag>
				</div>
			</article>
		</li>
	);
}
