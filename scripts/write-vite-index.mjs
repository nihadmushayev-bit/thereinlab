import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const siteUrl = "https://reinlab.com";
const searchLogoHref = "rein-lab-search-logo.png";
const searchLogoUrl = `${siteUrl}/${searchLogoHref}`;
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

const html = `<!doctype html>
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
    <title>Rein Lab</title>
    <script type="application/ld+json">
${structuredData}
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

await writeFile(join(root, "index.html"), html, "utf8");
