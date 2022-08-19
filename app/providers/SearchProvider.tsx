import { createContext, useState } from "react";
import { useSearchParams } from "@remix-run/react";

import type { ReactNode, Dispatch, SetStateAction } from "react";

type Props = {
	children: ReactNode;
};

const DEFAULT_STATE: [string, Dispatch<SetStateAction<string>>] = [
	"",
	(_) => {},
];

export const SearchContext = createContext(DEFAULT_STATE);

const { Provider } = SearchContext;

const SearchProvider = (props: Props) => {
	const { children } = props;

	const [searchParams] = useSearchParams();
	const searchTerm = searchParams.get("q") || "";
	const [state, setState] = useState(searchTerm);

	return <Provider value={[state, setState]}>{children}</Provider>;
};

SearchProvider.context = SearchContext;

export default SearchProvider;
