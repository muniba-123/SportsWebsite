import React, { Component } from "react";
import arrowDown from "../../Assets/icons/down-arrow-white.svg";
import Table from "../Players/Table";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: 0,
    };
  }
  render() {
    const { showSubMenu } = this.state;
    return (
      <div className="page-wrap">
        <h5 className="page-title">Stats</h5>
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
        <div className="page-inner-wrap pt-0 mx-4">
        
          <Table />
        </div>
      </div>
    );
  }
}

export default Stats;
