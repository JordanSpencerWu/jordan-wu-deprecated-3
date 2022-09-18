import { useEffect } from "react";
import { Outlet } from "@remix-run/react";

export default function Posts() {
	useEffect(() => {
		const _post = document.getElementById("post");

		if (_post) {
			const _links = _post.getElementsByTagName("a");

			for (let i = 0; i < _links.length; i++) {
				_links[i].setAttribute("target", "_blank");
			}
		}
	});

	return (
		<article className="m-auto p-[16px] prose lg:prose-xl text-xl" id="post">
			<Outlet />
		</article>
	);
}
