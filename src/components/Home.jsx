import React from 'react';
import './Home.css';

const CatWithYarn = () => (
  <svg viewBox="0 0 400 420" className="cat-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Tan blob background */}
    <ellipse cx="310" cy="300" rx="100" ry="100" fill="#dfd0c0" opacity="0.6" />
    {/* Pink blob */}
    <circle cx="200" cy="180" r="130" fill="#ecc0cf" opacity="0.5" />
    {/* Blue blob */}
    <circle cx="280" cy="320" r="95" fill="#b5c7eb" opacity="0.5" />

    {/* Cat body */}
    <ellipse cx="200" cy="300" rx="80" ry="90" fill="#2a2a2a" />

    {/* Cat head */}
    <circle cx="200" cy="190" r="80" fill="#2a2a2a" />

    {/* Ears */}
    <polygon points="140,140 120,90 165,130" fill="#2a2a2a" />
    <polygon points="260,140 280,90 235,130" fill="#2a2a2a" />
    {/* Ear inner pink */}
    <polygon points="143,135 127,100 160,128" fill="#ecc0cf" />
    <polygon points="257,135 273,100 240,128" fill="#ecc0cf" />

    {/* Eyes */}
    <circle cx="175" cy="188" r="14" fill="#4ecfb3" />
    <circle cx="225" cy="188" r="14" fill="#4ecfb3" />
    <circle cx="175" cy="188" r="8" fill="#1a1a1a" />
    <circle cx="225" cy="188" r="8" fill="#1a1a1a" />
    <circle cx="179" cy="184" r="3" fill="white" />
    <circle cx="229" cy="184" r="3" fill="white" />

    {/* Nose */}
    <ellipse cx="200" cy="208" rx="5" ry="4" fill="#ecc0cf" />

    {/* Mouth */}
    <path d="M196 212 Q200 218 204 212" stroke="#aaa" strokeWidth="1.5" fill="none" />
    <path d="M200 212 Q200 220 195 223" stroke="#aaa" strokeWidth="1.5" fill="none" />
    <path d="M200 212 Q200 220 205 223" stroke="#aaa" strokeWidth="1.5" fill="none" />

    {/* Whiskers left */}
    <line x1="130" y1="205" x2="185" y2="210" stroke="#ccc" strokeWidth="1.2" />
    <line x1="125" y1="215" x2="183" y2="215" stroke="#ccc" strokeWidth="1.2" />
    <line x1="130" y1="225" x2="185" y2="220" stroke="#ccc" strokeWidth="1.2" />
    {/* Whiskers right */}
    <line x1="215" y1="210" x2="270" y2="205" stroke="#ccc" strokeWidth="1.2" />
    <line x1="217" y1="215" x2="275" y2="215" stroke="#ccc" strokeWidth="1.2" />
    <line x1="215" y1="220" x2="270" y2="225" stroke="#ccc" strokeWidth="1.2" />

    {/* Paws */}
    <ellipse cx="155" cy="375" rx="28" ry="18" fill="#2a2a2a" />
    <ellipse cx="245" cy="375" rx="28" ry="18" fill="#2a2a2a" />

    {/* Paw toe beans */}
    {[145, 155, 165].map((x, i) => (
      <ellipse key={i} cx={x} cy={373} rx="5" ry="4" fill="#333" />
    ))}
    {[235, 245, 255].map((x, i) => (
      <ellipse key={i} cx={x} cy={373} rx="5" ry="4" fill="#333" />
    ))}

    {/* Yarn ball */}
    <circle cx="310" cy="350" r="48" fill="#b5c7eb" />
    {/* Yarn lines */}
    <ellipse cx="310" cy="350" rx="48" ry="22" fill="none" stroke="#9ab5e0" strokeWidth="2" />
    <ellipse cx="310" cy="350" rx="22" ry="48" fill="none" stroke="#9ab5e0" strokeWidth="2" />
    <line x1="265" y1="335" x2="358" y2="365" stroke="#9ab5e0" strokeWidth="1.5" />
    <line x1="265" y1="365" x2="358" y2="335" stroke="#9ab5e0" strokeWidth="1.5" />
    {/* Yarn strand from ball to paw */}
    <path d="M270 345 Q230 330 200 360 Q180 370 165 370"
      stroke="#b5c7eb" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* Tail */}
    <path d="M270 330 Q330 290 340 240 Q345 210 320 220"
      stroke="#2a2a2a" strokeWidth="20" strokeLinecap="round" fill="none" />
  </svg>
);

