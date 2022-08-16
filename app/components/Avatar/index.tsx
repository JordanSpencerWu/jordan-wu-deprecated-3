import { ImgHTMLAttributes } from "react";
import classNames from "classnames";

export default function Avatar(props: ImgHTMLAttributes<HTMLImageElement>) {
	const { height: height, width: width } = props;

	const imgClass = classNames("rounded-full", `w-[${width}px]`, `h-[${height}]px`);

	return <img alt="author avatar" className={imgClass} {...props} />;
}