import uniq from "uniq";

import * as post_1 from "~/routes/posts/how-to-create-your-own-website-using-remix.mdx";
import * as post_2 from "~/routes/posts/learning-sound-design-with-syntorial.mdx";
import * as post_3 from "~/routes/posts/harmonic-mixing-with-mixed-in-key.mdx";

type Meta = {
	description: string;
	postImageUrl: string;
	published: string;
	readingTimeInMinute: number;
	tags: string[];
	title: string;
};

type Attributes = {
	meta: Meta;
};

type Module = {
	filename: string;
	attributes: Attributes;
};

interface PostMeta extends Meta {
	slug: string;
}

export type { PostMeta };

function postFromModule(module: Module): PostMeta {
	return {
		slug: "/posts/" + module.filename.replace(/\.mdx?$/, ""),
		...module.attributes.meta,
	};
}

const ALL_POSTS = [
	postFromModule(post_1),
	postFromModule(post_2),
	postFromModule(post_3),
].reverse();

const ALL_POST_TAGS = ALL_POSTS.reduce(
	(acc: string[], post: PostMeta) => acc.concat(post.tags),
	[]
);

export const TAGS = uniq(ALL_POST_TAGS).sort();

export default ALL_POSTS;
