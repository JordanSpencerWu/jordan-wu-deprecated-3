import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | Home" };
};

export default function Index() {
	return <div className="w-screen h-screen flex"></div>;
}
