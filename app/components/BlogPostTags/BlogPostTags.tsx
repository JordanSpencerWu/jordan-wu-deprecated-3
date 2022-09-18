import classNames from "classnames";

import Tag from "~/components/Tag";

type Props = {
	tags: string[];
	className?: string;
};

export default function BlogPostTags(props: Props) {
	const { className, tags } = props;

	const containerClass = classNames(
		"inline-flex flex-wrap gap-2 text-[13px] leading-6 ",
		className
	);

	return (
		<div className={containerClass}>
			{Object.values(tags).map((tag) => (
				<Tag key={tag} clickable inPost isSingleFilter>
					{tag}
				</Tag>
			))}
		</div>
	);
}
