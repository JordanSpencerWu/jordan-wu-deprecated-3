import { Link } from "remix";

import pathTo from "../../utils/pathTo";

export default function Navbar() {
	return (
		<div className="flex justify-center items-center h-16">
			<Link className="text-3xl font-bold" to={pathTo.home}>
				Jordan Wu
			</Link>
		</div>
	);
}
