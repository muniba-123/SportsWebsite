import React, { Component } from "react";
import logo from "../../Assets/images/logo-white-noBg.png";
import img2 from "../../Assets/images/img_violence.svg";
import { Col, Row } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Row>
          <Col xl={2} lg={2} md={2}>
            <img src={logo} className="footer-logo" />
          </Col>
          <Col xl={8} lg={8} md={8}>
            <ul className="links">
              <li>PRIVACY POLICY</li>
              <li>TERMS OF SERVICE </li>
              <li>RULES OF CONDUCT</li>
            </ul>
            <div className="copyrights">
              <p>
                © Copyright 2012 - 2020. All rights reserved.
                <br />
                PUBG is a registered trademark or service mark of KRAFTON, Inc.
              </p>
            </div>
          </Col>
          <Col xl={2} lg={2} md={2}>
            <img src={img2} className="float-right"/>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
