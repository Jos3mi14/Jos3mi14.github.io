import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const SERVER_ENTRY = path.join(DIST, "server", "entry-server.js");

const { render, ROUTE_META, PERSON_SCHEMA, SITE_URL } = await import(
  pathToFileURL(path.resolve(SERVER_ENTRY)).href
);

const template = await readFile(path.join(DIST, "index.html"), "utf8");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceMeta(html, meta) {
  const url = `${SITE_URL}${meta.path}`;
  const jsonLd = JSON.stringify(PERSON_SCHEMA, null, 2);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${url}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${url}" />`,
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n${jsonLd}\n    </script>`,
    );
}

let written = 0;

for (const meta of ROUTE_META) {
  const appHtml = render(meta.path);
  const page = replaceMeta(
    template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
    meta,
  );

  const output =
    meta.path === "/"
      ? path.join(DIST, "index.html")
      : path.join(DIST, meta.path.replace(/^\//, ""), "index.html");

  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, page, "utf8");
  written += 1;
  console.log(`pre-render  ${meta.path}  ->  ${output}`);
}

console.log(`\n${written} rutas pre-renderizadas.`);

// El bundle de SSR no se publica en GitHub Pages.
await rm(path.join(DIST, "server"), { recursive: true, force: true });
