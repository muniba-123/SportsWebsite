import React, { Component } from "react";
import Slider from "react-slick";
import sliderImg1 from "../../Assets/images/img_esports_history01.jpg";
import Button from "./Button";
import arrowRight from "../../Assets/icons/arrow-right-red.svg";
import { Route } from "react-router-dom";
import { Col, Row } from "reactstrap";

export default class SlickSlider extends Component {
  render() {
    const settings = {
      // speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider">
        <div className="title">
        PUBG Esports History
        </div>
        <div className="slide">

        <Slider {...settings}>
        <>
                <div className="heading">2017</div>
                <div className="main active">
                  <div className="heading-2">
                    AUG
                    <div className="line"></div>
                  </div>
                  <img src={sliderImg1}/>
                  <div className="text">Gamescom PUBG Invitational 2017</div>
                  <Button label="Watch Video" className="my-5" />
                </div>
                </>
            {[1,2,3,4].map(item=>(
            //   <Col xl={3}>
            <>
                <div className="heading">2017</div>
                <div className="main">
                  <div className="heading-2">
                    AUG
                    <div className="line"></div>
                  </div>
                  <img src={sliderImg1}/>
                  <div className="text">Gamescom PUBG Invitational 2017</div>
                  <Button label="Watch Video" className="my-5" />
                </div>
                </>
                // </Col>
            ))}
            
         
        </Slider>
         </div>
      </div>
    );
  }
}
