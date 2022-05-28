import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | About" };
};

export default function Index() {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<header>Jordan Wu</header>
			<p>testing</p>
		</div>
	);
}
