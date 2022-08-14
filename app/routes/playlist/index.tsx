import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import classNames from "classnames";
import FadeLoader from "react-spinners/FadeLoader";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | Playlist" };
};

export default function Index() {
	const [loading, setLoading] = useState(true);

	function handleLoad() {
		setLoading(false);
	}

	const showPlaylist = !loading;

	const playlistClass = classNames("rounded-xl", { hidden: !showPlaylist });

	return (
		<div className="w-full h-full flex justify-center items-center px-4 py-2">
			{!showPlaylist && <FadeLoader />}
			<iframe
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
