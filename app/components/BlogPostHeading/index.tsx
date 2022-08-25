import type { PostMeta } from "~/utils/posts";

import BlogPostTags from "~/components/BlogPostTags";
import displayDate from "~/utils/displayDate";

export default function BlogPostHeading(props: PostMeta) {
	const { title, published, postImageUrl, tags } = props;
	const longForm = true;

	return (
		<div className="flex flex-col">
			<h2 className="m-0">{title}</h2>
			<p className="font-medium text-base m-0">
				Published on{" "}
				<time dateTime={published}>{displayDate(published, longForm)}</time>
			</p>
			<BlogPostTags className="mt-4" tags={tags} />
			<img
				src={postImageUrl}
				className="mt-6 mb-0 object-contain w-full rounded"
			/>
		</div>
	);
}
