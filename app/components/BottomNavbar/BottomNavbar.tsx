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
		to: pathTo.home,
	},
	{
		ActiveIcon: SearchIcon,
		Icon: OutlineSearchIcon,
		to: pathTo.search,
	},
	{
		ActiveIcon: PlaylistIcon,
		Icon: OutlinePlaylistIcon,
		to: pathTo.playlist,
	},
	{
		ActiveIcon: AboutIcon,
		Icon: OutlineAboutIcon,
		to: pathTo.about,
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
		<nav className="bg-white z-[1] fixed bottom-0 left-0 h-[60px] w-full border-t border-nav-border-color border-solid md:hidden">
			<ol className="w-full h-full flex justify-around items-center">
				{NAVBAR_LINKS.map((link) => {
					const { ActiveIcon, Icon, to } = link;
					const isActive =
						location.pathname === link.to || previousPathname === link.to;

					return (
						<NavLink key={to} to={`${to}?${searchParams.toString()}`}>
							{isActive ? <ActiveIcon size={24} /> : <Icon size={24} />}
						</NavLink>
					);
				})}
			</ol>
		</nav>
	);
}
