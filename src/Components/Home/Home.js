import React, { Component } from "react";
import { Row,Col } from "reactstrap";
import Main from "./Main";
import Slider from "./Slider";
import SocialMediaBlock from "./SocialMediaBlock";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <>
        <Main />
        <Row className="home-page w-100">
            <Col xl={6}>
          <Slider
            activeIndex={activeIndex}
            setActiveIndex={(i) => {
              this.setState({ activeIndex: i });
            }}
            groups={2}
          />
          </Col>
          <Col xl={6}>
          <Slider activeIndex={activeIndex} setActiveIndex={(i)=>{this.setState({activeIndex:i})}} groups={2} className="slider-bg-2"/>
        </Col>
        </Row>
       
      </>
    );
  }
}

export default Home;
