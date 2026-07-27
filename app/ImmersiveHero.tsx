"use client";

import { ArrowDown, Check, Sparkles } from "lucide-react";

export default function ImmersiveHero() {
  function move(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    event.currentTarget.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--px", x.toFixed(3));
    event.currentTarget.style.setProperty("--py", y.toFixed(3));
  }

  function reset(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
    event.currentTarget.style.setProperty("--px", "0");
    event.currentTarget.style.setProperty("--py", "0");
  }

  return (
    <section className="hero" id="home" aria-labelledby="hero-title" onPointerMove={move} onPointerLeave={reset}>
      <div className="hero-aurora" aria-hidden="true"></div>
      <div className="hero-grid" aria-hidden="true"></div>

      <div className="hero-copy">
        <p className="hero-eyebrow"><Sparkles size={15} /> Vaishali · personal nutrition guide</p>
        <h1 id="hero-title">Real food.<br /><span>Real change.</span></h1>
        <p className="hero-summary">A deeply personal nutrition experience built around Indian food, modern life and the way your body truly feels.</p>
        <a href="#philosophy">Enter the experience <ArrowDown size={16} /></a>
        <div className="hero-points">
          <span><Check size={13} /> No crash diets</span>
          <span><Check size={13} /> Personal roadmap</span>
          <span><Check size={13} /> Human support</span>
        </div>
      </div>

      <div className="hero-world" aria-label="A colourful balanced meal floating in a three-dimensional nutrition world">
        <div className="world-ring ring-back" aria-hidden="true"></div>
        <div className="world-ring ring-mid" aria-hidden="true"></div>
        <div className="world-glow" aria-hidden="true"></div>
        <div className="world-card card-back" aria-hidden="true">
          <span>ENERGY</span><b>steady</b>
        </div>
        <figure className="world-plate">
          <img src="/nourish-hero-premium.png" alt="A colourful balanced meal with vegetables, grains and lentils" />
        </figure>
        <div className="world-card card-front">
          <span>YOUR PLAN</span><b>100% personal</b><i></i>
        </div>
        <div className="world-chip chip-one">Protein</div>
        <div className="world-chip chip-two">Fibre</div>
        <div className="world-chip chip-three">Joy</div>
        <div className="world-orb orb-one" aria-hidden="true"></div>
        <div className="world-orb orb-two" aria-hidden="true"></div>
        <div className="world-orb orb-three" aria-hidden="true"></div>
      </div>

      <div className="hero-scroll"><span></span> Scroll to explore</div>
    </section>
  );
}
