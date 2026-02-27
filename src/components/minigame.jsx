import { useState, useRef, useEffect } from "react";
import "../index.css";
import "../css/minigame.css";
import glasses_cat from "../images/glasses_cat.png";

// ─── YARN DATA ────────────────────────────────────────────────────────────────
const YARNS = {
    Cotton: {
        type: "Natural",
        sustainable: "No",
        madeFrom: "Plants",
        howMade: "Cotton fibers are harvested from the cotton plant, cleaned, and spun into yarn.",
        pros: ["Soft and comfortable", "Hypoallergenic", "Biodegradable", "Breathable"],
        cons: ["High water usage", "Pesticide-intensive", "Wrinkles easily", "Can shrink"],
        otherNames: "Organic cotton, Pima cotton, Egyptian cotton",
    },
    Wool: {
        type: "Natural",
        sustainable: "Yes",
        madeFrom: "Animals",
        howMade: "Wool is shorn from sheep, cleaned, carded, and spun into yarn.",
        pros: ["Odor-resistant", "Anti-microbial", "High warmth-to-weight ratio", "Absorbs and repels water", "Soft and comfortable", "Breathable"],
        cons: ["Can be expensive", "Hard to clean, often requires hand-washing in cold water and air drying", "May shrink and felt if washed improperly", "Ethical concerns (animal welfare)", "Methane emissions from sheep"],
        otherNames: "Merino wool, Cashmere, Mohair",
    },
    Polyester: {
        type: "Synthetic",
        sustainable: "No",
        madeFrom: "Plastic",
        howMade: "Polyester uses fossil fuels and derives various chemicals from petroleum to create plastic polymers that are then melted and spun into fibers. Polyester requires fossil fuels in its direct production.",
        pros: ["Machine-washable", "Quick-drying", "Wrinkle-resistant", "Resistant to stretch and shrinkage", "Affordable"],
        cons: ["Sticks to sweaty skin", "Retains odors", "Not breathable", "Not biodegradable", "Releases microplastics", "Requires fossil fuels to produce", "Production pollutes the air"],
        otherNames: "PET",
    },
    Acrylic: {
        type: "Synthetic",
        sustainable: "No",
        madeFrom: "Plastic",
        howMade: "Acrylic is made from petroleum-based chemicals that are polymerized and spun into synthetic fibers.",
        pros: ["Lightweight", "Warm", "Affordable", "Easy care"],
        cons: ["Not breathable", "Pills easily", "Releases microplastics", "Not biodegradable"],
        otherNames: "Polyacrylonitrile",
    },
    Alpaca: {
        type: "Natural",
        sustainable: "Yes",
        madeFrom: "Animals",
        howMade: "Fiber is shorn from alpacas, cleaned, carded, and spun into yarn.",
        pros: ["Very soft", "Warmer than sheep's wool", "Hypoallergenic", "Durable", "Lightweight"],
        cons: ["Expensive", "May stretch over time"],
        otherNames: "Baby alpaca, Suri alpaca, Huacaya alpaca",
    },
    Nylon: {
        type: "Synthetic",
        sustainable: "No",
        madeFrom: "Plastic",
        howMade: "Nylon is created through a chemical polymerization process using petroleum-based compounds that are melted and extruded into fibers.",
        pros: ["Very strong", "Elastic and stretchy", "Lightweight", "Quick-drying", "Resistant to abrasion"],
        cons: ["Not biodegradable", "Made from fossil fuels", "Releases microplastics", "Can trap heat"],
        otherNames: "Polyamide",
    },
    Bamboo: {
        type: "Semi-synthetic",
        sustainable: "Depends",
        madeFrom: "Plants",
        howMade: "Bamboo cellulose is chemically processed into pulp and regenerated into fibers.",
        pros: ["Soft and smooth", "Breathable", "Moisture-wicking", "Biodegradable"],
        cons: ["Chemical-intensive processing", "Pollution from manufacturing", "Greenwashing concerns"],
        otherNames: "Rayon, Viscose",
    },
    "Recycled Polyester": {
        type: "Synthetic",
        sustainable: "Yes",
        madeFrom: "Recycled materials",
        howMade: "Recycled polyester yarn is made by cleaning, melting, and respinning plastic waste such as water bottles into new polyester fibers.",
        pros: ["Eco-friendly", "Prevents plastic from reaching landfills and oceans", "Durable", "Quick-drying", "Wrinkle-resistant"],
        cons: ["Recycling process requires energy", "Releases microplastics", "Not biodegradable"],
        otherNames: "rPET",
    },
};

