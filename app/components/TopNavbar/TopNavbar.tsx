import { MdArrowBack } from "react-icons/md";
import {
	Link,
	NavLink,
	useLocation,
	useNavigate,
	useSearchParams,
} from "@remix-run/react";
import {
	MdOutlineWbSunny as LightModeIcon,
	MdModeNight as DarkModeIcon,
} from "react-icons/md";

import useDarkMode, { DARK_MODE, LIGHT_MODE } from "../../hooks/useDarkMode";
import pathToName, { WEBSITE_NAME, SEARCH_PATH_NAME } from "~/utils/pathToName";
import pathTo from "~/utils/pathTo";
import SearchBar from "~/components/SearchBar";

const NAVBAR_LINKS = [
	{
		name: pathToName[pathTo.home()],
		pathName: pathTo.home,
	},
	{
		name: pathToName[pathTo.search()],
		pathName: pathTo.search,
	},
	{
		name: pathToName[pathTo.playlist()],
		pathName: pathTo.playlist,
	},
	{
		name: pathToName[pathTo.about()],
		pathName: pathTo.about,
	},
];

export default function TopNavbar() {
	const [darkMode, toggleDarkMode] = useDarkMode();
	const location = useLocation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const showLightMode = darkMode === LIGHT_MODE;
	const showDarkMode = darkMode === DARK_MODE;
	const pathName = pathToName[location.pathname];

	function handleClick() {
		navigate(-1);
	}

	const containerClass =
		"absolute bg-white dark:bg-dark-navbar-color z-[1] top-0 left-0 h-[60px] w-full px-[16px] border-b border-nav-border-color border-solid dark:border-none flex items-center justify-between";

	const darkmodeButton = (
		<button type="button">
			{showLightMode && (
				<LightModeIcon
					size={24}
					className="dark:text-white animate-fade-in"
					onClick={toggleDarkMode}
				/>
			)}
			{showDarkMode && (
				<DarkModeIcon
					size={24}
					className="dark:text-white animate-fade-in"
					onClick={toggleDarkMode}
				/>
			)}
		</button>
	);

	let mobileContent = (
		<div className="w-full flex items-center justify-between md:hidden">
			{pathName ? (
				<header
					role="banner"
					className="text-slate-900 dark:text-white font-bold text-3xl font-['Open_Sans']"
				>
					{pathName}
				</header>
			) : (
				<MdArrowBack
					className="dark:text-white cursor-pointer"
					size={24}
					onClick={handleClick}
				/>
			)}
			{darkmodeButton}
		</div>
	);

	if (pathName === SEARCH_PATH_NAME) {
		mobileContent = <SearchBar className="md:hidden" />;
	}

	return (
		<div className={containerClass}>
			{mobileContent}
			<header role="banner" className="hidden md:flex">
				<Link
					to={pathTo.home(searchParams.toString())}
					className="text-slate-900 dark:text-white font-bold text-2xl font-['Open_Sans']"
				>
					{WEBSITE_NAME}
				</Link>
			</header>
			<nav className="hidden md:flex text-lg">
				{NAVBAR_LINKS.map((link) => (
					<NavLink
						key={link.name}
						className="dark:text-white m-1 p-1"
						to={link.pathName(searchParams.toString())}
					>
						{link.name}
					</NavLink>
				))}
				{darkmodeButton}
			</nav>
		</div>
	);
}
