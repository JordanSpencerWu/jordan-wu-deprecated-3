import { useNavigate } from "@remix-run/react";
import dayjs from "dayjs";

import Avatar from "~/components/Avatar";
import type { PostMeta } from "~/utils/postFromModule";

type Props = PostMeta;

function displayDate(date: string) {
	const now = dayjs();
	const postPublished = dayjs(date);
	const isPublishedThisYear =
		postPublished.format("YYYY") == now.format("YYYY");

	if (isPublishedThisYear) {
		return postPublished.format("MMM D");
	} else {
		return postPublished.format("MMM D, YYYY");
	}
}

export default function BlogPostItem(props: Props) {
	const {
		author,
		authorAvatar,
		postImage,
		published,
		readingTimeInMinute,
		slug,
		title,
	} = props;

	const navigate = useNavigate();

	function handleClick() {
		navigate(slug, { state: { previousPathname: location.pathname } });
	}

	return (
		<li
			className="p-4 w-full border-b border-nav-border-color border-solid cursor-pointer"
			onClick={handleClick}
		>
			<article className="w-full">
				<div className="flex items-center">
					<Avatar src={authorAvatar} height="24" width="24" />
					<p className="ml-2">{author}</p>
				</div>
				<div className="flex justify-between mt-1">
					<p className="pr-[18px] pt-1 font-bold text-lg leading-5">{title}</p>
					<img
						alt="test"
						src={postImage}
						className="rounded w-[100px] h-[62px]"
					/>
				</div>
				<p className="font-medium text-sm mt-1">
					<time
						className="after:content-['\00b7'] after:text-[18px] after:align-middle after:mx-[2px]"
						dateTime="1992-07-12"
					>
						{displayDate(published)}
					</time>
					{readingTimeInMinute} min read
				</p>
			</article>
		</li>
	);
}
