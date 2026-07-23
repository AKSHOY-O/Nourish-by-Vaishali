import { spawn } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const basePath = "/Nourish-by-Vaishali/";
const server = spawn("pnpm", ["start"], {
  env: { ...process.env, NODE_ENV: "production" },
  stdio: "ignore",
});

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function renderPage() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch("http://127.0.0.1:3000/");
      if (response.ok) return response.text();
    } catch {
      // The production server is still starting.
    }
    await delay(500);
  }
  throw new Error("The production server did not become ready in time.");
}

try {
  const renderedHtml = await renderPage();
  await rm("github-pages-dist", { recursive: true, force: true });
  await mkdir("github-pages-dist", { recursive: true });
  await cp("dist/client", "github-pages-dist", { recursive: true });

  const staticHtml = renderedHtml
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    .replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}`);

  await writeFile("github-pages-dist/index.html", staticHtml);
  await writeFile("github-pages-dist/.nojekyll", "");
} finally {
  server.kill("SIGTERM");
}
