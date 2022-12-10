import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import logo from "../../Assets/images/logo-black.jpeg";
import arrowDown from "../../Assets/icons/down-arrow.svg";
import arrowDownRed from "../../Assets/icons/down-arrow-red.svg";
import web from "../../Assets/icons/web.svg";
import { Link, useNavigate } from "react-router-dom";
const menuOptions = [
  {
    text: "Events",
    path: "/",
    subMenu: [
      { text: "Global Events", path: "/" },
      { text: "All Events", path: `/` },
      { text: "PNC 2022", path: "/" },
    ],
  },
  { text: "Teams", path: "/teams" },
  { text: "Players", path: `/players` },
  { text: "Stats", path: "/stats" },
  { text: "News", path: "/news" },
  { text: "Pubg esports", path: `/pubgesports` },
];
const languages=[{id:1,text:"English"},{id:1,text:"English"},{id:1,text:"English"}]
class Header extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
      showLeftMenu: false,
      active: 0,
      showSubMenu: null,
      showLanuages:false
    };
  }

  render() {
    const {showLeftMenu,showSubMenu,active,showLanuages}=this.state;
    return (
      <>
        <header>
          <div
            className="large-hidden"
            onClick={() => {
              this.setState({ showLeftMenu: !showLeftMenu });
            }}
          >
            <img src="assets/img/burgerIcon.jpg" className="menuIcon" />
          </div>
          <div className="header-logo">
            <img src={logo} />
          </div>
          <nav className="nav-bar small-hidden">
            <ul className="menu-items">
              {menuOptions?.map((item, i) => (
                <li
                  className={`menu-item ${
                    i === active ? "active" : ""
                  }`}
                  key={i}
                  // onClick={() => {
                  //   this.setState({ active: i });
                  //  history.push(item.path);
                  // }}

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
                          <li
                            onClick={() => {
                              this.props.history.push(subMenuItem.path);
                            }}
                          >
                            {subMenuItem.text}
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
        <LeftMenu
          menuOptions={menuOptions}
          showLeftMenu={showLeftMenu}
          toggleMenu={() => {
            this.setState({ showLeftMenu: !showLeftMenu });
          }}
          active={active}
          setActive={(i) => {
            this.setState({ active: i });
          }}
        />
      </>
    );
  }
}

export default Header;
