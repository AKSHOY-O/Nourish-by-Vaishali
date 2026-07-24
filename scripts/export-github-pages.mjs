import { spawn } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const basePath = "/Nourish-by-Vaishali/";
const scrollResetScript =
  '<script>(function(){try{history.scrollRestoration="manual";var entry=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];var reloaded=entry?entry.type==="reload":performance.navigation&&performance.navigation.type===1;if(reloaded){if(location.hash)history.replaceState(null,"",location.pathname+location.search);var top=function(){window.scrollTo(0,0)};top();document.addEventListener("DOMContentLoaded",top,{once:true});window.addEventListener("load",function(){top();requestAnimationFrame(top);setTimeout(top,0)},{once:true})}}catch(e){}})();</script>';
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
    .replace(/(href|src|srcSet)="\/(?!\/)/g, `$1="${basePath}`)
    .replace("</head>", `${scrollResetScript}</head>`);

  await writeFile("github-pages-dist/index.html", staticHtml);
  await writeFile("github-pages-dist/.nojekyll", "");
} finally {
  server.kill("SIGTERM");
}
