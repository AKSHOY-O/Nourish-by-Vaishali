"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, Leaf, Play, Sparkles } from "lucide-react";
import gsap from "gsap";

const word = "NOURISH".split("");

export default function ImmersiveHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.set(".hero-line > span", { yPercent: 112 });
      gsap.set(".hero-word span", { y: 70, opacity: 0 });
      gsap.set(".hero-video-shell", { y: 110, opacity: 0, scale: 0.86 });
      gsap.set(".hero-eyebrow, .hero-summary, .hero-actions, .hero-stats", { y: 22, opacity: 0 });
      gsap.set(".hero-proof, .assembly-note, .hero-meta", { y: 22, opacity: 0 });

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to(".hero-video-shell", { y: 0, opacity: 1, scale: 1, duration: 1.25, ease: "back.out(1.3)" }, 0.15)
        .to(".hero-word span", { y: 0, opacity: 1, duration: 0.85, stagger: 0.055, ease: "back.out(1.35)" }, 0.28)
        .to(".hero-eyebrow", { y: 0, opacity: 1, duration: 0.6 }, 0.48)
        .to(".hero-line > span", { yPercent: 0, duration: 0.82, stagger: 0.09 }, 0.58)
        .to(".hero-summary", { y: 0, opacity: 1, duration: 0.62 }, 0.92)
        .to(".hero-actions", { y: 0, opacity: 1, duration: 0.62 }, 1.02)
        .to(".hero-stats", { y: 0, opacity: 1, duration: 0.62 }, 1.12)
        .to(".hero-proof, .assembly-note", { y: 0, opacity: 1, duration: 0.72, stagger: 0.1, ease: "back.out(1.25)" }, 1.08)
        .to(".hero-meta", { y: 0, opacity: 1, duration: 0.6 }, 1.3);

      gsap.to(".hero-video-float", {
        y: -10,
        rotate: 0.6,
        duration: 4,
        delay: 1.45,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-product-glow", {
        scale: 1.12,
        opacity: 0.82,
        duration: 3.2,
        delay: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, hero);

    const shell = hero.querySelector<HTMLElement>(".hero-video-shell");
    const wordmark = hero.querySelector<HTMLElement>(".hero-word");
    const proof = hero.querySelector<HTMLElement>(".hero-proof");
    const move = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      gsap.to(shell, { x: x * 17, y: y * 11, rotateY: x * 2.5, duration: 0.8, ease: "power2.out", overwrite: "auto" });
      gsap.to(wordmark, { x: x * 25, y: y * 9, duration: 1, ease: "power2.out", overwrite: "auto" });
      gsap.to(proof, { x: x * 9, y: y * 7, duration: 0.9, ease: "power2.out", overwrite: "auto" });
    };
    const leave = () => {
      gsap.to([shell, wordmark, proof], { x: 0, y: 0, rotateY: 0, duration: 1, ease: "elastic.out(1, .65)" });
    };
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);

    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
      context.revert();
    };
  }, []);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title" ref={heroRef}>
      <div className="hero-word" aria-hidden="true">
        {word.map((letter, index) => <span key={`${letter}-${index}`}>{letter}</span>)}
      </div>

      <div className="hero-copy">
        <p className="hero-eyebrow"><Sparkles size={14} /> Personal nutrition, made human</p>
        <h1 id="hero-title">
          <span className="hero-line"><span>Food that fits</span></span>
          <span className="hero-line"><span>your real life.</span></span>
        </h1>
        <p className="hero-summary">Science-informed guidance shaped around Indian meals, your health goals and the routine you already have.</p>
        <div className="hero-actions">
          <a className="primary" href="#contact">Start your journey <ArrowRight size={15} /></a>
          <a className="secondary" href="#about"><i><Play size={12} fill="currentColor" /></i> Meet Vaishali</a>
        </div>
        <div className="hero-stats">
          <div><strong>1:1</strong><span>Personal support</span></div>
          <div><strong>100%</strong><span>Real-food plans</span></div>
        </div>
      </div>

      <div className="hero-stage">
        <div className="hero-product-glow" aria-hidden="true"></div>
        <div className="hero-video-float">
          <figure className="hero-video-shell">
            <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/food-gathering-poster.webp" aria-label="Fresh Indian ingredients gathering into a balanced thali">
              <source src="/food-gathering.mp4" type="video/mp4" />
            </video>
            <img className="hero-poster" src="/food-gathering-poster.webp" alt="A complete balanced Indian thali" />
          </figure>
        </div>
        <div className="hero-proof">
          <span className="proof-icon"><Leaf size={18} /></span>
          <div><small>Vaishali&apos;s approach</small><strong>Balanced, not boring.</strong></div>
          <span className="proof-arrow"><ArrowRight size={14} /></span>
        </div>
        <div className="assembly-note"><span></span> Watch your plate come together</div>
      </div>

      <div className="hero-meta">
        <span>Indian food friendly</span>
        <span>Science-led · judgement-free</span>
        <a href="#philosophy">Explore <ArrowDown size={13} /></a>
      </div>
    </section>
  );
}
