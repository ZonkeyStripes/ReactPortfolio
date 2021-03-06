import React, { Component } from "react";
// import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import covidShot from "../images/covidshot.PNG"
import recipeShot from "../images/recipefindShot.png";
import passShot from "../images/passgenShot.png";

// const Wrapper = styled.div `
//     width: 100%;
// `;

// const Page = styled.div`
//     width: 100%
// `


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="slider">
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <h3>Covid Disaster Tracker</h3>
              <img src={covidShot} className="slidePics" alt="Covid Disaster Screenshot"/>
            </div>
            <div>
              <h3>Recipe Finder</h3>
              <img src={recipeShot} className="slidePicFinder" alt="Recipe Finder Screenshot" />
            </div>
            <div>
              <h3>Password Generator</h3>
              <img src={passShot} className="slidePicPass" alt="Password Generator" />
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }