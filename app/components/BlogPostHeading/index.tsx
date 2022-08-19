import type { PostMeta } from "~/utils/posts";

import displayDate from "~/utils/displayDate";
import Avatar from "~/components/Avatar";

export default function BlogPostHeading(props: PostMeta) {
	const { authorAvatarUrl, author, published, readingTimeInMinute } = props;

	return (
		<div className="flex">
			<Avatar src={authorAvatarUrl} size="lg" className="m-0" />
			<div className="pl-2 flex flex-col justify-center">
				<p className="text-xl m-0">{author}</p>
				<p className="font-medium text-sm m-0">
					<time
						className="m-0 after:content-['\00b7'] after:text-[18px] after:align-middle after:mx-[2px]"
						dateTime={published}
					>
						{displayDate(published)}
					</time>
					{readingTimeInMinute} min read
				</p>
			</div>
		</div>
	);
}
