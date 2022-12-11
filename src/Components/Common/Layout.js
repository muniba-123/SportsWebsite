import React, { Component } from 'react';
import SocialMediaBlock from '../Home/SocialMediaBlock';
import Footer from './Footer';
import Header from './Header';
import LeftMenu from './LeftMenu';
const menuOptions = [
  {
    text: "Events",
    path: "/",
    subMenu: [
      { text: "Global Events", path: "/globalevents" },
      { text: "All Events", path: `/allevents` },
      { text: "PNC 2022", path: "/pnc2022" },
    ],
  },
  { text: "Teams", path: "/teams" },
  { text: "Players", path: `/players` },
  { text: "Stats", path: "/stats" },
  { text: "News", path: "/news" },
  { text: "Pubg esports", path: `/pubgesports` },
];
const languages=[{id:1,text:"English"},{id:1,text:"English"},{id:1,text:"English"}]
class Layout extends Component {
  constructor(props){
    super(props)
    this.state = {
      showLeftMenu: false,
  }
}
  render() {
    const { showLeftMenu } = this.state;
    return (
      <div className='main-container'>
      <Header  menuOptions={menuOptions} languages={languages}   toggleMenu={() => {
            this.setState({ showLeftMenu: !showLeftMenu });
          }}/>
      <LeftMenu
          menuOptions={menuOptions}
          showLeftMenu={showLeftMenu}
          toggleMenu={() => {
            this.setState({ showLeftMenu: !showLeftMenu });
          }}
        />
      <div className='main-content'>
        {this.props.children}
      </div>
      <SocialMediaBlock/>
      <Footer />
    </div>
    );
  }
}

export default Layout;