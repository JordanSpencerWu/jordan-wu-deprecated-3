import { useEffect, useState } from "react";

const LIGHT_MODE = "light";

export const DARK_MODE = "dark";
export const THEME = "theme";

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	useEffect(() => {
		if (
			localStorage.theme === DARK_MODE ||
			(!(THEME in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	const toggleDarkMode = () => {
		if (darkMode) {
			localStorage.theme = LIGHT_MODE;
			document.documentElement.classList.remove(DARK_MODE);
			setDarkMode(false);
		} else {
			localStorage.theme = DARK_MODE;
			document.documentElement.classList.add(DARK_MODE);
			setDarkMode(true);
		}
	};

	return [darkMode, toggleDarkMode] as const;
};

export default useDarkMode;
