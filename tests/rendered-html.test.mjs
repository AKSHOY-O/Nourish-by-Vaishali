import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete Nourish portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Nourish by Vaishali/);
  assert.match(html, /id="hero-title"/);
  assert.match(html, /Food that fits/);
  assert.match(html, /id="services"/);
  assert.match(html, /id="process"/);
  assert.match(html, /id="about"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /tel:\+918003924522/);
  assert.match(html, /wa\.me\/918003924522/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
});

test("includes responsive and reduced-motion styles", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /prefers-reduced-motion: no-preference/);
  assert.match(css, /\.service-list/);
  assert.match(css, /\.contact-options/);
  assert.match(css, /\.hero-visual/);
});
