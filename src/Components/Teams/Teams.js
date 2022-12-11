import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import card1 from "../../Assets/images/card-img-1.png";
import card2 from "../../Assets/images/card-img-2.png";
import card3 from "../../Assets/images/card-img-3.png";
import Button from "../Common/Button";

class Teams extends Component {
  render() {
    return (
      <div className="page-wrap">
        <h5 className="page-title">TEAMS</h5>
        <div className="page-inner-wrap">
          <ul className="list">
            <li className="active">ALL</li>
            <li>ASIA</li>
            <li>APAC</li>
            <li>EUROPE</li>
            <li>AMERICAS</li>
          </ul>
          <Row className="cards">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <>
                <Col className="card card-bg-1" xl={2} lg={3} md={4}>
                  <div className="mx-auto">
                    <img src={card1} />
                  </div>
                  <div className="card-text">17GAMING</div>
                </Col>
                <Col className="card card-bg-1" xl={2} lg={3} md={4}>
                  <div className="mx-auto">
                    <img src={card2} />
                  </div>
                  <div className="card-text">17GAMING</div>
                </Col>
                <Col className="card card-bg-1" xl={2} lg={3} md={4}>
                  <div className="mx-auto">
                    <img src={card3} />
                  </div>
                  <div className="card-text">17GAMING</div>
                </Col>
              </>
            ))}
          </Row>
          <Button label="Load More" className="my-5" />
        </div>
      </div>
    );
  }
}

export default Teams;
