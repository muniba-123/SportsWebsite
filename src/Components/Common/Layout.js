import React, { Component } from 'react';
import SocialMediaBlock from '../Home/SocialMediaBlock';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='main-container'>
      <Header />
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