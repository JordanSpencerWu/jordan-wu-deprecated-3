import { Outlet } from "@remix-run/react";

export default function Posts() {
	return (
		<article className="m-auto px-[16px] prose lg:prose-xl">
			<Outlet />
		</article>
	);
}
