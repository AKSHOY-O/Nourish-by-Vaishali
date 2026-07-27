import {
  Apple,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  Clock3,
  HeartPulse,
  Leaf,
  MessageCircle,
  Phone,
  Quote,
  Scale,
  Sparkles,
} from "lucide-react";
import ImmersiveHero from "./ImmersiveHero";

const whatsapp =
  "https://wa.me/918003924522?text=Hello%20Vaishali%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation.";

const services = [
  {
    number: "01",
    icon: Scale,
    title: "Sustainable weight care",
    text: "Build habits that support your goals without crash diets, guilt or extreme restrictions.",
    image: "/hero-goal-new.jpg",
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "PCOS & metabolic health",
    text: "Food-first support for PCOS, thyroid health, insulin resistance and blood sugar.",
    image: "/hero-roadmap-new.jpg",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Gut health",
    text: "A thoughtful approach to bloating, acidity, irregular digestion and everyday comfort.",
    image: "/hero-real-life-desktop.jpg",
  },
  {
    number: "04",
    icon: Apple,
    title: "Everyday nutrition",
    text: "Simple meal systems for busy professionals, families, prenatal care and healthy ageing.",
    image: "/nourish-hero-premium.png",
  },
];

const steps = [
  ["Tell your story", "We begin with your health, routine, food preferences and the changes you want to feel."],
  ["Build your roadmap", "You receive clear nutrition guidance shaped around familiar Indian meals and real days."],
  ["Grow with support", "Follow-ups help you adjust, learn and create habits that remain useful long after the plan."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nourish by Vaishali, home">
          <span className="brand-mark">V</span>
          <span><b>Nourish</b><small>by Vaishali</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#philosophy">Philosophy</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="#contact">
          Contact <ArrowDown size={14} />
        </a>
      </header>

      <ImmersiveHero />

      <section className="promise-strip" aria-label="Practice highlights">
        <div><Sparkles size={15} /> Science-led</div>
        <div><Leaf size={15} /> Indian food friendly</div>
        <div><Clock3 size={15} /> Made for real schedules</div>
        <div><HeartPulse size={15} /> Judgement-free care</div>
      </section>

      <section className="philosophy section-pad" id="philosophy">
        <div className="section-label"><span>01</span> Philosophy</div>
        <div className="philosophy-grid">
          <h2>Healthier eating should feel like <em>more life,</em> not more rules.</h2>
          <div className="philosophy-copy">
            <p>Vaishali turns nutrition science into choices that make sense in your kitchen, your culture and your everyday routine.</p>
            <div className="signature-line">
              <span>Personal</span><i></i><span>Practical</span><i></i><span>Possible</span>
            </div>
          </div>
        </div>
        <div className="principle-cards">
          <article>
            <span>01</span>
            <h3>Listen before planning</h3>
            <p>Your story, symptoms and goals shape every recommendation.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Keep familiar food</h3>
            <p>Plans work with your favourite meals rather than replacing your life.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Teach lasting confidence</h3>
            <p>Understand your choices so progress does not depend on a rigid chart.</p>
          </article>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="services-heading">
          <div>
            <div className="section-label light"><span>02</span> Areas of care</div>
            <h2>Support designed around <em>your whole life.</em></h2>
          </div>
          <p>No two bodies or routines are the same. Each programme begins with a detailed conversation and becomes a plan built around you.</p>
        </div>
        <div className="service-list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.number}>
                <div className="service-image"><img src={service.image} alt="" loading="lazy" /></div>
                <span className="service-number">{service.number}</span>
                <span className="service-icon"><Icon size={20} /></span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ArrowUpRight className="service-arrow" size={19} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="process-visual">
          <video autoPlay muted loop playsInline preload="metadata" poster="/nourish-hero-premium.png" aria-label="Colourful, balanced food and nutrition">
            <source src="/nourish-story.mp4" type="video/mp4" />
          </video>
          <div className="visual-note"><Leaf size={16} /> A plan that moves with you</div>
        </div>
        <div className="process-copy">
          <div className="section-label"><span>03</span> Your journey</div>
          <h2>Clear steps.<br /><em>Calm progress.</em></h2>
          <p className="process-intro">A simple process that replaces confusion with clarity and gives you support without overwhelm.</p>
          <ol>
            {steps.map(([title, text], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-photo">
          <img src="/vaishali-portrait.png" alt="Vaishali, nutrition and wellness consultant" loading="lazy" />
          <span><Sparkles size={14} /> Your nutrition guide</span>
        </div>
        <div className="about-copy">
          <div className="section-label light"><span>04</span> Meet Vaishali</div>
          <h2>Warm guidance.<br /><em>Real understanding.</em></h2>
          <p>Vaishali brings curiosity, empathy and practical thinking to every consultation. She listens closely, respects your food culture and helps turn healthy intentions into routines you can actually live with.</p>
          <div className="about-values">
            <span><Check size={14} /> Judgement-free</span>
            <span><Check size={14} /> Food-first</span>
            <span><Check size={14} /> Personally guided</span>
          </div>
          <blockquote>
            <Quote size={21} />
            “The best plan is not the strictest one. It is the one that helps you feel better and still feels like your life.”
          </blockquote>
        </div>
      </section>

      <section className="feedback section-pad" id="feedback">
        <div className="feedback-intro">
          <div className="section-label"><span>05</span> Community</div>
          <h2>Your experience helps <em>care grow.</em></h2>
          <p>Questions, suggestions and feedback are always welcome. Your message goes privately to Vaishali through WhatsApp.</p>
        </div>
        <form className="feedback-form" action="https://api.whatsapp.com/send" method="get" target="_blank">
          <input type="hidden" name="phone" value="918003924522" />
          <label htmlFor="feedback-message">Share a thought</label>
          <textarea id="feedback-message" name="text" required minLength={10} placeholder="Hello Vaishali, I would like to share…" />
          <button type="submit">Send private feedback <ArrowUpRight size={17} /></button>
          <small>You can review your message in WhatsApp before sending.</small>
        </form>
      </section>

      <section className="faq section-pad">
        <div>
          <div className="section-label"><span>06</span> Good to know</div>
          <h2>Questions before<br />you begin.</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>Are consultations available online?<span><ArrowDown size={17} /></span></summary>
            <p>Yes. You can connect privately from wherever you are, with follow-up guidance designed for your routine.</p>
          </details>
          <details>
            <summary>Will I have to stop eating my favourite foods?<span><ArrowDown size={17} /></span></summary>
            <p>No. Your plan uses familiar foods and flexible portions so it is realistic enough to continue.</p>
          </details>
          <details>
            <summary>What happens in the first consultation?<span><ArrowDown size={17} /></span></summary>
            <p>Vaishali explores your goals, health history, routine and preferences before recommending the right next step.</p>
          </details>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-copy">
          <div className="section-label light"><span>07</span> Start here</div>
          <h2>Ready for food to feel <em>simpler?</em></h2>
          <p>Choose the way you would like to connect with Vaishali.</p>
        </div>
        <div className="contact-options">
          <a href="tel:+918003924522">
            <span><Phone size={20} /></span>
            <div><small>DIRECT PHONE CALL</small><b>+91 80039 24522</b></div>
            <ArrowRight size={20} />
          </a>
          <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer">
            <span><MessageCircle size={20} /></span>
            <div><small>WHATSAPP</small><b>Message Vaishali</b></div>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">V</span>
            <span><b>Nourish</b><small>by Vaishali</small></span>
          </a>
          <p>Personal nutrition care for real life.</p>
          <a href="#home">Back to top <ArrowUp size={14} /></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nourish by Vaishali</span>
          <span>Personal · practical · possible</span>
        </div>
      </footer>
    </main>
  );
}
