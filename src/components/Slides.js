import React from "react";

function Slides() {

    return (
        <div className="slideshow-container">

        <div className="mySlides fade">
            <div className="numbertext"> 1 / 4 </div>
            <img src="#"></img>
            <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
            <div className="numbertext"> 1 / 4 </div>
            <img src="#"></img>
            <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
            <div className="numbertext"> 1 / 4 </div>
            <img src="#"></img>
            <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
            <div className="numbertext"> 1 / 4 </div>
            <img src="#"></img>
            <div className="text">Caption Text</div>
        </div>

        <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
        <a className="next" onClick="plusSlides(1)">&#10095;</a>

    </div>

    // <br />
    );

}

export default Slides;