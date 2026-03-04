import React, { useState, useEffect, useRef } from 'react';
import '../css/home.css';
import "../index.css";
import gray_cat from "../images/gray_cat.png";
import pink_yarn from "../images/pink_yarn.png";
import { Link } from 'react-router-dom';

function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const seen = sessionStorage.getItem('pawfect_welcome_seen');
    if (!seen) {
      setVisible(true);
      sessionStorage.setItem('pawfect_welcome_seen', 'true');
    }
  }, []);

  /* close welcome popup when clicking out of it */
  useEffect(() => {
    if (!visible) return;
    const handleClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="welcome-overlay">
      <div className="welcome-card" ref={cardRef}>
        <div className="welcome-blob welcome-blob-pink" />
        <div className="welcome-blob welcome-blob-blue" />
        <div className="welcome-content">
          <h2 className="welcome-title">Welcome to<br />Pawfect Stitch Co.</h2>
          <p className="welcome-subtitle">
            Your cozy corner for sustainable crochet!
          </p>
          <div className="welcome-tags">
            <span className="welcome-tag tag-pink">Learn</span>
            <span className="welcome-tag tag-blue">Upcycling</span>
            <span className="welcome-tag tag-tan">Minigame</span>
          </div>
          <button className="welcome-btn" onClick={() => setVisible(false)}>
            Let's get stitching
          </button>
          <button className="welcome-close" onClick={() => setVisible(false)}>✕</button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <WelcomePopup />

      {/* hero */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">🐾 Crochet with purpose</p>
          <h1 className="hero-title">
            Stitch by stitch,<br />
            <em>sustainably.</em>
          </h1>
          <p className="hero-subtitle">
            Follow along crochet stitch tutorials, 
            learn how to upcycle wastes such as old garments and plastic bags into yarn, 
            and play a yarn roulette game to test your knowledge on different materials.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn-primary">About Us</a>
            <a href="#get-started" className="btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-illustration">
          <img src={gray_cat} alt="gray cat"/>
        </div>
        <div className="hero-circle-tan"></div>
        <a href="#get-started" className="scroll-hint" aria-label="Scroll down for more">
          <span className="scroll-hint-text">Scroll to explore</span>
          <span className="scroll-hint-arrow">↓</span>
        </a>
      </section>

      {/* get started guide */}
      <section className="get-started-section" id="get-started">
        <div className="get-started-inner">
          <h1 className="section-title">Get Started Guide</h1>
          <p className="get-started-intro">
            Here's a quick guide to everything Pawfect Stitch Co. has to offer
          </p>
          <div className="get-started-grid">
            {[
              {
                page: 'Stitch',
                title: 'Learn Crochet Stitches',
                desc: 'Browse stitch tutorials — each card breaks down the abbreviation, shows a pattern example, translation into plain English, and links to a video walkthrough. Perfect for beginners.',
                link: '/stitch',
              },
              {
                page: 'Upcycle',
                title: 'Upcycle Materials into Yarn',
                desc: 'Discover how to turn plastic bags into plarn, old t-shirts into t-shirt yarn, and leftover projects into fresh material. Every card links to a video tutorial and a resource guide.',
                link: '/upcycle',
              },
              {
                page: 'Minigame',
                title: 'Play Yarn Roulette',
                desc: 'Spin the wheel to land on a random yarn type, then answer a short quiz to test your knowledge on it. Expand the Learn More section to dig deeper after each spin.',
                link: '/minigame',
              },
            ].map((item, i) => (
              <Link to={item.link} className="gs-card" key={i} onClick={() => window.scrollTo(0,0)}>
                <span className="gs-page-label">{item.page}</span>
                <h3 className="gs-title">{item.title}</h3>
                <p className="gs-desc">{item.desc}</p>
                <span className="gs-cta">Go to {item.page} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="section" id="about">
        <div className="about-grid">
          <div className="section-illustration">
            <img src={pink_yarn} alt="pink yarn"/>
          </div>
          <div className="about-text">
            <p className="section-label">About Our Product</p>
            <h1 className="section-title">
              Crochet<br /> in a planet-friendly way
            </h1>
            <p>
              As a beginner, crocheting can be frustrating when patterns are unclear, 
              wasteful, and limits your creativity. We want to change that.
            </p>
            <p>
              Pawfect Stitch Co. walks through intimidating stitch instructions in an easy to 
              follow-along language. Whether you're a beginner or a seasoned hooker, we 
              meet you where you are.
            </p>
          </div>
        </div>
      </section>

      {/* sustainability section */}
      <section className="sustain-section" id="sustainability">
        <div className="sustain-inner">
          <p className="section-label">Sustainability</p>
          <h1 className="section-title">
            Crafting a world<br />worth purring about
          </h1>
          <p className="sustain-intro">
            Fast fashion is one of the largest contributors to landfill waste. Crochet
            can be part of the solution when we're intentional with our materials. 
            Here's how Pawfect Stitch Co. keeps it green.
          </p>

          <div className="sustain-grid">
            {[
              {
                tag: 'tag-pink',
                tagLabel: 'Upcycling',
                title: 'Rescuing Textiles from Landfill',
                desc: "Our tutorials show you how to turn thrifted knitwear back into usable yarn, cut old t-shirts into continuous strips, and even crochet plastic bags into durable grocery totes or cleaning rags.",
                link: '/upcycle',
              },
              {
                tag: 'tag-blue',
                tagLabel: 'Natural Fibers',
                title: 'No Plastic Yarn.',
                desc: "Polyester and acrylic yarns shed microplastics with every wash. We recommend wool, cotton, linen, bamboo, and recycled fiber options that are better for your skin and the planet.",
                link: '/minigame',
              },
            ].map((c, i) => (
              <Link
                to={c.link}
                key={i}
                className="sustain-card"
                onClick={() => window.scrollTo(0,0)}
              >
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className={'sustain-tag ${c.tag}'}>{c.tagLabel}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}