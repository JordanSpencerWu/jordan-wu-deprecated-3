/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
	serverBuildTarget: "vercel",
	// When running locally in development mode, we use the built in remix
	// server. This does not understand the vercel lambda module format,
	// so we default back to the standard build output.
	server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
	ignoredRouteFiles: ["**/.*"],
	appDirectory: "app",
	assetsBuildDirectory: "public/build",
	publicPath: "/build/",
	serverBuildDirectory: "build",
	mdx: async (filename) => {
		const [rehypeHighlight, remarkToc] = await Promise.all([
			import("rehype-highlight").then((mod) => mod.default),
			import("remark-toc").then((mod) => mod.default),
		]);

		return {
			remarkPlugins: [remarkToc],
			rehypePlugins: [rehypeHighlight],
		};
	},
};
