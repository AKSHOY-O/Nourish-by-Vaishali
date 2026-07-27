"use client";

import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

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
      className="front-cinematic"
      id="home"
      aria-label="Food that fits real life — Nourish by Vaishali"
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--mx", "0");
        event.currentTarget.style.setProperty("--my", "0");
      }}
    >
      <picture className="front-art">
        <img src="/og.png" alt="Food that fits real life — a nourishing Indian meal presented as a floating world"/>
      </picture>
      <div className="front-shade" aria-hidden="true"></div>
      <div className="front-glow" aria-hidden="true"></div>
      <div className="front-particles" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>

      <div className="front-mobile-copy">
        <p><span></span>NOURISH BY VAISHALI</p>
        <h1 id="front-cinematic-title">Food that fits<br/><em>real life.</em></h1>
        <small>Personal nutrition for Indian food, busy days and sustainable change.</small>
      </div>

      <div className="front-actions">
        <a href="#contact">Book a consultation <ArrowUpRight size={16}/></a>
        <span><Check size={13}/> Personal · practical · possible</span>
      </div>

      <a className="front-scroll" href="#approach">Explore more <ArrowDown size={15}/></a>
    </section>
  );
}
