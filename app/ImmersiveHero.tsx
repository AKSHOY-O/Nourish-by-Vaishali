import { ArrowDown, Check, Sparkles } from "lucide-react";

export default function ImmersiveHero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow"><Sparkles size={16} /> Personal nutrition, made human</p>
        <h1 id="hero-title">Eat well.<br /><span>Live fully.</span></h1>
        <p className="hero-summary">Practical nutrition guidance built around Indian food, busy days and the life you actually live.</p>
        <a href="#philosophy">See how it works <ArrowDown size={16} /></a>
        <div className="hero-points">
          <span><Check size={14} /> No crash diets</span>
          <span><Check size={14} /> Familiar meals</span>
          <span><Check size={14} /> Personal support</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-shape shape-dot" aria-hidden="true"></div>
        <div className="hero-shape shape-flower" aria-hidden="true">✦</div>
        <figure>
          <img src="/nourish-hero-premium.png" alt="A colourful, balanced meal prepared with fresh ingredients" />
        </figure>
        <div className="hero-sticker">
          <strong>100%</strong>
          <span>real-life<br />friendly</span>
        </div>
        <div className="hero-note">Food that feels good<br /><b>and fits your day.</b></div>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <span>NOURISH</span><i>✦</i><span>GROW</span><i>✦</i><span>THRIVE</span>
      </div>
    </section>
  );
}
