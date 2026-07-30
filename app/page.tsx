import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  HeartPulse,
  Leaf,
  MessageCircle,
  Phone,
  Quote,
  Salad,
  Scale,
  Send,
  Sparkles,
  Sprout,
} from "lucide-react";

const whatsapp =
  "https://wa.me/918003924522?text=Hello%20Vaishali%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation.";

const services = [
  {
    icon: Scale,
    number: "01",
    title: "Weight & body confidence",
    text: "A steady, nourishing approach to weight goals—without crash diets or all-or-nothing rules.",
    image: "/hero-goal-new.jpg",
  },
  {
    icon: HeartPulse,
    number: "02",
    title: "PCOS & metabolic care",
    text: "Practical food support for PCOS, thyroid health, insulin resistance and blood-sugar balance.",
    image: "/hero-roadmap-new.jpg",
  },
  {
    icon: Sprout,
    number: "03",
    title: "Gut comfort",
    text: "Thoughtful guidance for bloating, acidity, irregular digestion and everyday digestive ease.",
    image: "/hero-real-life-desktop.jpg",
  },
  {
    icon: Salad,
    number: "04",
    title: "Everyday nourishment",
    text: "Flexible meal systems for busy workdays, family life, prenatal care and healthy ageing.",
    image: "/nourish-hero-premium.png",
  },
];

