import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useSpring, animated } from "react-spring";
import { useLocation } from "@remix-run/react";

import Navbar from "~/components/TopNavbar";
import BottomNavbar from "~/components/BottomNavbar";

type Props = {
	children: ReactNode;
};

const FADE_IN_SPRING_PROPS = {
	to: { opacity: 1 },
	from: { opacity: 0 },
};

export default function Layout(props: Props) {
	const { children } = props;

	const [fadeInStyles, springApi] = useSpring(() => FADE_IN_SPRING_PROPS);
	const location = useLocation();
	const [pathname, setPathname] = useState(location.pathname);
	const currentPathName = location.pathname;

	useEffect(() => {
		if (currentPathName !== pathname) {
			springApi.start(FADE_IN_SPRING_PROPS);
			setPathname(location.pathname);
		}
	}, [currentPathName, springApi]);

	return (
		<>
			<animated.div
				style={fadeInStyles}
				className="w-full flex flex-col flex-1"
			>
				<Navbar />
				{children}
			</animated.div>
			<BottomNavbar />
		</>
	);
}
