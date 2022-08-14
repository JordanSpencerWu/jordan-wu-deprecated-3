import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return { title: "Jordan Wu | About" };
};

export default function Index() {
	return (
		<div className="relative w-full h-full flex flex-col justify-center items-center p-6">
			<blockquote className="p-6 border-l-8 border-black border-solid text-2xl -translate-y-8">
				<p className="font-['Gelasio'] font-bold italic">
					My dream is to be one of the greatest music producer and DJ that ever lived.
				</p>
				<p className="mt-2 font-['Open_Sans'] text-right font-bold before:content-['\2014\0020']">Jordan Wu</p>
			</blockquote>
			<div className="fixed bottom-20 mt-4 flex justify-evenly w-8/12">
				<img src="/instagram.svg" className="h-[32px] w-[32px]" />
				<img src="/twitter.svg" className="h-[32px] w-[32px]" />
				<img src="/youtube.svg" className="h-[32px] w-[32px]" />
				<img src="/sound-cloud.svg" className="h-[32px] w-[32px]" />
			</div>
		</div>
	);
}
