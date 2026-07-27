"use client";

import { ArrowDown, Sparkles } from "lucide-react";

export default function ImmersiveHero() {
  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--mx", x.toFixed(3));
    event.currentTarget.style.setProperty("--my", y.toFixed(3));
  }

  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--mx", "0");
        event.currentTarget.style.setProperty("--my", "0");
      }}
    >
      <div className="hero-art" aria-hidden="true">
        <img src="/og.png" alt="" />
      </div>
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-eyebrow"><Sparkles size={14} /> Personal nutrition, made human</p>
        <h1 id="hero-title">Food that fits<br /><em>real life.</em></h1>
        <p className="hero-summary">Nutrition guidance built around Indian food, busy days and sustainable change.</p>
        <a href="#philosophy">Discover the approach <ArrowDown size={15} /></a>
      </div>
      <div className="hero-proof">
        <span>01</span>
        <p>Familiar meals.<br />Clear guidance.<br />No impossible rules.</p>
      </div>
      <div className="hero-scroll"><span></span> Scroll to explore</div>
    </section>
  );
}
