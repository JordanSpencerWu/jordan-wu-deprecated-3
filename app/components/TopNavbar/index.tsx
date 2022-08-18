import { useState } from "react";
import type { ChangeEvent } from "react";
import { useLocation, useNavigate } from "@remix-run/react";
import { MdArrowBack } from "react-icons/md";
import classNames from "classnames";
// import { MdOutlineWbSunny as LightModeIcon, MdModeNight as DarkModeIcon } from "react-icons/md";

// import useDarkMode, { DARK_MODE, LIGHT_MODE } from "../../hooks/useDarkMode";
import pathToName, { SEARCH_PATH_NAME } from "~/utils/pathToName";

export default function Navbar() {
	// const [darkMode, toggleDarkMode] = useDarkMode();
	const [inputValue, setInputValue] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	// const showLightMode = darkMode === LIGHT_MODE;
	// const showDarkMode = darkMode === DARK_MODE;
	const pathName = pathToName[location.pathname];

	function handleClick() {
		navigate(-1);
	}

	const containerClass = classNames(
		"bg-white z-[1] top-0 left-0 h-[60px] w-full px-[16px] border-b border-nav-border-color border-solid flex items-center justify-between",
		{
			absolute: Boolean(pathName),
		}
	);

	function handleSearch(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	if (pathName === SEARCH_PATH_NAME) {
		return (
			<div className={containerClass}>
				<div className="h-[40px] w-full m-0 p-[16px] flex items-center text-lg font-semibold rounded-lg bg-search-bg-color text-search-color">
					<div className="pr-[12px]">
						<img alt="search icon" src="/search.svg" height="24" width="24" />
					</div>
					<div className="relative flex grow items-center">
						<input
							className="w-full mr-[18px] bg-transparent border-none p-0 m-0 outline-none break-words"
							aria-label="Search input"
							autoCapitalize="none"
							type="text"
							placeholder="Search"
							value={inputValue}
							onChange={handleSearch}
						/>
						<img
							className="absolute right-0 cursor-pointer"
							alt="close icon"
							src="/close.svg"
							height="18"
							width="18"
						/>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={containerClass}>
			{pathName ? (
				<div className="text-slate-900 font-bold text-2xl font-['Open_Sans']">
					{pathName}
				</div>
			) : (
				<MdArrowBack size={24} onClick={handleClick} />
			)}
			{/* <button type="button">
				{showLightMode && <LightModeIcon size={24} className="animate-fade-in" onClick={toggleDarkMode} />}
				{showDarkMode && (
					<DarkModeIcon size={24} animate-fade-in" onClick={toggleDarkMode} />
				)}
			</button> */}
		</div>
	);
}
