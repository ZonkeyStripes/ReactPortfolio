import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
              <p>FILLER TEXT</p>
            </div>
            <div>
              <h3>2</h3>
              <p>EVEN MORE FILLER TEXT FOR THE PAGE 2</p>
            </div>
            <div>
              <h3>3</h3>
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






// export default class SlideView extends React.Component {

//     render() {
        
//             return (        
//                 <Wrapper>
//                     <Slider
//                     speed={500}
//                     slidesToShow={1}
//                     slidesToScroll={1}
//                     infinite={false}
//                     >
//                         <Page>Slide 1</Page>
//                         <Page>Slide 2</Page>
//                         <Page>Slide 3</Page>
//                     </Slider>
//                 </Wrapper>        
//             );

//     }

// }