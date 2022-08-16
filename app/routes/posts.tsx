import { Outlet } from "@remix-run/react";

export default function Posts() {
	return (
		<article className="p-[16px] prose lg:prose-xl">
			<Outlet />
		</article>
	);
}
