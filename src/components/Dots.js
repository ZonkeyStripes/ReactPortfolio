import React from "react";

function Dots() {
    return (
        
        <div style="text-align:center">
        <span className="dot" onClick="currentSlide(1)"></span>
        <span className="dot" onClick="currentSlide(2)"></span>
        <span className="dot" onClick="currentSlide(3)"></span>
        <span className="dot" onClick="currentSlide(4)"></span>
    </div>
    );
}