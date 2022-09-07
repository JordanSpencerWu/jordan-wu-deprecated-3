import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return { title: "jordanwu.xyz | About" };
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": `public, max-age=${60 * 60 * 24}`,
	};
};

export default function Index() {
	return (
		<div className="w-full h-full flex flex-col p-[16px] lg:prose-xl text-xl">
			<p>
				Welcome to my website! My name is Jordan and I will be blogging about
				everything! There's so much to learn in life and the best way to learn
				is to write a blog about it. It's a good way to remember the learnings
				and to share it!
			</p>
			<p className="mt-4">
				A little bit about me. For work I'm a software engineer and enjoy
				building products for people! On my free time I enjoy listening to
				music! I would spend hours each week finding new songs to listen to. I
				love music so much that my dream is to become a music producer and DJ.
			</p>
			<p className="mt-4">
				I'm in the process of creating the good habits to help me become a music
				producer and DJ. On this website I will be sharing my favorite songs and
				blogs about what I'm learning. I'm hoping to find my own sound and to be
				able to create great music!
			</p>
			<blockquote
				className="mt-4 p-6 border-l-8 border-black border-solid text-2xl
									 before:content-['\201c'] before:text-[100px] before:block
									 before:mb-[-4px] before:mt-4"
			>
				<p className="font-['Gelasio'] font-bold italic">
					My dream is to be one of the greatest music producer and DJ that ever
					lived.
				</p>
				<p className="mt-2 font-['Open_Sans'] text-right font-bold before:content-['\2014\0020']">
					Jordan Wu
				</p>
			</blockquote>
			{/* <div className="w-full flex justify-center mt-4">
				<div className="flex justify-evenly w-8/12">
					<a
						href="https://www.instagram.com/jordanwu.xyz/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							alt="instagram icon"
							src="/instagram.svg"
							height="32"
							width="32"
						/>
					</a>
					<a href="https://twitter.com" target="_blank" rel="noreferrer">
						<img alt="twitter icon" src="/twitter.svg" height="32" width="32" />
					</a>
					<a
						href="https://www.youtube.com/channel/UCHu47XImxsir745HDcab30g"
						rel="noreferrer"
						target="_blank"
					>
						<img alt="youtube icon" src="/youtube.svg" height="32" width="32" />
					</a>
					<a
						href="https://soundcloud.com/jordanwu_xyz/tracks"
						target="_blank"
						rel="noreferrer"
					>
						<img
							alt="soundcloud icon"
							src="/sound-cloud.svg"
							height="32"
							width="32"
						/>
					</a>
				</div>
			</div> */}
		</div>
	);
}
