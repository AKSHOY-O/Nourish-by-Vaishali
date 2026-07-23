import { Activity, Apple, ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Check, CircleDot, Heart, HeartPulse, MessageCircle, Phone, Salad, Search, Sparkles, Sprout, Sun, TrendingUp, Utensils } from "lucide-react";

const whatsapp = "https://wa.me/918003924522?text=Hello%20Vaishali%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation.";

const services = [
  { icon: Activity, title: "Sustainable Weight Care", text: "Build a calmer, healthier relationship with food while working towards lasting weight goals.", tone: "green" },
  { icon: HeartPulse, title: "PCOS & Metabolic Health", text: "Practical nutrition support for PCOS, thyroid health, insulin resistance and blood sugar.", tone: "peach" },
  { icon: Salad, title: "Gut Health", text: "A thoughtful food-first approach for bloating, acidity, irregular digestion and everyday comfort.", tone: "sand" },
  { icon: Apple, title: "Everyday Nutrition", text: "Simple meal systems for busy professionals, families, prenatal care and healthy ageing.", tone: "cream" },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <div className="nav-wrap">
        <a className="logo" href="#home"><span>V</span><div><b>NOURISH</b><small>by Vaishali</small></div></a>
        <nav aria-label="Main navigation"><a href="#approach">Approach</a><a href="#services">Services</a><a href="#journey">Your journey</a><a href="#feedback">Feedback</a><a href="#faq">FAQs</a></nav>
        <a className="nav-book" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Book a nutrition consultation on WhatsApp">Book a consultation <span><ArrowUpRight size={15}/></span></a>
      </div>
    </header>

    <section className="new-hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-main">
        <div className="status"><i></i> Online consultations open</div>
        <h1>Good food.<br/><em>Clear guidance.</em><br/>A healthier you.</h1>
        <p>Personalised nutrition that fits Indian food, busy schedules and real life—without crash diets, guilt or confusing rules.</p>
        <div className="hero-cta">
          <a className="cta cta-dark" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <b><ArrowUpRight size={16}/></b></a>
          <a className="cta cta-light" href="tel:+918003924522">Call +91 80039 24522 <b><ArrowRight size={16}/></b></a>
        </div>
        <div className="micro-trust"><span><Check size={11}/> Personal plans</span><span><Check size={11}/> Indian food friendly</span><span><Check size={11}/> Ongoing support</span></div>
      </div>
      <div className="hero-bento">
        <div className="food-card"><img src="/nourish-hero-premium.png" alt="A colourful balanced Indian-inspired meal"/><span>Eat better,<br/>not less.</span><i className="image-badge">Made for real life</i></div>
        <div className="metric-card"><small>THE GOAL</small><strong>Feel good<br/>every day.</strong><div className="metric-line"><i></i></div></div>
        <div className="plan-card"><span>01</span><div><b>Personal roadmap</b><small>Made around your body, routine and preferences.</small></div></div>
      </div>
    </section>

    <section className="ticker" aria-label="Nutrition philosophy"><div><span>NO CRASH DIETS</span><i>✦</i><span>REAL INDIAN MEALS</span><i>✦</i><span>SCIENCE-BACKED CARE</span><i>✦</i><span>SMALL STEPS, LASTING CHANGE</span></div></section>

    <section className="intro section" id="approach">
      <div className="kicker">01 / A DIFFERENT APPROACH</div>
      <div className="intro-grid"><h2>Nutrition that works <em>with your life,</em> not against it.</h2><div><p>Vaishali turns complex nutrition advice into realistic everyday choices. Your plan begins with your health, your food culture and your routine—then grows with you.</p><a href="#journey">How it works <span><ArrowDown size={14}/></span></a></div></div>
      <div className="values-grid"><article><span><Search size={18}/></span><h3>Listen first</h3><p>Your story matters more than a generic food chart.</p><i>Personal</i></article><article><span><Utensils size={18}/></span><h3>Keep it practical</h3><p>Familiar meals, flexible choices and realistic routines.</p><i>Flexible</i></article><article><span><Sparkles size={18}/></span><h3>Build confidence</h3><p>Understand your body and make decisions without fear.</p><i>Lasting</i></article></div>
    </section>

    <section className="meet-vaishali section" aria-labelledby="meet-vaishali-title">
      <div className="meet-card">
        <div className="meet-photo">
          <img src="/vaishali-portrait.png" alt="Vaishali, nutrition and wellness consultant" loading="lazy" decoding="async"/>
          <span className="meet-badge"><Sprout size={14}/> YOUR NUTRITION GUIDE</span>
        </div>
        <div className="meet-content">
          <div className="kicker light">MEET VAISHALI</div>
          <h2 id="meet-vaishali-title">Guidance that feels<br/><em>personal and possible.</em></h2>
          <p>Vaishali brings warmth, curiosity and practical thinking to every consultation. Her approach starts with listening, respects your food culture and turns healthy choices into routines that fit everyday life.</p>
          <div className="meet-points"><span><Check size={13}/> Judgement-free care</span><span><Check size={13}/> Realistic Indian meals</span><span><Check size={13}/> Clear ongoing support</span></div>
          <a className="cta cta-white" href={whatsapp} target="_blank" rel="noreferrer">Talk to Vaishali <b><ArrowUpRight size={16}/></b></a>
        </div>
      </div>
    </section>

    <section className="services-new section" id="services">
      <div className="section-top"><div><div className="kicker">02 / HOW I CAN HELP</div><h2>Support for the health<br/>you want to build.</h2></div><p>Every service starts with a detailed conversation and becomes a plan created specifically for you.</p></div>
      <div className="services-bento">{services.map((service, i)=>{const Icon=service.icon;return <article className={service.tone} key={service.title}><div className="service-top"><span><Icon size={25}/></span><small>0{i+1}</small></div><h3>{service.title}</h3><p>{service.text}</p><a href={whatsapp} target="_blank" rel="noreferrer">Discuss this goal <b><ArrowUpRight size={16}/></b></a></article>})}</div>
    </section>

    <section className="visual-story section">
      <div className="visual-heading"><div><div className="kicker">FOOD THAT FEELS GOOD</div><h2>Beautifully balanced.<br/><em>Completely achievable.</em></h2></div><p>Healthy eating can be colourful, familiar and deeply satisfying. The focus is progress—not perfection.</p></div>
      <div className="photo-mosaic">
        <figure className="photo-large"><img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=88" alt="Wholesome ingredients for balanced everyday meals" loading="lazy" decoding="async"/><figcaption><span>01</span> Fresh, familiar ingredients</figcaption></figure>
        <figure className="photo-small"><img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=900&q=88" alt="Colourful nourishing food prepared with care" loading="lazy" decoding="async"/><figcaption><span>02</span> Real food, real joy</figcaption></figure>
        <div className="photo-quote"><Sparkles size={24}/><p>“A good plan should fit your life beautifully.”</p><small>THE NOURISH PHILOSOPHY</small></div>
        <figure className="photo-wide"><img src="https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=1200&q=88" alt="Healthy meal preparation in a welcoming kitchen" loading="lazy" decoding="async"/><figcaption><span>03</span> Skills that last beyond the plan</figcaption></figure>
      </div>
    </section>

    <section className="difference section">
      <div className="difference-card">
        <div className="difference-copy"><div className="kicker light">MORE THAN A MEAL PLAN</div><h2>Imagine feeling<br/><em>better in your day.</em></h2><p>The right nutrition plan should change how life feels—not just what appears on your plate.</p></div>
        <div className="outcome-cloud"><span><i><Sun size={15}/></i> Steadier energy</span><span><i><Heart size={15}/></i> Food confidence</span><span><i><CircleDot size={15}/></i> Calmer digestion</span><span><i><TrendingUp size={15}/></i> Sustainable habits</span><span><i><Sprout size={15}/></i> Better routines</span></div>
      </div>
    </section>

    <section className="journey" id="journey">
      <div className="journey-inner">
        <div className="journey-copy"><div className="kicker light">03 / YOUR JOURNEY</div><h2>From confused to<br/><em>confident.</em></h2><p>A simple, supportive process that gives you clarity without overwhelming you.</p><a className="cta cta-white" href={whatsapp} target="_blank" rel="noreferrer">Start your journey <b><ArrowUpRight size={16}/></b></a></div>
        <ol><li><span>1</span><div><b>Connect</b><p>Call or WhatsApp to share your goals and choose the right consultation.</p></div></li><li><span>2</span><div><b>Understand</b><p>We explore your health history, routine, preferences and challenges.</p></div></li><li><span>3</span><div><b>Personalise</b><p>Receive a clear food and lifestyle roadmap made around your real life.</p></div></li><li><span>4</span><div><b>Grow</b><p>Get follow-up support, practical adjustments and steady accountability.</p></div></li></ol>
      </div>
    </section>

    <section className="contact-band section">
      <div><div className="kicker">TAKE THE FIRST STEP</div><h2>Let’s make healthy eating<br/><em>feel simple again.</em></h2></div>
      <div className="contact-options"><a href="tel:+918003924522"><span><Phone size={18}/></span><div><small>CALL DIRECTLY</small><b>+91 80039 24522</b></div><i><ArrowRight size={17}/></i></a><a className="wa" href={whatsapp} target="_blank" rel="noreferrer"><span><MessageCircle size={18}/></span><div><small>WHATSAPP</small><b>Start a conversation</b></div><i><ArrowUpRight size={17}/></i></a></div>
    </section>

    <section className="feedback section" id="feedback" aria-labelledby="feedback-title">
      <div className="feedback-shell">
        <div className="feedback-copy"><div className="kicker light">04 / COMMUNITY FEEDBACK</div><h2 id="feedback-title">Your experience<br/><em>helps care grow.</em></h2><p>Have a suggestion, question or kind word? Share it directly with Vaishali. Every message is read privately and helps make the experience better.</p><div className="feedback-trust"><span><Check size={13}/> No account needed</span><span><Check size={13}/> Private WhatsApp message</span></div></div>
        <form className="feedback-form" action="https://api.whatsapp.com/send" method="get" target="_blank">
          <input type="hidden" name="phone" value="918003924522"/>
          <label htmlFor="feedback-message">Write your feedback</label>
          <textarea id="feedback-message" name="text" minLength={10} required placeholder="Hello Vaishali, I would like to share my feedback…"/>
          <button type="submit">Send feedback on WhatsApp <ArrowUpRight size={17}/></button>
          <small>Your feedback opens in WhatsApp so you can review it before sending.</small>
        </form>
      </div>
    </section>

    <section className="faq-new section" id="faq"><div><div className="kicker">05 / FAQs</div><h2>A few things<br/>you may wonder.</h2></div><div className="faq-list"><details open><summary>Are consultations available online?</summary><p>Yes. You can connect privately from wherever you are, with follow-up guidance designed for your routine.</p></details><details><summary>Will I need to stop eating my favourite foods?</summary><p>No. The plan uses familiar foods and flexible portions so it is realistic enough to continue.</p></details><details><summary>How do I book my first consultation?</summary><p>Call +91 80039 24522 or send a WhatsApp message. Vaishali will help you choose the most suitable next step.</p></details></div></section>

    <footer><div className="footer-main"><a className="logo footer-logo" href="#home"><span>V</span><div><b>NOURISH</b><small>by Vaishali</small></div></a><p>Personal nutrition care for real life.</p><div className="footer-links"><a href="tel:+918003924522">+91 80039 24522</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={12}/></a></div></div><div className="footer-bottom"><span>© 2026 Nourish by Vaishali</span><a href="#home">Back to top <ArrowUp size={12}/></a></div></footer>
    <a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Vaishali on WhatsApp"><span><MessageCircle size={17}/></span><b>WhatsApp</b></a>
  </main>
}
