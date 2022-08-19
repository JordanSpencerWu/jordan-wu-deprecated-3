import Tag from "~/components/Tag";
import classNames from "classnames";

type Props = {
	tags: string[];
	className?: string;
};

export default function BlogPostTags(props: Props) {
	const { className, tags } = props;

	const containerClass = classNames("inline-flex flex-wrap gap-2", className);

	return (
		<div className={containerClass}>
			{Object.values(tags).map((tag) => (
				<Tag key={tag}>{tag}</Tag>
			))}
		</div>
	);
}
