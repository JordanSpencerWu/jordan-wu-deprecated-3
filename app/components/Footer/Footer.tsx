import classNames from "classnames";

export default function Footer() {
	const todayDate = new Date();
	const thisYear = todayDate.getFullYear();
	const containerClass = classNames(
		"hidden md:flex bg-white z-[1] bottom-0 left-0 h-[60px] w-full px-[16px] border-t border-nav-border-color border-solid items-center justify-between"
	);

	return (
		<footer className={containerClass}>
			<p className="text-sm">
				&copy;{` ${thisYear} Jordan Wu. All rights reserved.`}
			</p>
		</footer>
	);
}
