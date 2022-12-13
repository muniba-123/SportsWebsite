import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import logo from "../../Assets/images/logo-white-noBg.png";
import arrowDown from "../../Assets/icons/down-arrow.svg";
import arrowDownRed from "../../Assets/icons/down-arrow-red.svg";
import menu from "../../Assets/icons/menu-icon.svg";

import web from "../../Assets/icons/web.svg";
import { Link, useNavigate } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: null,
      showLanuages:false
    };
  }
  render() {
    const {showSubMenu,showLanuages}=this.state;
    const {languages,menuOptions,showLeftMenu,toggleMenu}=this.props;

    return (
      <>
        <header>
          <div
            className="large-hidden"
            onClick={() => toggleMenu()}
          >
            <img src={menu} className="menuIcon" />
          </div>
          <div className="header-logo">
            <img src={logo} />
          </div>
          <nav className="nav-bar small-hidden">
            <ul className="menu-items">
              {menuOptions?.map((item, i) => (
                <li
                  className={`menu-item`}
                  key={i}
                   onMouseEnter={()=>{if(item.subMenu) this.setState({showSubMenu:i})}}
                   onMouseLeave={()=>{if(item.subMenu) this.setState({showSubMenu:null})}}
                >
                  <Link to={item.path}> {item.text}</Link>
                  {item.subMenu && (
                    <img className="sub-menu-icon" src={showSubMenu===i?arrowDownRed: arrowDown} />
                  )}
                  {showSubMenu===i && (
                    <div className="sub-menu">
                      <div className="triangle"></div>
                      <ul>
                        {menuOptions[i].subMenu?.map((subMenuItem, i) => (
                          <li>
                             <Link to={subMenuItem.path}> {subMenuItem.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-right">
          <img className="web-icon" src={web} onClick={()=>this.setState({showLanuages:!showLanuages})}/>
          {
           showLanuages && 
           <div className="sub-menu">
              <div className="triangle"></div>
           <ul>
             {languages?.map((lang, i) => (
               <li>
                 {lang.text}
               </li>
             ))}
           </ul>
         </div>
          }
          </div>
        </header>
       
      </>
    );
  }
}

export default Header;
