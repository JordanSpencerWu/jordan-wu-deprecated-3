import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | About" };
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": `public, max-age=${60 * 60 * 24}`,
	};
};

export default function Index() {
	return (
		<div className="relative w-full h-full flex flex-col justify-center items-center p-6">
			<blockquote
				className="p-6 border-l-8 border-black border-solid text-2xl -translate-y-8
									 before:content-['\201c'] before:text-[100px] before:block
									 before:mb-[-4px] before:mt-4"
			>
				<p className="font-['Gelasio'] font-bold italic">
					My dream is to be one of the greatest music producer and DJ that ever lived.
				</p>
				<p className="mt-2 font-['Open_Sans'] text-right font-bold before:content-['\2014\0020']">Jordan Wu</p>
			</blockquote>
			<div className="fixed bottom-20 mt-4 flex justify-evenly w-8/12">
				<a href="https://www.instagram.com/jordanwu.xyz/" target="_blank">
					<img alt="instagram icon" src="/instagram.svg" height="32" width="32" />
				</a>
				<a href="https://twitter.com" target="_blank">
					<img alt="twitter icon" src="/twitter.svg" height="32" width="32" />
				</a>
				<a href="https://www.youtube.com/channel/UCHu47XImxsir745HDcab30g" target="_blank">
					<img alt="youtube icon" src="/youtube.svg" height="32" width="32" />
				</a>
				<a href="https://soundcloud.com/jordanwu_xyz" target="_blank">
					<img alt="soundcloud icon" src="/sound-cloud.svg" height="32" width="32" />
				</a>
			</div>
		</div>
	);
}
