import { useLocation, useNavigate } from "@remix-run/react";
import { MdArrowBack } from "react-icons/md";
import classNames from "classnames";
// import { MdOutlineWbSunny as LightModeIcon, MdModeNight as DarkModeIcon } from "react-icons/md";

// import useDarkMode, { DARK_MODE, LIGHT_MODE } from "../../hooks/useDarkMode";
import pathToName from "~/utils/pathToName";

export default function Navbar() {
	// const [darkMode, toggleDarkMode] = useDarkMode();
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
