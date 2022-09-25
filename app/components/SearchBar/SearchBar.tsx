import { useContext, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "@remix-run/react";
import { BsSearch } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import classNames from "classnames";

import type { ChangeEvent } from "react";

import pathToName, { SEARCH_PATH_NAME } from "~/utils/pathToName";
import pathTo from "~/utils/pathTo";
import { SearchContext } from "~/providers/SearchProvider";

type Props = {
	className?: string;
};

export default function SearchBar(props: Props) {
	const { className = "" } = props;
	const [searchTerm, setSearchTerm] = useContext(SearchContext);
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const navigate = useNavigate();

	const showCloseIcon = searchTerm !== "";
	const pathName = pathToName[location.pathname];

	useEffect(() => {
		if (pathName === SEARCH_PATH_NAME) {
			const searchTerm = searchParams.get("q") || "";
			setSearchTerm(searchTerm);
		}
	}, [pathName]);

	function handleClearSearch() {
		searchParams.delete("q");
		navigate(pathTo.search(searchParams.toString()), {
			replace: true,
		});
		setSearchTerm("");
	}

	function handleSearch(event: ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;

		if (value) {
			searchParams.set("q", value);
		} else {
			searchParams.delete("q");
		}

		navigate(pathTo.search(searchParams.toString()), {
			replace: true,
		});
		setSearchTerm(value);
	}

	const containerClass = classNames(
		"h-[40px] w-full m-0 p-[16px] flex items-center text-lg font-semibold rounded-lg bg-[#edeced] text-[#838383]",
		className
	);

	return (
		<div className={containerClass}>
			<BsSearch size={18} fill="#838383" />
			<div className="pl-[12px] relative flex grow items-center">
				<input
					className="w-full mr-[18px] bg-transparent border-none p-0 m-0 outline-none break-words"
					aria-label="Search input"
					autoCapitalize="none"
					type="text"
					placeholder="Search"
					value={searchTerm}
					onChange={handleSearch}
				/>
				{showCloseIcon && (
					<MdClose
						fill="#838383"
						className="absolute right-0 cursor-pointer"
						size={18}
						onClick={handleClearSearch}
					/>
				)}
			</div>
		</div>
	);
}
