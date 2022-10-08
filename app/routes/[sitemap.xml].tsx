export const loader = () => {
	const content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.jordanwu.xyz/</loc>
        <lastmod>2022-10-08T18:06:57+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.jordanwu.xyz/search</loc>
        <lastmod>2022-10-08T18:06:57+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.jordanwu.xyz/playlist</loc>
        <lastmod>2022-10-08T18:06:57+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.jordanwu.xyz/about</loc>
        <lastmod>2022-10-08T18:06:57+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.jordanwu.xyz/favorites</loc>
        <lastmod>2022-10-08T18:06:57+00:00</lastmod>
        <priority>0.80</priority>
      </url>
    </urlset>
    `;

	return new Response(content, {
		status: 200,
		headers: {
			"Content-Type": "application/xml",
			"xml-version": "1.0",
			encoding: "UTF-8",
		},
	});
};
