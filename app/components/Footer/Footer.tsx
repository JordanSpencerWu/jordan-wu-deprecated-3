import classNames from "classnames";

export default function Footer() {
	const todayDate = new Date();
	const thisYear = todayDate.getFullYear();
	const containerClass = classNames(
		"hidden md:flex bg-white dark:bg-dark-background-color dark:text-dark-secondary-color z-[1] bottom-0 left-0 h-[60px] w-full px-[16px] border-t border-nav-border-color border-solid dark:border-none items-center justify-between"
	);

	return (
		<footer className={containerClass}>
			<p className="text-sm">
				&copy;{` ${thisYear} Jordan Wu. All rights reserved.`}
			</p>
		</footer>
	);
}
