import { useState } from "react";
import "../index.css";
import "../css/stich.css";
import cat from "../images/orange_cat.png";

const stitches = [
    {
        id: "How-to-Read-Pattern",
        label: "How to Read A Pattern",
        abbreviation: "N/A",
        example: "N/A",
        translation: "N/A"

    },
    {
        id: "Slip-knot",
        label: "Slip Knot",
        abbreviation: "Sl knot",
        example: "R1: Sl Knot, CH9 [9]",
        translation: "Make a slip knot, chain 9 for a total of 9 stitches"
    },
    {
        id: "Single-Crochet",
        label: "Single Crochet",
        abbreviation: "SC",
        example: "R3: (sc, inc) x 6 [18]",
        translation: "(Single-crochet 1, increase) 8 times for a total of 18 stitches"
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
        <section id = {stitch.id} className = "stitchCard">
        <h1>{stitch.label}</h1>
        <div className = "abbrBox">
            <h2>Abbreviation:</h2>{stitch.abbreviation}
        </div>
        <div className = "example">
            <h2>Example:</h2>{stitch.example} <br/> {stitch.translation}
        </div>
        </section>
    );
}

function NavClick(stitch){
    setActiveID(stitch.id);
}

export default function StitchesPage(){
    const [activeID, setActiveID] = useState(stitches[0].id);
    return(
        <div className = "page">
            <aside className="sidenav">
                <h2 className = "title">Learn Stitches</h2>
                    {stitches.map((stitch) => (
                        <SidenavButton key = {stitch.id} stitch = {stitch}  />    //makes it actually go to that square when the button is active
                ))}
                <img className = "cat" src = {cat} alt = "orange cat with pink yarn" />
            </aside>

            <main className="main">
                {stitches.map((stitch) => (
                        <StitchCard key = {stitch.id} stitch = {stitch} /> //same thing as before but always makes the squares for the info
                ))}
            </main>
        </div>
    );
}