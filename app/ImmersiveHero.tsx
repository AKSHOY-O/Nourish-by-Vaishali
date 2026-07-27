"use client";

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    eyebrow: "REAL FOOD · REAL LIFE",
    title: <>Food that fits<br/><em>real life.</em></>,
    text: "Personal nutrition guidance built around Indian meals, busy days and the food you genuinely enjoy.",
    image: "/hero-real-life-desktop.jpg",
    mobile: "/hero-real-life-new.jpg",
    alt: "A colourful meal being prepared in a warm home kitchen",
    tone: "sunset",
    note: "No crash diets",
  },
  {
    eyebrow: "YOUR EVERYDAY GOAL",
    title: <>Feel better.<br/><em>Every day.</em></>,
    text: "Build steadier energy, calmer digestion and confidence around food through small, sustainable changes.",
    image: "/hero-goal-new.jpg",
    mobile: "/hero-goal-mobile.jpg",
    alt: "A colourful balanced everyday plate",
    tone: "sky",
    note: "Balanced & flexible",
  },
  {
    eyebrow: "MEET YOUR GUIDE",
    title: <>Personal care.<br/><em>By Vaishali.</em></>,
    text: "Warm, judgement-free consultations that begin with listening and turn complex advice into practical routines.",
    image: "/vaishali-portrait-professional.png",
    mobile: "/vaishali-portrait.png",
    alt: "Vaishali, nutrition and wellness consultant",
    tone: "night",
    note: "Care that listens",
  },
  {
    eyebrow: "A PLAN MADE AROUND YOU",
    title: <>Your clear<br/><em>next step.</em></>,
    text: "A personalised roadmap, familiar foods and ongoing support—so healthy choices feel possible long after the consultation.",
    image: "/hero-roadmap-new.jpg",
    mobile: "/hero-roadmap-mobile.jpg",
    alt: "A personal nutrition roadmap with wholesome meals",
    tone: "mist",
    note: "Practical progress",
  },
];

export default function ImmersiveHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 7500);
    return () => window.clearInterval(timer);
  }, [paused]);

  function move(direction: number) {
    setActive((value) => (value + direction + slides.length) % slides.length);
  }

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
      className="immersive-hero"
      id="home"
      ref={heroRef}
      aria-roledescription="carousel"
      aria-label="Nourish by Vaishali introduction"
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--mx", "0");
        event.currentTarget.style.setProperty("--my", "0");
        setPaused(false);
      }}
      onMouseEnter={() => setPaused(true)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="immersive-grain" aria-hidden="true"></div>
      <div className="immersive-slides">
        {slides.map((slide, index) => (
          <article
            className={`immersive-slide ${slide.tone} ${index === active ? "is-active" : ""}`}
            aria-hidden={index !== active}
            key={slide.eyebrow}
          >
            <picture className="immersive-bg">
              <source media="(max-width: 650px)" srcSet={slide.mobile}/>
              <img src={slide.image} alt="" aria-hidden="true"/>
            </picture>
            <div className="immersive-wash" aria-hidden="true"></div>
            <div className="orb orb-one" aria-hidden="true"></div>
            <div className="orb orb-two" aria-hidden="true"></div>
            <div className="immersive-cutout" aria-hidden="true">
              <picture><source media="(max-width: 650px)" srcSet={slide.mobile}/><img src={slide.image} alt=""/></picture>
            </div>
            <div className="immersive-copy">
              <p className="immersive-eyebrow"><span></span>{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p className="immersive-text">{slide.text}</p>
              <div className="immersive-actions">
                <a href="#contact" tabIndex={index === active ? 0 : -1}>Book a consultation <ArrowUpRight size={16}/></a>
                <span><Check size={13}/>{slide.note}</span>
              </div>
            </div>
            <div className="immersive-label" aria-hidden="true">NOURISH · 0{index + 1}</div>
          </article>
        ))}
      </div>

      <div className="immersive-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous story"><ArrowLeft size={17}/></button>
        <div className="immersive-dots" role="tablist" aria-label="Choose a story">
          {slides.map((slide, index) => (
            <button
              type="button"
              role="tab"
              aria-label={`Show story ${index + 1}: ${slide.eyebrow}`}
              aria-selected={active === index}
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
              key={slide.eyebrow}
            ><span></span></button>
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next story"><ArrowRight size={17}/></button>
      </div>

      <a className="immersive-scroll" href="#approach">Explore the approach <ArrowDown size={15}/></a>
    </section>
  );
}
