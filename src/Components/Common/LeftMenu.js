import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrowDown from "../../Assets/icons/down-arrow.svg";

export default class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: false,
    };
  }
  render() {
    const { menuOptions, showLeftMenu, toggleMenu, setActive } = this.props;
    const { showSubMenu } = this.state;
    return (
      <>
        <div className={`menu-wrapper ${showLeftMenu ? "show" : "not-show"}`}>
          <div className="cross-icon" onClick={() => toggleMenu(false)}>
            X
          </div>
          <ul className="menu-list">
            {menuOptions?.map((item, i) => (
              <li
                className={`menu-item 
                `}
                key={i}
                onClick={() => {
                  if (item.subMenu)
                    this.setState({ showSubMenu: !showSubMenu });
                  else toggleMenu();
                }}
              >
                {!item.subMenu ? (
                  <Link to={item.path}> {item.text}</Link>
                ) : (
                  <span>{item.text}</span>
                )}
                {item.subMenu && (
                  <img className="sub-menu-icon" src={arrowDown} />
                )}
                {showSubMenu && item.subMenu && (
                  <div className="sub-menu">
                    {/* <div className="triangle"></div> */}
                    <ul>
                      {menuOptions[i].subMenu?.map((subMenuItem, i) => (
                        <li onClick={()=>toggleMenu()}>
                          <Link  to={subMenuItem.path}> {subMenuItem.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className={`overlay ${showLeftMenu && 'd-block'}`} onClick={() => toggleMenu(false)} ></div > */}
      </>
    );
  }
}
