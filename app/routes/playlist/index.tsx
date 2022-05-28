import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | Playlist" };
};

export default function Index() {
	return <div></div>;
}
