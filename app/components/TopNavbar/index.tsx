import { Link } from "remix";
import { MdOutlineWbSunny as LightModeIcon, MdModeNight as DarkModeIcon } from "react-icons/md";

import useDarkMode, { DARK_MODE, LIGHT_MODE } from "../../hooks/useDarkMode";
import pathTo from "../../utils/pathTo";

export default function Navbar() {
	const [darkMode, toggleDarkMode] = useDarkMode();
	const showLightMode = darkMode === LIGHT_MODE;
	const showDarkMode = darkMode === DARK_MODE;

	return (
		<div className="relative flex justify-center items-center h-16">
			<Link className="text-slate-900 dark:text-white text-3xl font-bold" to={pathTo.home}>
				Jordan Wu
			</Link>
			{showLightMode && (
				<LightModeIcon size={24} className="absolute right-2 animate-fade-in" onClick={toggleDarkMode} />
			)}
			{showDarkMode && (
				<DarkModeIcon
					size={24}
					className="dark:text-white absolute right-2 animate-fade-in "
					onClick={toggleDarkMode}
				/>
			)}
		</div>
	);
}
