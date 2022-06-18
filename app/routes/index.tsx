import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | Home" };
};

export default function Index() {
	return (
		<div className="w-screen h-screen flex justify-center items-center text-purple-200 text-4xl text-center p-6">
			I will be the best DJ and music producer in the world.
		</div>
	);
}