const steps = [
  {
    number: "01",
    title: "We listen",
    text: "Your health history, routine, food culture, concerns and goals come first.",
  },
  {
    number: "02",
    title: "We simplify",
    text: "Nutrition science becomes a clear plan built around familiar food and real days.",
  },
  {
    number: "03",
    title: "We adapt",
    text: "Follow-ups turn your plan into skills and habits that remain useful for life.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nourish by Vaishali, home">
          <span className="brand-monogram">NV</span>
          <span><b>Nourish</b><small>by Vaishali</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#services">Care</a>
          <a href="#journey">Journey</a>
          <a href="#about">Vaishali</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowDown size={13} /></a>
      </header>

      <section className="home-hero" id="home" aria-labelledby="hero-title">
        <div className="hero-orbit orbit-one" aria-hidden="true"></div>
        <div className="hero-orbit orbit-two" aria-hidden="true"></div>
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Personal nutrition for real life</p>
          <h1 id="hero-title"><span>Eat well.</span><em>Live fully.</em></h1>
          <p className="hero-intro">Warm, science-informed nutrition guidance that respects your body, your culture and the life you actually live.</p>
          <div className="hero-action">
            <a href="#contact">Begin with a conversation <ArrowUpRight size={16} /></a>
            <p><Check size={13} /> No pressure. Just a thoughtful first step.</p>
          </div>
        </div>

        <div className="hero-portrait">
          <figure>
            <img src="/vaishali-portrait-professional.png" alt="Vaishali, nutrition and wellness consultant" />
          </figure>
          <div className="portrait-label">
            <span><Leaf size={15} /></span>
            <div><small>Your nutrition guide</small><b>Vaishali</b></div>
          </div>
          <div className="food-inset">
            <img src="/hero-real-life-new.jpg" alt="A colourful balanced Indian meal being prepared" />
            <span>Familiar food.<br />Better balance.</span>
          </div>
        </div>

        <div className="hero-foot">
          <span>Online consultations</span>
          <span>Indian food friendly</span>
          <a href="#approach">Discover the approach <ArrowDown size={13} /></a>
        </div>
      </section>

      <section className="belief" id="approach">
        <div className="section-index">01 — The belief</div>
        <div className="belief-layout">
          <div>
            <p className="eyebrow"><span></span> A kinder way forward</p>
            <h2>Good nutrition should make life feel <em>bigger,</em> not smaller.</h2>
          </div>
          <div className="belief-copy">
            <p>Food is health, culture, comfort and connection. Vaishali helps you care for your body without losing any of that.</p>
            <div className="belief-signature">
              <span>Personal</span><i></i><span>Practical</span><i></i><span>Possible</span>
            </div>
          </div>
        </div>
        <div className="belief-cards">
          <article><span>01</span><h3>Start with your story</h3><p>No assumptions and no copy-paste plans.</p></article>
          <article><span>02</span><h3>Keep food familiar</h3><p>Your kitchen and culture stay part of the answer.</p></article>
          <article><span>03</span><h3>Build quiet confidence</h3><p>Learn choices you can make without fear or guilt.</p></article>
        </div>
      </section>

      <section className="care" id="services">
        <div className="care-head">
          <div className="section-index light">02 — Areas of care</div>
          <h2>Support for the season of life you&apos;re in.</h2>
          <p>Every programme begins with a detailed conversation and becomes a plan shaped around you.</p>
        </div>
        <div className="care-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.number}>
                <div className="care-photo"><img src={service.image} alt="" loading="lazy" /></div>
                <div className="care-top"><span>{service.number}</span><i><Icon size={19} /></i></div>
                <div className="care-body"><h3>{service.title}</h3><p>{service.text}</p></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="journey-image">
          <img src="/hero-roadmap-new.jpg" alt="A nutrition journal beside a balanced Indian meal" loading="lazy" />
          <div className="journey-note"><Sparkles size={15} /> A plan designed to evolve with you</div>
        </div>
        <div className="journey-copy">
          <div className="section-index">03 — How it works</div>
          <h2>Less confusion.<br /><em>More clarity.</em></h2>
          <p className="journey-intro">A simple, human process that helps change feel steady rather than overwhelming.</p>
          <ol>
            {steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-copy">
          <div className="section-index light">04 — Meet Vaishali</div>
          <h2>A good plan begins with being <em>heard.</em></h2>
          <p>Vaishali brings empathy, curiosity and clear thinking to every consultation. She listens closely, respects your food culture and helps turn healthy intentions into routines you can genuinely live with.</p>
          <div className="values">
            <span><Check size={13} /> Judgement-free</span>
            <span><Check size={13} /> Food-first</span>
            <span><Check size={13} /> Personally guided</span>
          </div>
          <blockquote><Quote size={23} />“The most effective plan is the one that helps you feel better and still feels like your life.”</blockquote>
        </div>
        <div className="about-image">
          <img src="/vaishali-portrait.png" alt="Vaishali smiling in her consultation space" loading="lazy" />
          <span>Nutrition & wellness consultant</span>
        </div>
      </section>

      <section className="outcomes">
        <div className="section-index">05 — What we&apos;re building</div>
        <div className="outcome-grid">
          <h2>Progress you can feel in everyday life.</h2>
          <div><b>01</b><h3>Calmer choices</h3><p>Less second-guessing at meals and more trust in yourself.</p></div>
          <div><b>02</b><h3>Steadier energy</h3><p>Food patterns that support your work, family and wellbeing.</p></div>
          <div><b>03</b><h3>Lasting skills</h3><p>Knowledge and routines that remain useful beyond a meal plan.</p></div>
        </div>
      </section>

      <section className="feedback" id="feedback">
        <div>
          <div className="section-index">06 — Community</div>
          <h2>Questions and feedback are always welcome.</h2>
          <p>Your message opens privately in WhatsApp, where you can review it before sending.</p>
        </div>
        <form action="https://api.whatsapp.com/send" method="get" target="_blank">
          <input type="hidden" name="phone" value="918003924522" />
          <label htmlFor="feedback-message">Your message</label>
          <textarea id="feedback-message" name="text" required minLength={10} placeholder="Hello Vaishali, I would like to share…" />
          <button type="submit">Continue to WhatsApp <Send size={15} /></button>
        </form>
      </section>

      <section className="faq">
        <div>
          <div className="section-index">07 — Good to know</div>
          <h2>Before we begin.</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>Are consultations available online?<span>+</span></summary>
            <p>Yes. You can connect privately from wherever you are, with follow-up guidance designed for your routine.</p>
          </details>
          <details>
            <summary>Will I have to stop eating my favourite foods?<span>+</span></summary>
            <p>No. Your plan uses familiar foods and flexible portions so it is realistic enough to continue.</p>
          </details>
          <details>
            <summary>What happens in the first consultation?<span>+</span></summary>
            <p>Vaishali explores your goals, health history, routine and preferences before recommending the right next step.</p>
          </details>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <div className="section-index light">08 — Start here</div>
          <h2>Ready for food to feel simpler?</h2>
          <p>Choose the way you would like to connect with Vaishali.</p>
        </div>
        <div className="contact-options">
          <a href="tel:+918003924522">
            <span><Phone size={18} /></span>
            <div><small>Direct phone call</small><b>+91 80039 24522</b></div>
            <ArrowRight size={18} />
          </a>
          <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer">
            <span><MessageCircle size={18} /></span>
            <div><small>WhatsApp</small><b>Message Vaishali</b></div>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-monogram">NV</span>
            <span><b>Nourish</b><small>by Vaishali</small></span>
          </a>
          <p>Personal nutrition care for real life.</p>
          <a href="#home">Back to top <ArrowUp size={13} /></a>
        </div>
        <div className="footer-small"><span>© 2026 Nourish by Vaishali</span><span>Personal · practical · possible</span></div>
      </footer>
    </main>
  );
}
