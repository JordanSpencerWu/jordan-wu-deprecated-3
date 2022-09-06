import { useEffect } from "react";
import { Outlet } from "@remix-run/react";

export default function Posts() {
	useEffect(() => {
		const _article = document.getElementById("article");

		if (_article) {
			const _links = _article.getElementsByTagName("a");

			for (let i = 0; i < _links.length; i++) {
				_links[i].setAttribute("target", "_blank");
			}
		}
	});

	return (
		<article className="m-auto p-[16px] prose lg:prose-xl text-xl" id="article">
			<Outlet />
		</article>
	);
}
