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
		<nav className="bg-white dark:bg-slate-700 fixed bottom-0 left-0h-16 w-full border-t border-slate-400 dark:border-none">
			<ol className="w-full flex justify-around items-center h-14">
				{NAVBAR_LINKS.map((link) => {
					const { ActiveIcon, Icon, to } = link;
					const isActive = location.pathname === link.to;

					return (
						<Link key={to} to={to} className="dark:text-white">
							{isActive ? <ActiveIcon size={24} /> : <Icon size={24} />}
						</Link>
					);
				})}
			</ol>
		</nav>
	);
}
