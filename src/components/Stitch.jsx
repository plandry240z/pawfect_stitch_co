import { useState } from "react";
import "../css/stich.css";
import kat from "../images/hook_cat.png";
const stitches = [
    {
        id: "How-to-Read-Pattern",
        label: "How to Read A Pattern",
        abbreviation: null,
        example: "Reading a pattern is like learning a new language. Check out this video to learn more!",
        translation: null,
        video: "https://www.youtube.com/embed/PZ8uV2-Z-Qg?si=OZdNYDzC8IrY-039"

    },
    {
        id: "Chain",
        label: "Chain",
        abbreviation: "CH",
        example: "R1: Sl Knot, CH9 [9]",
        translation: "Make a slip knot, chain 9 for a total of 9 stitches",
        video: "https://www.youtube.com/embed/qQF4OChjP9s?si=3U2EfruyeR5NxEb9" 
    },
    {
        id: "Single-Crochet",
        label: "Single Crochet",
        abbreviation: "SC",
        example: "R3: (sc, inc) x 6 [18]",
        translation: "(Single-crochet 1, increase) 6 times for a total of 18 stitches",
        video: "https://www.youtube.com/embed/7FcRdxg0aeY?si=CpZ28tFCg98Tplsq" 
    },
    {
        id: "HD-crochet",
        label: "Half-Double Crochet",
        abbreviation: "HDC",
        example: "R1: (hdc, inc) x 6 [18]",
        translation: "(Half-double-crochet 1, increase) 6 times for a total of 18 stitches",
        video: "https://www.youtube.com/embed/f9C1C21MNiM?si=MByEjvqbmJg59gL_" 
    },
    {
        id: "Double-crochet",
        label: "Double Crochet",
        abbreviation: "DC",
        example: "R1: (dc, inc) x 6 [18]",
        translation: "(Double-crochet 1, increase) 6 times for a total of 18 stitches",
        video: "https://www.youtube.com/embed/a1whu6Gub1M?si=4pY3JIVewwaec8IZ"
    },
    {
        id: "Treble-crochet",
        label: "Treble Crochet",
        abbreviation: "TR",
        example: "R1: (tr, inc) x 6 [18]",
        translation: "(Treble-crochet 1, increase) 6 times for a total of 18 stitches",
        video: "https://www.youtube.com/embed/3KtzjAAZHVY?si=GlbPwAqqXhT33Qt-"  
    },
    {
        id: "Increase",
        label: "Increase",
        abbreviation: "INC",
        example: "R1: (sc, inc) x 6 [18]",
        translation: "(Single-crochet, increase) 6 times for a total of 18 stitches",
        video: "https://www.youtube.com/embed/CvD1qrrRX5c?si=VtNwYwyNx5V4HhJp"  
    },
    {
        id: "Decrease",
        label: "Decrease",
        abbreviation: "DEC",
        example: "R18: (2 sc, dec) x 6 [18]",
        translation: "(2 single-crochet, decrease) 6 times for a total of 18 stitches",
        video: "https://www.youtube.com/embed/ZXsiVk52_vA?si=TsmFcesTlbot1z7a" 
    },
    {
        id: "MR",
        label: "Magic Ring",
        abbreviation: "MR",
        example: "R1: 6 sc in a mr [6]",
        translation: "6 single-crochet in a magic ring for a total of 6 stitches",
        video: "https://www.youtube.com/embed/fNyfAtJ3edE?si=1oxYU4rkk3ud46br" 
    }
]


function SidenavButton({stitch, isActive, onClick}) {
    return (
        <button onClick={onClick} className= {"navButton " + (isActive ? "active" : "" )}>
            {stitch.label}
        </button>
    );
}

//what card looks like
function StitchCard ({stitch}) { 
    return (
        <section id={stitch.id} className="stitchCard">
            <div className="card-header">
                <h1>{stitch.label}</h1>
            </div>

            {stitch.abbreviation && (
            <span className="abbr">{stitch.abbreviation}</span>
            )}

            {stitch.example && (
            <div className="cardrow">
                <span className="cardlabel">Example</span>
                <p className="cardvalue code">{stitch.example}</p>
            </div>
            )}

            {stitch.translation && (
            <div className="cardrow">
                <span className="cardlabel">Translation</span>
                <p className="cardvalue code">{stitch.translation}</p>
            </div>
            )}

            {stitch.video &&(
            <div className = "cardrow">
                <span className ="cardlabel">Video</span>
                <iframe className = "cardvideo" src={stitch.video} allowFullScreen />
            </div>
            )}
    </section>
    );
}


export default function StitchesPage(){
    const [activeID, setActiveID] = useState(stitches[0].id);

    //makes scroll work
    function NavClick(stitch) {
    setActiveID(stitch.id);
    const section = document.getElementById(stitch.id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    return(
        <div className = "page">
            <aside className="sidenav">
                <div className="sidenav-sticky">
                    <h2 className="title">Learn Stitches</h2>
                        {stitches.map((stitch) => (
                    <SidenavButton key={stitch.id} stitch={stitch}  isActive={activeID === stitch.id} onClick={() => NavClick(stitch)} />
                    ))}
                </div>
            </aside>
            <main className="main">
                {stitches.map((stitch) => (
                        <StitchCard key = {stitch.id} stitch = {stitch} /> //same thing as before but always makes the squares for the info
                ))}
            </main>
            <aside className="kitty">
            <img src={kat} alt="cat" />
            <img src={kat} alt="cat" />
            <img src={kat} alt="cat" />

            </aside>
        </div>
    );
}