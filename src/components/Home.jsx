import React from 'react';
import '../css/home.css';
import "../index.css";
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      {/* hero */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">🐾 Crochet with purpose</p>
          <h1 className="hero-title">
            Stitch by stitch,<br />
            <em>sustainably.</em>
          </h1>
          <p className="hero-subtitle">
            Follow along crochet patterns in an easy to understand way, 
            learn to upcycle old garments into yarn, and play a clothing 
            material simulation game to see how each material changes
            with different conditions.
          </p>
          <div className="hero-buttons">
            <Link to="/stitch" className="btn-primary">Explore Patterns</Link>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-illustration">
        </div>
      </section>

      {/* about section */}
      <section className="section" id="about">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">About Our Product</p>
            <h2 className="section-title">
              Crochet<br /> in a planet-friendly way
            </h2>
            <p>
              As a beginner, crocheting can be frustrating when
              patterns are unclear, wasteful, and limits your creativity.
              We want to change that.
            </p>
            <p>
              Pawfect Stitch Co. translates intimidating stitch instructions into plain,
              follow-along language. Whether you're a total beginner or a seasoned hooker,
              we meet you where you are.
            </p>
          </div>
        </div>
      </section>

      {/* sustainability section */}
      <section className="sustain-section" id="sustainability">
        <div className="sustain-inner">
          <p className="section-label">Sustainability</p>
          <h2 className="section-title">
            Crafting a world<br />worth purring about
          </h2>
          <p className="sustain-intro">
            Fast fashion is one of the largest contributors to landfill waste. Crochet
            can be part of the solution, when we're intentional with our materials. 
            Here's how Pawfect Stitch Co. keeps it green.
          </p>

          <div className="sustain-grid">
            {[
              {
                tag: 'tag-pink',
                tagLabel: 'Upcycling',
                title: 'Rescuing Textiles from Landfill',
                desc: "Our tutorials show you how to turn thrifted knitwear back into usable yarn, cut old tees into continuous strips, and even crochet plastic bags into durable grocery totes or cleaning rags.",
              },
              {
                tag: 'tag-blue',
                tagLabel: 'Natural Fibers',
                title: 'No Plastic Yarn.',
                desc: "Polyester and acrylic yarns shed microplastics with every wash. We recommend wool, cotton, linen, bamboo, and recycled fiber options that are better for your skin and the planet.",
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

    </div>
  );
}