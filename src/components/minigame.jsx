import { useState, useRef, useEffect } from "react";
import "../css/minigame.css";
import "../css/index.css";
// function Minigame(){
//     return (
//         <>
//             <h1>Welcome to the Minigame Page</h1>
//         </>
//     );
// }
// >>>>>>> main

// ─── YARN DATA ────────────────────────────────────────────────────────────────
const YARNS = {
  Cotton: {
    type: "Natural",
    sustainable: "No",
    madeFrom: "Plants",
    howMade:
      "Cotton fibers are harvested from the cotton plant, cleaned, spun into yarn, and woven or knitted into fabric.",
    pros: ["Soft and comfortable", "Hypoallergenic", "Biodegradable", "Breathable"],
    cons: ["High water usage", "Pesticide-intensive", "Wrinkles easily", "Can shrink"],
    otherNames: "Organic cotton, Pima cotton, Egyptian cotton",
  },
  Wool: {
    type: "Natural",
    sustainable: "Yes",
    madeFrom: "Animals",
    howMade: "Wool is shorn from sheep, cleaned, carded, and spun into yarn.",
    pros: [
      "Odor-resistant",
      "Anti-microbial",
      "High warmth-to-weight ratio",
      "Absorbs and repels water",
      "Soft and comfortable",
      "Breathable",
    ],
    cons: [
      "Can be expensive",
      "May shrink if washed improperly",
      "Ethical concerns (animal welfare)",
      "Methane emissions from sheep",
    ],
    otherNames: "Merino wool, Cashmere, Mohair",
  },
  Polyester: {
    type: "Synthetic",
    sustainable: "No",
    madeFrom: "Plastic",
    howMade:
      "Polyester is produced by chemically reacting petroleum-based compounds to create plastic polymers that are melted and spun into fibers; fossil fuel is used in this process.",
    pros: [
      "Machine-washable",
      "Quick-drying",
      "Wrinkle-resistant",
      "Resistant to stretch and shrinkage",
      "Affordable",
    ],
    cons: [
      "Can stick to sweaty skin",
      "Generates static electricity",
      "Retains odors",
      "Not breathable",
      "Not biodegradable",
      "Releases microplastics",
    ],
    otherNames: "PET",
  },
  Acrylic: {
    type: "Synthetic",
    sustainable: "No",
    madeFrom: "Plastic",
    howMade:
      "Acrylic is made from petroleum-based chemicals that are polymerized and spun into synthetic fibers.",
    pros: ["Lightweight", "Warm", "Affordable", "Easy care"],
    cons: [
      "Not breathable",
      "Pills easily",
      "Releases microplastics",
      "Not biodegradable",
    ],
    otherNames: "Polyacrylonitrile",
  },
  Alpaca: {
    type: "Natural",
    sustainable: "Yes",
    madeFrom: "Animals",
    howMade:
      "Fiber is shorn from alpacas, cleaned, carded, and spun into yarn.",
    pros: [
      "Very soft",
      "Warmer than sheep's wool",
      "Hypoallergenic",
      "Durable",
      "Lightweight",
    ],
    cons: ["Expensive", "May stretch over time"],
    otherNames: "Baby alpaca, Suri alpaca, Huacaya alpaca",
  },
  Nylon: {
    type: "Synthetic",
    sustainable: "No",
    madeFrom: "Plastic",
    howMade:
      "Nylon is created through a chemical polymerization process using petroleum-based compounds that are melted and extruded into fibers.",
    pros: [
      "Very strong",
      "Elastic and stretchy",
      "Lightweight",
      "Quick-drying",
      "Resistant to abrasion",
    ],
    cons: [
      "Not biodegradable",
      "Made from fossil fuels",
      "Releases microplastics",
      "Can trap heat",
    ],
    otherNames: "Polyamide",
  },
  Bamboo: {
    type: "Semi-synthetic",
    sustainable: "Depends",
    madeFrom: "Plants",
    howMade:
      "Bamboo cellulose is chemically processed into pulp and regenerated into fibers.",
    pros: [
      "Soft and smooth",
      "Breathable",
      "Moisture-wicking",
      "Biodegradable",
    ],
    cons: [
      "Chemical-intensive processing",
      "Pollution from manufacturing",
      "Greenwashing concerns",
    ],
    otherNames: "Rayon, Viscose",
  },
  "Recycled Polyester": {
    type: "Synthetic",
    sustainable: "Yes",
    madeFrom: "Recycled materials",
    howMade:
      "Recycled polyester yarn is made by cleaning, melting, and respinning plastic waste such as water bottles into new polyester fibers.",
    pros: [
      "Eco-friendly",
      "Prevents plastic from reaching landfills and oceans",
      "Durable",
      "Quick-drying",
      "Wrinkle-resistant",
    ],
    cons: [
      "Recycling process requires energy",
      "Still releases microplastics",
      "Not biodegradable",
    ],
    otherNames: "rPET",
  },
};

