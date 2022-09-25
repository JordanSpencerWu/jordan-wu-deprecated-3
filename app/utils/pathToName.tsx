import pathTo from "~/utils/pathTo";

export const SEARCH_PATH_NAME = "Search";
export const WEBSITE_NAME = "jordanwu.xyz";

export default {
	[pathTo.about()]: "About",
	[pathTo.home()]: "Home",
	[pathTo.playlist()]: "Playlist",
	[pathTo.search()]: SEARCH_PATH_NAME,
};
