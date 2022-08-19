import * as post_1 from "~/routes/posts/what-is-syntorial.mdx";
import * as post_2 from "~/routes/posts/how-to-add-mathjax-to-your-gatsby-website.mdx";
import * as post_3 from "~/routes/posts/creating-my-website-with-remix.mdx";

type Meta = {
	author: string;
	authorAvatarUrl: string;
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

export default ALL_POSTS;
