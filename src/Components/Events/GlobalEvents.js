import React, { Component } from "react";
import arrowDown from "../../Assets/icons/down-arrow-white.svg";
import twireLogo from "../../Assets/images/icon_twire_logo.svg";
import iconMore from "../../Assets/icons/icon_more.svg";

class GlobalEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: 0,
    };
  }
  render() {
    const { showSubMenu } = this.state;
    return (
      <div className="page-wrap events-view">
        <h5 className="page-title">Events</h5>
        <div className="d-flex justify-content-center align-items-center">
          <ul className="menu-items">
            <li
              className={`menu-item`}
              onMouseEnter={() => {
                this.setState({ showSubMenu: 1 });
              }}
              onMouseLeave={() => {
                this.setState({ showSubMenu: null });
              }}
            >
              PGC 2022
              <img className="sub-menu-icon" src={arrowDown} />
              {showSubMenu === 1 && (
                <div className="sub-menu">
                  <ul>
                    <li>PCS7</li>
                    <li>PCS7</li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className={`menu-item`}
              onMouseEnter={() => {
                this.setState({ showSubMenu: 2 });
              }}
              onMouseLeave={() => {
                this.setState({ showSubMenu: null });
              }}
            >
              Global Events
              <img className="sub-menu-icon" src={arrowDown} />
              {showSubMenu === 2 && (
                <div className="sub-menu">
                  <ul>
                    <li> Global Events</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
        {/* ************************************************************************ */}
        <div className="nav-menu">
          <ul className="">
            <li className={`menu-item`}>Overview</li>
            <li className={`menu-item`}>Schedule</li>
            <li className={`menu-item`}>Standing</li>
            <li className={`menu-item`}>Award</li>
          </ul>
          <div className="nav-menu-right">
            <div className="mr-1">More info</div>

            <div className="link-btn">
              <img src={twireLogo} width={112} height={36} />
              <img src={iconMore} className="icon" />
            </div>
          </div>
        </div>
        <div className="img-block-wrap">
        <div className="img-block"></div>
        <div class="text-wrap">
          <div class="inner-wrap">
            <div class="title-wrap">
              <div class="title">PGC 2022</div>
            </div>
            <div class="info-wrap">
              <div>
                <p>
                  <span class="title">Schedule</span>
                  <span class="date">2022-11-01 2022-11-20</span>
                </p>
                <p>
                  <span class="title">TIME</span>
                  <span class="date">22:00 KST</span>
                </p>
              </div>
              <div>
                <p>
                  <span class="title">Prize Money</span>
                  <span class="date">$2,000,000 + Crowd funding</span>
                </p>
                <p>
                  <span class="title">PARTICIPATING REGIONS</span>
                  <span class="date">EUROPE, AM, ASIA, APAC</span>
                </p>
              </div>
              <div>
                <p>
                  <span class="title">Place</span>
                  <span class="date">Dubai Exhibition Centre</span>
                </p>
              </div>
            </div>
            <div class="desc-wrap">
              The adrenaline of PUBG Global Championships returns Nov. 1-20 as
              the top 32 teams from across four regions descend unto Dubai for a
              chance to compete for and win part of the $2,000,000 prize pool.
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default GlobalEvents;
