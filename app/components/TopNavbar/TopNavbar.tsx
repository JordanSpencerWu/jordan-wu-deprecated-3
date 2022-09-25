import { MdArrowBack } from "react-icons/md";
import {
	Link,
	NavLink,
	useLocation,
	useNavigate,
	useSearchParams,
} from "@remix-run/react";
// import { MdOutlineWbSunny as LightModeIcon, MdModeNight as DarkModeIcon } from "react-icons/md";

// import useDarkMode, { DARK_MODE, LIGHT_MODE } from "../../hooks/useDarkMode";
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
	// const [darkMode, toggleDarkMode] = useDarkMode();
	const location = useLocation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	// const showLightMode = darkMode === LIGHT_MODE;
	// const showDarkMode = darkMode === DARK_MODE;
	const pathName = pathToName[location.pathname];

	function handleClick() {
		navigate(-1);
	}

	const containerClass =
		"bg-white z-[1] top-0 left-0 h-[60px] w-full px-[16px] border-b border-nav-border-color border-solid flex items-center justify-between absolute";

	let mobileContent = pathName ? (
		<h1 className="text-slate-900 font-bold text-2xl font-['Open_Sans'] md:hidden">
			{pathName}
		</h1>
	) : (
		<MdArrowBack
			className="cursor-pointer md:hidden"
			size={24}
			onClick={handleClick}
		/>
	);

	if (pathName === SEARCH_PATH_NAME) {
		mobileContent = <SearchBar className="md:hidden" />;
	}

	return (
		<div className={containerClass}>
			{mobileContent}
			<Link
				to={pathTo.home(searchParams.toString())}
				className="hidden text-slate-900 font-bold text-2xl font-['Open_Sans'] md:flex"
			>
				{WEBSITE_NAME}
			</Link>
			<div className="hidden md:flex text-lg">
				{NAVBAR_LINKS.map((link) => (
					<NavLink
						key={link.name}
						className="m-1 p-1"
						to={link.pathName(searchParams.toString())}
					>
						{link.name}
					</NavLink>
				))}
			</div>
			{/* <button type="button">
				{showLightMode && <LightModeIcon size={24} className="animate-fade-in" onClick={toggleDarkMode} />}
				{showDarkMode && (
					<DarkModeIcon size={24} animate-fade-in" onClick={toggleDarkMode} />
				)}
			</button> */}
		</div>
	);
}
