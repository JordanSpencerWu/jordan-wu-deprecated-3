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

export default function postFromModule(module: Module) {
	return {
		slug: "posts/" + module.filename.replace(/\.mdx?$/, ""),
		...module.attributes.meta,
	};
}