const YARN_NAMES = Object.keys(YARNS);

// Wheel slice colours — 8 slots cycling brand palette
const YARN_COLORS = [
  "#ecc0cf",
  "#b5c7eb",
  "#dfd0c0",
  "#d4afc0",
  "#a3b7de",
  "#cfc0b0",
  "#e8c8d4",
  "#b8cce8",
];

// Quiz answer options per question
const Q1_OPTIONS = ["Natural", "Semi-synthetic", "Synthetic"];
const Q2_OPTIONS = ["Yes", "No", "Depends"];
const Q3_OPTIONS = ["Plants", "Animals", "Plastic", "Recycled materials"];

// ─── SPIN WHEEL ───────────────────────────────────────────────────────────────
const SpinWheel = ({ onResult, spinTrigger }) => {
  const canvasRef    = useRef(null);
  const animRef      = useRef(null);
  const currentAngle = useRef(0);
  const [spinning, setSpinning] = useState(false);
  const ARC = (2 * Math.PI) / YARN_NAMES.length;

  const draw = (rot) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const cx  = canvas.width  / 2;
    const cy  = canvas.height / 2;
    const r   = cx - 8;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Drop shadow
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.10)";
    ctx.shadowBlur  = 24;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.restore();

    // Slices
    YARN_NAMES.forEach((name, i) => {
      const start = rot + i * ARC;
      const end   = start + ARC;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, end);
      ctx.closePath();
      ctx.fillStyle   = YARN_COLORS[i];
      ctx.fill();
      ctx.strokeStyle = "#fdfdfd";
      ctx.lineWidth   = 2;
      ctx.stroke();

      // Label
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + ARC / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#1a1a1a";
      ctx.font      = "700 10px 'Nunito', sans-serif";
      ctx.fillText(name, r - 10, 4);
      ctx.restore();
    });

    // Outer border ring
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(0,0,0,0.06)";
    ctx.lineWidth   = 2;
    ctx.stroke();

    // Center hub
    ctx.beginPath();
    ctx.arc(cx, cy, 20, 0, Math.PI * 2);
    ctx.fillStyle   = "#fdfdfd";
    ctx.fill();
    ctx.strokeStyle = "#dfd0c0";
    ctx.lineWidth   = 3;
    ctx.stroke();
  };

  useEffect(() => { draw(0); }, []);
  useEffect(() => { if (spinTrigger > 0) spin(); }, [spinTrigger]);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);

    const extra      = 5 * 2 * Math.PI + Math.random() * 2 * Math.PI;
    const duration   = 3600;
    const startTime  = performance.now();
    const startAngle = currentAngle.current;
    const easeOut    = (t) => 1 - Math.pow(1 - t, 4);

    const step = (now) => {
      const t       = Math.min((now - startTime) / duration, 1);
      const current = startAngle + extra * easeOut(t);
      currentAngle.current = current;
      draw(current);

      if (t < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        setSpinning(false);
        const norm   = ((current % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const pAngle = (2 * Math.PI - norm + Math.PI * 1.5) % (2 * Math.PI);
        const idx    = Math.floor(pAngle / ARC) % YARN_NAMES.length;
        onResult(YARN_NAMES[idx], YARN_COLORS[idx]);
      }
    };

    animRef.current = requestAnimationFrame(step);
  };

  return (
    <div className="psc-wheel-wrap">
      <div className="psc-wheel-pointer" />
      <canvas
        ref={canvasRef}
        width={320}
        height={320}
        className="psc-wheel-canvas"
      />
    </div>
  );
};

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
const Quiz = ({ yarn }) => {
  const data = YARNS[yarn];

  // answers[0] = Q1 selection, [1] = Q2, [2] = Q3
  const [answers, setAnswers] = useState([null, null, null]);

  // Reset when yarn changes
  useEffect(() => { setAnswers([null, null, null]); }, [yarn]);

  const pick = (qIdx, option) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = option;
      return next;
    });
  };

  // Correct answers derived from data
  const correct = [
    data.type,
    // Q2 — match any option that starts with the data value
    data.sustainable.startsWith("Yes") ? "Yes"
      : data.sustainable.startsWith("No") ? "No"
      : "Depends",
    data.madeFrom,
  ];

  const questions = [
    { label: "1. What category does this yarn belong to?", options: Q1_OPTIONS },
    { label: "2. Is this yarn sustainable?",               options: Q2_OPTIONS },
    { label: "3. What is it made from?",                   options: Q3_OPTIONS },
  ];

  return (
    <div className="psc-quiz">
      {questions.map((q, qIdx) => (
        <div key={qIdx} className="psc-quiz-question">
          <p className="psc-quiz-label">{q.label}</p>
          <div className="psc-quiz-options">
            {q.options.map((opt) => {
              const selected  = answers[qIdx] === opt;
              const answered  = answers[qIdx] !== null;
              const isCorrect = opt === correct[qIdx];

              let cls = "psc-quiz-btn";
              if (selected && isCorrect)  cls += " psc-quiz-correct";
              if (selected && !isCorrect) cls += " psc-quiz-wrong";
              if (answered && !selected && isCorrect) cls += " psc-quiz-reveal";

              return (
                <button
                  key={opt}
                  className={cls}
                  onClick={() => !answered && pick(qIdx, opt)}
                  disabled={answered}
                >
                  {opt}
                  {selected && isCorrect  && " ✓"}
                  {selected && !isCorrect && " ✗"}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── ACCORDION ITEM ───────────────────────────────────────────────────────────
const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`psc-accordion-item${open ? " psc-accordion-open" : ""}`}>
      <button className="psc-accordion-trigger" onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <span className="psc-accordion-icon">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="psc-accordion-body">{children}</div>}
    </div>
  );
};

// ─── LEARN MORE ───────────────────────────────────────────────────────────────
const LearnMore = ({ yarn }) => {
  const data = YARNS[yarn];
  return (
    <div className="psc-learn">
      <p className="psc-card-title">Learn more about {yarn}</p>

      <AccordionItem title="✅ Pros">
        <ul className="psc-learn-list psc-learn-pros">
          {data.pros.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </AccordionItem>

      <AccordionItem title="⚠️ Cons">
        <ul className="psc-learn-list psc-learn-cons">
          {data.cons.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </AccordionItem>

      <AccordionItem title="🔬 How is it made?">
        <p className="psc-learn-text">{data.howMade}</p>
      </AccordionItem>

      <AccordionItem title="🏷️ Other names or types">
        <p className="psc-learn-text">{data.otherNames}</p>
      </AccordionItem>
    </div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function Minigame() {
  const [spunYarn,    setSpunYarn]    = useState(null);
  const [spunColor,   setSpunColor]   = useState(null);
  const [spinning,    setSpinning]    = useState(false);
  const [spinTrigger, setSpinTrigger] = useState(0);

  const handleSpinClick = () => {
    if (spinning) return;
    setSpinning(true);
    setSpinTrigger((t) => t + 1);
  };

  const handleSpinResult = (yarn, color) => {
    setSpunYarn(yarn);
    setSpunColor(color);
    setSpinning(false);
  };

  return (
    <div className="psc-page">

      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <header className="psc-page-header">
        <p className="psc-eyebrow">Mini Game</p>
        <h1 className="psc-page-title">Yarn <em>Roulette</em></h1>
        <p className="psc-page-sub">
          Spin the wheel to discover a yarn, then test your knowledge with a quick quiz!
        </p>
      </header>

      {/* ── GAME LAYOUT ─────────────────────────────────────────────── */}
      <main className="psc-game-layout">

        {/* ── LEFT — WHEEL ── */}
        <div className="psc-wheel-col">
          <div className="psc-wheel-card">
            <SpinWheel onResult={handleSpinResult} spinTrigger={spinTrigger} />
          </div>

          <button
            className="psc-spin-btn"
            onClick={handleSpinClick}
            disabled={spinning}
          >
            {spinning ? "⏳ Spinning…" : "🎲 Spin the Wheel!"}
          </button>

          {spunYarn && (
            <div className="psc-spun-result" style={{ background: spunColor }}>
              🧶 You got: <strong>{spunYarn}!</strong>
            </div>
          )}
        </div>

        {/* ── RIGHT — QUIZ + LEARN MORE ── */}
        <div className="psc-right-col">
          {!spunYarn ? (
            <div className="psc-card psc-prompt">
              <p>👈 Spin the wheel to get started!</p>
            </div>
          ) : (
            <>
              {/* Quiz */}
              <div className="psc-card">
                <p className="psc-card-title">Quick Quiz — {spunYarn}</p>
                <Quiz yarn={spunYarn} />
              </div>

              {/* Learn more */}
              <div className="psc-card">
                <LearnMore yarn={spunYarn} />
              </div>
            </>
          )}
        </div>

      </main>
    </div>
  );
}
