import { Link, useLocation } from "@remix-run/react";
// import { MdOutlineWbSunny as LightModeIcon, MdModeNight as DarkModeIcon } from "react-icons/md";

// import useDarkMode, { DARK_MODE, LIGHT_MODE } from "../../hooks/useDarkMode";
import pathTo from "../../utils/pathTo";
import pathToName from "../../utils/pathToName";

export default function Navbar() {
	// const [darkMode, toggleDarkMode] = useDarkMode();
	const location = useLocation();

	// const showLightMode = darkMode === LIGHT_MODE;
	// const showDarkMode = darkMode === DARK_MODE;
	const pathName = pathToName[location.pathname];

	return (
		<div className="fixed top-0 left-0 h-[60px] w-full px-2 border-b border-nav-border-color border-solid flex items-center justify-between">
			<Link className="text-slate-900 font-bold text-3xl" to={pathTo.home}>
				{pathName}
			</Link>
			{/* <button type="button">
				{showLightMode && <LightModeIcon size={24} className="animate-fade-in" onClick={toggleDarkMode} />}
				{showDarkMode && (
					<DarkModeIcon size={24} animate-fade-in" onClick={toggleDarkMode} />
				)}
			</button> */}
		</div>
	);
}
