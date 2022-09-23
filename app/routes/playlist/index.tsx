import { useState } from "react";
import classNames from "classnames";
import FadeLoader from "react-spinners/FadeLoader";

import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return { title: "jordanwu.xyz | Playlist" };
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": `public, max-age=${60 * 60 * 24}`,
	};
};

export default function PlaylistRoute() {
	const [loadingPlaylist, setLoadingPlaylist] = useState(true);

	function handleLoad() {
		setLoadingPlaylist(false);
	}

	const playlistClass = classNames("rounded-xl", { hidden: loadingPlaylist });

	return (
		<div className="w-full h-full flex justify-center items-center px-4 py-2">
			{loadingPlaylist && <FadeLoader />}
			<iframe
				title="Spotify Playlist"
				className={playlistClass}
				src="https://open.spotify.com/embed/playlist/6msHe48KiYyqaTeq45aXR6?utm_source=generator&view=coverart"
				width="100%"
				height="100%"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				onLoad={handleLoad}
			></iframe>
		</div>
	);
}
