import { copyFile, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const dist = join(root, "dist");
const assets = join(dist, "assets");
const publicDir = join(root, "public");
const searchLogoFile = "rein-lab-search-logo.png";
const siteUrl = "https://reinlab.com";
const searchLogoHref = searchLogoFile;
const searchLogoUrl = `${siteUrl}/${searchLogoHref}`;
const searchFiles = [
  searchLogoFile,
  "favicon.ico",
  "favicon-48x48.png",
  "icon-192.png",
  "icon-512.png",
  "site.webmanifest",
];
const staleFiles = [
  "about.html",
  "apply.html",
  "rein-system.html",
  "results.html",
];

const files = await readdir(assets);
const jsFile = files.find((file) => /^index-.*\.js$/.test(file));
const cssFile = files.find((file) => /^index-.*\.css$/.test(file));

if (!jsFile || !cssFile) {
  throw new Error("Could not find built index JS/CSS assets in dist/assets.");
}

const [js, css] = await Promise.all([
  readFile(join(assets, jsFile), "utf8"),
  readFile(join(assets, cssFile), "utf8"),
]);

const safeCss = css.replace(/<\/style/gi, "<\\/style");
const safeJs = js.replace(/<\/script/gi, "<\\/script");
const structuredData = JSON.stringify(
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Rein Lab",
        url: `${siteUrl}/`,
        logo: {
          "@type": "ImageObject",
          url: searchLogoUrl,
          width: 2000,
          height: 2000,
        },
        image: searchLogoUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Rein Lab",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  },
  null,
  6
).replace(/</g, "\\u003c");

const pages = [
  {
    file: "index.html",
    title: "Rein Lab",
    eyebrow: "A growth partner for eCom brands",
    heading: "Precision is the strategy.",
    copy: "Rein Lab builds brands with data, creative rhythm, and clear execution.",
  },
  {
    file: "services.html",
    title: "Rein Lab | Services",
    eyebrow: "[ Services ]",
    heading: "Growth systems, not tasks.",
    copy: "Paid media, creative strategy, analytics, and retention working together.",
  },
  {
    file: "pfs-system.html",
    title: "Rein Lab | The PFS System™",
    eyebrow: "[ The PFS System™ ]",
    heading: "The System Behind Every Outcome.",
    copy: "Rein Lab builds performance systems.",
  },
];

const standalone = (page) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Rein Lab is a growth partner for e-commerce and fashion brands, blending strategy, creative, analytics, and retention."
    />
    <meta name="application-name" content="Rein Lab" />
    <meta name="theme-color" content="#101414" />
    <link rel="icon" href="favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png" />
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="apple-touch-icon" sizes="192x192" href="icon-192.png" />
    <link rel="manifest" href="site.webmanifest" />
    <meta name="msapplication-TileImage" content="icon-192.png" />
    <meta property="og:site_name" content="Rein Lab" />
    <meta property="og:image" content="${searchLogoUrl}" />
    <meta name="twitter:image" content="${searchLogoUrl}" />
    <title>${page.title}</title>
    <script type="application/ld+json">
${structuredData}
    </script>
    <style>
${safeCss}
    </style>
  </head>
  <body style="margin:0;background:#101414;color:#fff;">
    <div id="root"></div>
    <script>
${safeJs}
    </script>
  </body>
</html>
`;

await Promise.all(
  pages.flatMap((page) => {
    const html = standalone(page);
    return [
      writeFile(join(root, page.file), html, "utf8"),
      writeFile(join(dist, page.file), html, "utf8"),
      page.file === "index.html" ? writeFile(join(dist, "standalone.html"), html, "utf8") : null,
    ].filter(Boolean);
  })
);

await Promise.all([
  ...searchFiles.flatMap((file) => [
    copyFile(join(publicDir, file), join(root, file)),
    copyFile(join(publicDir, file), join(dist, file)),
  ]),
  ...staleFiles.flatMap((file) => [
    rm(join(root, file), { force: true }),
    rm(join(dist, file), { force: true }),
  ]),
]);
