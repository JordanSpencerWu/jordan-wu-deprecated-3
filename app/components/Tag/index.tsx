import type { DOMAttributes, ReactNode } from "react";
import classNames from "classnames";

interface Props extends DOMAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}

export default function Tag(props: Props) {
	const { children, className, ...restProps } = props;

	const containerClass = classNames(
		"bg-[#e4e4e4] text-[#727272] h-[24px] inline-block text-[13px] px-[8px] leading-6 rounded-2xl capitalize whitespace-nowrap",
		className
	);

	return <div className={containerClass}>{children}</div>;
}
