import { ArrowRight, Check, Play, Sparkles } from "lucide-react";

export default function ImmersiveHero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow"><Sparkles size={15} /> Personal nutrition for real life</p>
        <h1 id="hero-title">Feel better with food that <span>fits your life.</span></h1>
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
        <div className="hero-blob" aria-hidden="true"></div>
        <figure>
          <img src="/nourish-hero-premium.png" alt="A colourful balanced meal prepared with fresh vegetables, grains and lentils" />
        </figure>
        <div className="float-card card-top"><span><Check size={14} /></span><div><b>Real Indian food</b><small>No impossible diet rules</small></div></div>
        <div className="float-card card-bottom"><span><Sparkles size={14} /></span><div><b>Made for you</b><small>Personal · practical · possible</small></div></div>
        <div className="shape shape-one" aria-hidden="true"></div>
        <div className="shape shape-two" aria-hidden="true"></div>
      </div>
    </section>
  );
}
