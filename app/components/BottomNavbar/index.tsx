import { Link, useLocation } from "@remix-run/react";
import { AiFillHome as HomeIcon, AiOutlineHome as OutlineHomeIcon } from "react-icons/ai";
import { CgSearch as OutlineSearchIcon } from "react-icons/cg";
import { FaSearch as SearchIcon } from "react-icons/fa";
import {
	MdLibraryMusic as PlaylistIcon,
	MdOutlineLibraryMusic as OutlinePlaylistIcon,
	MdInfo as AboutIcon,
	MdInfoOutline as OutlineAboutIcon,
} from "react-icons/md";

import pathTo from "../../utils/pathTo";

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

export default function BottomNavbar() {
	const location = useLocation();

	return (
		<nav className="z-[1] fixed bottom-0 left-0 h-[60px] w-full bg-white border-t border-nav-border-color border-solid">
			<ol className="w-full h-full flex justify-around items-center">
				{NAVBAR_LINKS.map((link) => {
					const { ActiveIcon, Icon, to } = link;
					const isActive = location.pathname === link.to;

					return (
						<Link key={to} to={to}>
							{isActive ? <ActiveIcon size={24} /> : <Icon size={24} />}
						</Link>
					);
				})}
			</ol>
		</nav>
	);
}
