type searchParamsFunction = (searchParams?: string) => string;
function getPathname(pathName: string): searchParamsFunction {
	return (searchParams = ""): string => {
		if (searchParams == "") {
			return pathName;
		}
		return `${pathName}?${searchParams}`;
	};
}

export default {
	about: getPathname("/about"),
	favorites: getPathname("/favorites"),
	home: getPathname("/"),
	playlist: getPathname("/playlist"),
	search: getPathname("/search"),
};
