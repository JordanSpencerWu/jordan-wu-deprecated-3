import { useContext } from "react";
import { useSearchParams, useNavigate } from "@remix-run/react";
import classNames from "classnames";

import type { MouseEvent, DOMAttributes } from "react";

import pathTo from "~/utils/pathTo";
import { SearchContext } from "~/providers/SearchProvider";

interface Props extends DOMAttributes<HTMLElement> {
	active?: boolean;
	children: string;
	className?: string;
	clickable?: boolean;
	inPost?: boolean;
	isSingleFilter?: boolean;
}

export default function Tag(props: Props) {
	const {
		active = false,
		children,
		className,
		clickable = false,
		inPost = false,
		isSingleFilter = false,
		...restProps
	} = props;

	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const [, setSearchTerm] = useContext(SearchContext);

	const containerClass = classNames(
		"bg-[#e4e4e4] text-[#727272] h-[24px] inline-block px-[8px] rounded-2xl capitalize whitespace-nowrap",
		{
			"bg-[#bcbcbc]": active,
			"text-[#2f2f2f]": active,
			"cursor-pointer": clickable,
		},
		className
	);

	function handleClick(event: MouseEvent<HTMLElement>) {
		event.preventDefault();

		if (clickable) {
			let filters = searchParams.get("filters")?.split(",") || [];

			if (active) {
				const index = filters.indexOf(children);

				if (index > -1) {
					filters.splice(index, 1);
				}
			} else {
				filters.push(children);
			}

			let stringFilters =
				filters.length > 1 ? filters.join(",") : filters.toString();
			if (isSingleFilter) {
				stringFilters = children;
			}

			if (stringFilters) {
				searchParams.set("filters", stringFilters);
			} else {
				searchParams.delete("filters");
			}

			if (inPost) {
				const state = {
					tag: children,
				};
				setSearchTerm("");
				navigate(`${pathTo.search}?${searchParams.toString()}`, {
					state,
				});
			} else {
				navigate(`${pathTo.search}?${searchParams.toString()}`, {
					replace: true,
				});
			}
		}
	}

	return (
		<div className={containerClass} onClick={handleClick} {...restProps}>
			{children}
		</div>
	);
}
