import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import arrow from "../../Assets/icons/arrow-right-red.svg";
import SlickSlider from "../Common/SlickSlider";

class Esports extends Component {
  render() {
    return (
      <div className="page-wrap esports-page">
        <div className="top-section">
          <Row>
            <Col xl={7}>
              <div className="text-wrap">
                <p className="title">A Pioneer of Battle Royale Esports!</p>
                <p className="desc">
                  PUBG Esports has received high praise and attention from the
                  global esports organizers, with dozens of pro teams being
                  founded around the world even before the official release of
                  the game.
                </p>
                <p className="desc">
                  Based on this, PUBG Esports successfully hosted PUBG GLOBAL
                  INVITATIONAL (PGI.S) 2018 in Berlin, making battle royales a
                  watchable esports in collaboration with various partners.
                  Since then, PUBG Esports has improved each year to build the
                  esports system. For the past 3 years, we have hosted about 40
                  official tournaments, with about 60 tournaments by our
                  partners, to pay out US$15 million in cumulative prize money.
                  Through these events, we further strengthened our position as
                  the leader of the battle royale genre. With our sustainable
                  investment approach, KRAFTON promises to keep hosting the most
                  exciting tournaments, while adding and creating new initatives
                  to PUBG esports in an effort to bring the best of battle
                  royale esports experience to our PUBG fans and players around
                  the world.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        {/* **************************Cards block************************************ */}

        <div className={`details-block p-0`}>
          <div className="details-inner-block">
            <div className="d-flex align-items-baseline">
              <Row className="item-details-block">
                <Col className="item-block" xl={4} lg={4}>
                  <div className="item-details">
                    <div className="item-name">S.U.P.E.R</div>

                    <p className="description">
                      Standard and Universal PUBG Esports Ruleset
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="time">More Information</div>
                    <img className="icon" src={arrow} />

                    </div>
                  </div>
                </Col>
                <Col className="item-block" xl={4} lg={4}>
                  <div className="item-details">
                    <div className="item-name">S.U.P.E.R</div>

                    <p className="description">
                      Standard and Universal PUBG Esports Ruleset
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="time">More Information</div>
                    <img className="icon" src={arrow} />

                    </div>
                  </div>
                </Col>
                <Col className="item-block" xl={4} lg={4}>
                  <div className="item-details">
                    <div className="item-name">S.U.P.E.R</div>

                    <p className="description">
                      Standard and Universal PUBG Esports Ruleset
                    </p>

                    <div className="d-flex align-items-center">
                    <div className="time">More Information</div>
                    <img className="icon" src={arrow} />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        {/* ***********************************Cards block ends*********************************** */}

        {/* ***********************Slick slider*************************** */}
        <SlickSlider />
      </div>
    );
  }
}

export default Esports;