const YarnDoodle = ({ color = '#ecc0cf', size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="26" fill={color} opacity="0.8" />
    <ellipse cx="30" cy="30" rx="26" ry="12" fill="none" stroke="white" strokeWidth="1.8" opacity="0.5" />
    <ellipse cx="30" cy="30" rx="12" ry="26" fill="none" stroke="white" strokeWidth="1.8" opacity="0.5" />
    <line x1="7" y1="23" x2="53" y2="37" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <line x1="7" y1="37" x2="53" y2="23" stroke="white" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

const PawPrint = ({ color = '#1a1a1a', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="15" rx="5" ry="6" />
    <circle cx="6" cy="9" r="2.5" />
    <circle cx="18" cy="9" r="2.5" />
    <circle cx="9" cy="6" r="2" />
    <circle cx="15" cy="6" r="2" />
  </svg>
);

const LeafIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

export default function HomePage() {
  return (
    <div>
      {/* ─── NAV ─── */}
      <nav>
        <div className="nav-logo">
          <PawPrint size={20} />
          <span>Pawfect Stitch Co.</span>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/learn">Learn Stitches</a></li>
          <li><a href="/upcycle">Upcycle</a></li>
          <li><a href="/minigame">Mini Game</a></li>
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">🐾 Crochet with purpose</p>
          <h1 className="hero-title">
            Stitch by stitch,<br />
            <em>sustainably.</em>
          </h1>
          <p className="hero-subtitle">
            Follow along crochet patterns in plain language, learn to upcycle old
            garments into yarn, and calculate exactly how much you need — no waste,
            no guesswork, just cozy crafting.
          </p>
          <div className="hero-buttons">
            <a href="#patterns" className="btn-primary">Explore Patterns</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-illustration">
          <CatWithYarn />
        </div>
      </section>

      {/* ─── FEATURES STRIP ─── */}
      <div className="features-strip">
        {[
          { icon: '🧶', label: 'Stitch Breakdowns' },
          { icon: '♻️', label: 'Upcycling Tutorials' },
          { icon: '🌿', label: 'Eco-Friendly Picks' },
          { icon: '🧮', label: 'Yarn Calculator' },
        ].map((f) => (
          <div className="feature-pill" key={f.label}>
            <span className="pill-icon">{f.icon}</span>
            {f.label}
          </div>
        ))}
      </div>

      {/* ─── ABOUT SECTION ─── */}
      <section className="section" id="about">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">About Our Product</p>
            <h2 className="section-title">
              Crochet made clear,<br />kind, & planet-friendly
            </h2>
            <p>
              Pawfect Stitch Co. was born from a simple frustration: crochet patterns
              are often cryptic, wasteful, and out of touch with the modern maker who
              cares about their footprint. We wanted to change that.
            </p>
            <p>
              Our platform translates intimidating stitch instructions into plain,
              follow-along language — with a built-in digital counter so you never
              lose your place. Whether you're a total beginner or a seasoned hooker,
              we meet you where you are.
            </p>
            <p>
              From breathable linen dishcloths to cozy oversized cardigans, every
              project comes with a sizing calculator that adapts to real bodies and
              real yarn — not just what the pattern assumes.
            </p>
          </div>

          <div className="about-cards">
            {[
              {
                icon: '🧶',
                title: 'Plain-Language Patterns',
                desc: 'No more cryptic abbreviations. Every stitch explained in plain English with a tap-to-count digital counter.',
              },
              {
                icon: '🪡',
                title: 'Upcycling Guides',
                desc: "Transform old t-shirts, sweaters, and even plastic bags into crochet-ready yarn. Give materials a second life.",
              },
              {
                icon: '🧮',
                title: 'Smart Yarn Calculator',
                desc: "Enter your yarn's weight and length and we'll tell you exactly how many balls you need — size inclusive.",
              },
              {
                icon: '🌱',
                title: 'Sustainable Shop Picks',
                desc: "We only recommend hooks and yarn made from natural or recycled fibers — no polyester, ever.",
              },
            ].map((c) => (
              <div className="about-card" key={c.title}>
                <span className="card-icon">{c.icon}</span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUSTAINABILITY SECTION ─── */}
      <section className="sustain-section" id="sustainability">
        <div className="sustain-inner">
          <p className="section-label">Sustainability</p>
          <h2 className="section-title">
            Crafting a world<br />worth purring about
          </h2>
          <p className="sustain-intro">
            Fast fashion is one of the largest contributors to landfill waste. Crochet
            can be part of the solution — but only when we're intentional. Here's how
            Pawfect Stitch Co. keeps it green.
          </p>

          <div className="sustain-grid">
            {[
              {
                num: '01',
                tag: 'tag-pink',
                tagLabel: 'Upcycling',
                title: 'Rescuing Textiles from Landfill',
                desc: "Our tutorials show you how to unravel thrifted knitwear back into usable yarn, cut old tees into continuous strips, and even crochet plastic bags into durable grocery totes or cleaning rags.",
              },
              {
                num: '02',
                tag: 'tag-blue',
                tagLabel: 'Natural Fibers',
                title: 'No Plastic Yarn. Ever.',
                desc: "Polyester and acrylic yarns shed microplastics with every wash. We exclusively recommend wool, cotton, linen, bamboo, and recycled fiber options that are kind to your skin and the planet.",
              },
              {
                num: '03',
                tag: 'tag-tan',
                tagLabel: 'Less Waste',
                title: 'Buy Only What You Need',
                desc: "Our yarn calculator accounts for your actual yarn's length (not just weight), your size, and your gauge — so you order the right amount the first time and avoid wasteful re-orders or leftover balls.",
              },
            ].map((c) => (
              <div className="sustain-card" key={c.num}>
                <span className="sustain-num">{c.num}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className={`sustain-tag ${c.tag}`}>{c.tagLabel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="cta-section" id="get-started">
        <div className="cta-inner">
          <div style={{ marginBottom: '1rem' }}>
            <YarnDoodle color="#ecc0cf" size={56} />
          </div>
          <p className="section-label">Ready to stitch?</p>
          <h2 className="section-title">
            Your first stitch starts<br />right here, right now
          </h2>
          <p>
            Dive into our beginner-friendly pattern library, calculate your yarn
            before you buy, or watch our first upcycling tutorial. The crafty,
            sustainable life is only a click away.
          </p>
          <div className="cta-buttons">
            <a href="#patterns" className="btn-primary">Browse Patterns</a>
            <a href="#calculator" className="btn-secondary">Yarn Calculator</a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer>
        <div className="footer-logo">🐾 Pawfect Stitch Co.</div>
        <span>Made with 🧶 and a whole lot of cat hair.</span>
        <span>© {new Date().getFullYear()} Pawfect Stitch Co.</span>
      </footer>
    </div>
  );
}