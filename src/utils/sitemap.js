import { globby } from "globby";
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

// pages that should not be in the sitemap
const blocklist = ["/404"];

async function generateSitemap(postList) {
  if (process.env.NODE_ENV === "development") {
    return;
  }

  const baseUrl = "https://tapan.tech";
  const pages = await globby([
    "pages/**/*{.tsx,.ts}",
    "!pages/**/[*",
    "!pages/_*{.tsx,.ts}",
    "!pages/api",
  ]);

  // normal page routes
  const pageLinks = pages
    .map((page) => {
      const path = page
        .replace("pages", "")
        .replace(".tsx", "")
        .replace(".ts", "");
      return path === "/index"
        ? { url: "/", changefreq: "daily", priority: 0.9 }
        : { url: path, changefreq: "daily", priority: 0.7 };
    })
    .filter((page) => !blocklist.includes(page.url));

  // post routes
  const postLinks = postList.map((post) => ({
    url: `/blogs/${post.slug}`,
    changefreq: "daily",
    priority: 0.7,
  }));

  const links = [...pageLinks, ...postLinks];
  const stream = new SitemapStream({ hostname: baseUrl });

  const xml = await streamToPromise(
    Readable.from(links)
      .pipe(stream)
      .on("error", (err) => {
        console.log(err);
      })
  ).then((data) => data.toString());

  fs.writeFileSync("./public/sitemap.xml", xml);

  return true;

  // readable.on("error", err => {
  //   console.log(err);
  // });
}

export default generateSitemap;
