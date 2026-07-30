import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function ImmersiveHero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow"><Sparkles size={15} /> Nourish by Vaishali</p>
        <h1 id="hero-title">Food that fits <span>real life.</span></h1>
        <p className="hero-summary">Practical, science-informed nutrition guidance built around Indian meals, your health goals and the routine you already have.</p>
        <div className="hero-actions">
          <a className="primary" href="#contact">Start your journey <ArrowRight size={16} /></a>
          <a className="secondary" href="#about"><i><Play size={13} fill="currentColor" /></i> Meet Vaishali</a>
        </div>
        <div className="hero-stats">
          <div><strong>100%</strong><span>Personal plans</span></div>
          <div><strong>4</strong><span>Focused care areas</span></div>
          <div><strong>1:1</strong><span>Human support</span></div>
        </div>
      </div>

      <div className="hero-visual">
        <figure aria-label="Fresh Indian ingredients gather into a complete balanced thali">
          <img className="hero-motion" src="/food-gathering.gif" alt="Fresh Indian ingredients gathering into a balanced thali" />
          <img className="hero-poster" src="/food-gathering-poster.webp" alt="A complete balanced Indian thali" />
        </figure>
        <div className="assembly-note"><span></span> Ingredients in motion</div>
      </div>
    </section>
  );
}
