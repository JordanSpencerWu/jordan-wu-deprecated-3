import type { ImgHTMLAttributes } from "react";
import classNames from "classnames";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	size?: "lg" | "sm";
}

export default function Avatar(props: Props) {
	const { className, size = "sm", ...restProps } = props;

	const imgClass = classNames(
		"rounded-full",
		"object-contain",
		{
			"h-16 w-16": size === "lg",
			"h-8 w-8": size === "sm",
		},
		className
	);

	return <img alt="author avatar" className={imgClass} {...restProps} />;
}
