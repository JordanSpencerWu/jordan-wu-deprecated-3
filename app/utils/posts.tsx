import uniq from "uniq";

import * as post_1 from "~/routes/posts/how-to-create-your-own-website-using-remix.mdx";
import * as post_2 from "~/routes/posts/learning-sound-design-with-syntorial.mdx";
import * as post_3 from "~/routes/posts/harmonic-mixing-with-mixed-in-key.mdx";
import * as post_4 from "~/routes/posts/buying-tracks-on-beatport.mdx";
import * as post_5 from "~/routes/posts/listening-to-dj-sets-on-1001-tracklists.mdx";
import * as post_6 from "~/routes/posts/using-warp-as-my-terminal.mdx";
import * as post_7 from "~/routes/posts/learning-chord-and-melody-with-hooktheory.mdx";

type Meta = {
	description: string;
	title: string;
};

type Attributes = {
	meta: Meta;
	postImageUrl: string;
	published: string;
	readingTimeInMinute: number;
	tags: string[];
};

type Module = {
	filename: string;
	attributes: Attributes;
};

interface PostMeta extends Attributes {
	slug: string;
}

export type { PostMeta };

function postFromModule(module: Module): PostMeta {
	return {
		slug: "/posts/" + module.filename.replace(/\.mdx?$/, ""),
		...module.attributes,
	};
}

const ALL_POSTS = [
	postFromModule(post_1),
	postFromModule(post_2),
	postFromModule(post_3),
	postFromModule(post_4),
	postFromModule(post_5),
	postFromModule(post_6),
	postFromModule(post_7),
].reverse();

const ALL_POST_TAGS = ALL_POSTS.reduce(
	(acc: string[], post: PostMeta) => acc.concat(post.tags),
	[]
);

export const TAGS = uniq(ALL_POST_TAGS).sort();

export default ALL_POSTS;
