import BlogPostTags from "~/components/BlogPostTags";
import displayDate from "~/utils/displayDate";
import { useNavigate } from "@remix-run/react";

import type { PostMeta } from "~/utils/posts";

export default function BlogPostHeading(props: PostMeta) {
	const navigate = useNavigate();
	const { meta, published, postImageUrl, tags } = props;
	const { title } = meta;
	const longForm = true;

	function handleClick() {
		navigate(-1);
	}

	return (
		<div className="flex flex-col">
			<button
				className="hidden md:flex w-fit mb-4 underline text-left"
				onClick={handleClick}
			>
				Back
			</button>
			<h1 className="!m-0 text-3xl">{title}</h1>
			<p className="font-medium text-base m-0">
				Published on{" "}
				<time dateTime={published}>{displayDate(published, longForm)}</time>
			</p>
			<BlogPostTags className="my-4" tags={tags} />
			<img
				alt="blog post"
				src={postImageUrl}
				className="mt-6 mb-0 max-h-[400px] object-contain w-full rounded"
			/>
		</div>
	);
}
