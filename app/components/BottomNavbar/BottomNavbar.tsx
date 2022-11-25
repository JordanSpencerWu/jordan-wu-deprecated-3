import {
	AiFillHome as HomeIcon,
	AiOutlineHome as OutlineHomeIcon,
} from "react-icons/ai";
import { CgSearch as OutlineSearchIcon } from "react-icons/cg";
import { FaSearch as SearchIcon } from "react-icons/fa";
import {
	MdLibraryMusic as PlaylistIcon,
	MdOutlineLibraryMusic as OutlinePlaylistIcon,
	MdInfo as AboutIcon,
	MdInfoOutline as OutlineAboutIcon,
} from "react-icons/md";
import { NavLink, useLocation, useSearchParams } from "@remix-run/react";

import pathTo from "~/utils/pathTo";

const NAVBAR_LINKS = [
	{
		ActiveIcon: HomeIcon,
		Icon: OutlineHomeIcon,
		pathName: pathTo.home,
	},
	{
		ActiveIcon: SearchIcon,
		Icon: OutlineSearchIcon,
		pathName: pathTo.search,
	},
	{
		ActiveIcon: PlaylistIcon,
		Icon: OutlinePlaylistIcon,
		pathName: pathTo.playlist,
	},
	{
		ActiveIcon: AboutIcon,
		Icon: OutlineAboutIcon,
		pathName: pathTo.about,
	},
];

type LocationState = {
	previousPathname?: string;
};

export default function BottomNavbar() {
	const location = useLocation();
	const [searchParams] = useSearchParams();

	const state = location?.state as LocationState;
	const previousPathname = state?.previousPathname;

	return (
		<nav className="bg-white dark:bg-dark-navbar-color z-[1] fixed bottom-0 left-0 h-[60px] w-full border-t border-nav-border-color border-solid dark:border-none md:hidden">
			<ol className="w-full h-full flex justify-around items-center">
				{NAVBAR_LINKS.map((link) => {
					const { ActiveIcon, Icon, pathName } = link;
					const isActive =
						location.pathname === pathName() || previousPathname === pathName();

					return (
						<NavLink
							key={pathName()}
							className="dark:text-white"
							to={pathName(searchParams.toString())}
						>
							{isActive ? <ActiveIcon size={24} /> : <Icon size={24} />}
						</NavLink>
					);
				})}
			</ol>
		</nav>
	);
}