const YARN_NAMES = Object.keys(YARNS);
const YARN_COLORS = [
    "#ecc0cf", "#b5c7eb", "#dfd0c0", "#d4afc0",
    "#a3b7de", "#cfc0b0", "#e8c8d4", "#b8cce8",
];

const Q1_OPTIONS = ["Natural", "Semi-synthetic", "Synthetic"];
const Q2_OPTIONS = ["Yes", "No", "Depends"];
const Q3_OPTIONS = ["Plants", "Animals", "Plastic", "Recycled materials"];

// ─── SPIN WHEEL ───────────────────────────────────────────────────────────────
function SpinWheel({ onResult, spinTrigger }) {
    const canvasRef = useRef(null);
    const animRef   = useRef(null);
    const currentAngle = useRef(0);
    const [spinning, setSpinning] = useState(false);
    const ARC = (2 * Math.PI) / YARN_NAMES.length;

    // Render at 2× physical pixels for crisp text
    const LOGICAL = 340;
    const SCALE   = 2;
    const PHYSICAL = LOGICAL * SCALE;

    const draw = (rot) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx  = canvas.getContext("2d");
        const half = PHYSICAL / 2;
        const r    = half - 20 * SCALE;

        ctx.clearRect(0, 0, PHYSICAL, PHYSICAL);

        // Border rings
        ctx.beginPath();
        ctx.arc(half, half, r + 14 * SCALE, 0, Math.PI * 2);
        ctx.fillStyle = "#ecc0cf";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(half, half, r + 7 * SCALE, 0, Math.PI * 2);
        ctx.fillStyle = "#d4a0b5";
        ctx.fill();

        // Slices
        YARN_NAMES.forEach((name, i) => {
            const start = rot + i * ARC;
            const end   = start + ARC;

            ctx.beginPath();
            ctx.moveTo(half, half);
            ctx.arc(half, half, r, start, end);
            ctx.closePath();
            ctx.fillStyle = YARN_COLORS[i];
            ctx.fill();
            ctx.strokeStyle = "#fff";
            ctx.lineWidth   = 4 * SCALE;
            ctx.stroke();

            ctx.save();
            ctx.translate(half, half);
            ctx.rotate(start + ARC / 2);
            ctx.textAlign = "right";
            ctx.fillStyle = "#1a1a1a";

            if (name === "Recycled Polyester") {
                ctx.font = `bold ${18 * SCALE}px 'Nunito', sans-serif`;
                ctx.fillText("Recycled", r - 16 * SCALE, -5 * SCALE);
                ctx.fillText("Polyester", r - 16 * SCALE, 14 * SCALE);
            } else {
                ctx.font = `bold ${21 * SCALE}px 'Nunito', sans-serif`;
                ctx.fillText(name, r - 18 * SCALE, 5 * SCALE);
            }

            ctx.restore();
        });

        // Center hub
        ctx.beginPath();
        ctx.arc(half, half, 15 * SCALE, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.strokeStyle = "#d4a0b5";
        ctx.lineWidth   = 3 * SCALE;
        ctx.stroke();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width  = PHYSICAL;
        canvas.height = PHYSICAL;
        canvas.style.width  = LOGICAL + "px";
        canvas.style.height = LOGICAL + "px";
        draw(0);
    }, []);

    useEffect(() => {
        if (spinTrigger > 0) spin();
    }, [spinTrigger]);

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
        <div className="wheel-wrap">
            <div className="wheel-pointer" />
            <canvas ref={canvasRef} className="wheel-canvas" />
        </div>
    );
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function Quiz({ yarn }) {
    const data = YARNS[yarn];
    const [answers, setAnswers] = useState([null, null, null]);

    useEffect(() => { setAnswers([null, null, null]); }, [yarn]);

    const correct = [
        data.type,
        data.sustainable.startsWith("Yes") ? "Yes" : data.sustainable.startsWith("No") ? "No" : "Depends",
        data.madeFrom,
    ];

    const questions = [
        { label: "1. What category does this yarn belong to?", options: Q1_OPTIONS },
        { label: "2. Is this yarn sustainable?",               options: Q2_OPTIONS },
        { label: "3. What is it made from?",                   options: Q3_OPTIONS },
    ];

    const pick = (qIdx, option) => {
        setAnswers((prev) => {
            const next = [...prev];
            next[qIdx] = option;
            return next;
        });
    };

    return (
        <div className="quiz">
            {questions.map((q, qIdx) => (
                <div key={qIdx} className="quiz-question">
                    <p>{q.label}</p>
                    <div className="quiz-options">
                        {q.options.map((opt) => {
                            const selected  = answers[qIdx] === opt;
                            const answered  = answers[qIdx] !== null;
                            const isCorrect = opt === correct[qIdx];

                            let cls = "quiz-btn";
                            if (selected && isCorrect)  cls += " correct";
                            if (selected && !isCorrect) cls += " wrong";
                            if (answered && !selected && isCorrect) cls += " reveal";

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
}

// ─── ACCORDION ────────────────────────────────────────────────────────────────
function AccordionItem({ title, colorClass, children }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`accordion-item ${colorClass}${open ? " open" : ""}`}>
            <button className="accordion-trigger" onClick={() => setOpen((o) => !o)}>
                <span>{title}</span>
                <span className="accordion-icon">{open ? "−" : "+"}</span>
            </button>
            {open && <div className="accordion-body">{children}</div>}
        </div>
    );
}

// ─── LEARN MORE ───────────────────────────────────────────────────────────────
function LearnMore({ yarn }) {
    const data = YARNS[yarn];
    return (
        <div className="learn-more">
            <p className="learn-label">Learn more about {yarn}</p>

            <AccordionItem title="Pros" colorClass="acc-pros">
                <ul className="learn-list pros">
                    {data.pros.map((p) => <li key={p}>{p}</li>)}
                </ul>
            </AccordionItem>

            <AccordionItem title="Cons" colorClass="acc-cons">
                <ul className="learn-list cons">
                    {data.cons.map((c) => <li key={c}>{c}</li>)}
                </ul>
            </AccordionItem>

            <AccordionItem title="How is it made?" colorClass="acc-made">
                <p>{data.howMade}</p>
            </AccordionItem>

            <AccordionItem title="Other names or types" colorClass="acc-names">
                <p>{data.otherNames}</p>
            </AccordionItem>
        </div>
    );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
function Minigame() {
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
        <section className="minigame">

            {/* ── HEADER ── */}
            <div className="mg-header">
                <div className="mg-blob mg-blob-pink" />
                <div className="mg-blob mg-blob-blue" />
                <div className="mg-header-inner">
                    <p className="mg-eyebrow">Mini Game</p>
                    <h1 className="mg-title">Yarn Roulette</h1>
                    <p className="mg-subtitle">Spin the wheel for a random yarn, <br />then test your knowledge through a fun quiz!</p>
                </div>
            </div>

            {/* ── CAT + WHEEL ROW ── */}
            <div className="game-row">
                <div className="cat-col">
                    <img src={glasses_cat} alt="cat with monocle" className="cat-img" />
                </div>
                <div className="wheel-col">
                    <SpinWheel onResult={handleSpinResult} spinTrigger={spinTrigger} />
                    <button
                        className="spin-btn"
                        onClick={handleSpinClick}
                        disabled={spinning}
                    >
                        {spinning ? "Spinning…" : "Spin!"}
                    </button>
                </div>
            </div>

            {/* ── SPUN RESULT — centered below row ── */}
            {spunYarn && (
                <div className="spun-result-wrap">
                    <div className="spun-result" style={{ backgroundColor: spunColor }}>
                        You got: <strong>{spunYarn}!</strong>
                    </div>
                </div>
            )}

            {/* ── QUIZ + LEARN MORE ── */}
            {spunYarn && (
                <div className="results-section">
                    <div className="mg-card">
                        <p className="card-label">Quiz Time on {spunYarn}</p>
                        <Quiz yarn={spunYarn} />
                    </div>
                    <div className="mg-card">
                        <LearnMore yarn={spunYarn} />
                    </div>
                </div>
            )}

        </section>
    );
}

export default Minigame;
