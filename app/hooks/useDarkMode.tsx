import { useEffect, useState } from "react";

export const THEME = "theme";
export const DARK_MODE = "dark";
export const LIGHT_MODE = "light";

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState<string>(DARK_MODE);

	useEffect(() => {
		if (
			localStorage.theme === DARK_MODE ||
			(!(THEME in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setDarkMode(DARK_MODE);
		} else {
			setDarkMode(LIGHT_MODE);
		}
	}, []);

	const toggleDarkMode = () => {
		if (darkMode === DARK_MODE) {
			document.documentElement.classList.remove(DARK_MODE);
			localStorage.theme = LIGHT_MODE;
			setDarkMode(LIGHT_MODE);
		} else {
			document.documentElement.classList.add(DARK_MODE);
			localStorage.theme = DARK_MODE;
			setDarkMode(DARK_MODE);
		}
	};

	return [darkMode, toggleDarkMode] as const;
};

export default useDarkMode;
