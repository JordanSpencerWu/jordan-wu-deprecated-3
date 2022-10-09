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

		// @ts-ignore
		if (MathJax) {
			// @ts-ignore
			MathJax.typeset();
		}
	}, []);

	return (
		<article
			className="m-auto p-[16px] prose lg:prose-xl prose-code:before:content-none prose-code:after:content-none text-xl"
			id="post"
		>
			<Outlet />
		</article>
	);
}
