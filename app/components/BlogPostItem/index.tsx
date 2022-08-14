import Avatar from "../Avatar";

export default function BlogPostItem() {
	return (
		<li className="p-4 w-full border-b border-nav-border-color border-solid cursor-pointer">
			<article className="w-full">
				<div className="flex items-center">
					<Avatar src="https://placekitten.com/g/300/300" height="24" width="24" />
					<p className="ml-2">Jordan Wu</p>
				</div>
				<div className="flex justify-between mt-2">
					<div className="pr-[18px]">
						<p className="font-bold text-lg leading-5">Spotify: UX Research case study you instantly more likeabled</p>
						<p className="font-medium text-sm mt-1">
							<time
								className="after:content-['\00b7'] after:text-[18px] after:align-middle after:mx-[2px]"
								dateTime="1992-07-12"
							>
								July 12
							</time>
							6 min read
						</p>
					</div>
					<img alt="test" src="https://placekitten.com/g/100/62" className="rounded w-[100px] h-[62px]" />
				</div>
			</article>
		</li>
	);
}
