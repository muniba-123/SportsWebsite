import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Main extends Component {
  render() {
    return (
      <div className="main-section">
        <Row>
          <Col xl={8}>
            <div className="left-section">
              <div className="top">
                <div className="top-left">
                <span className="link">ANNOUNCEMENT</span>
                  <span class="link active">GENERAL</span>
                </div>
                 <div class="date">2022-11-20</div>
                  
                </div>
                <div className="info-text">
                  PUBG Esports 2023 Roadmap
                </div>
                
            </div>
          </Col>
          <Col xl={4}>
            <div className="right-section"></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
