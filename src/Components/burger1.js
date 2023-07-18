import React from 'react';
import ReactDOM from 'react-dom/client';
import { fallDown as Menu } from 'react-burger-menu'

class Burger1 extends React.Component {
    showSettings (event) {
      event.preventDefault();
    
    }
  
    render () {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      return (
        
        <Menu width={ '10%' } pageWrapId={ "page-wrap" }>
          <a id="home" className="menu-item top" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a id="Blog" className="menu-item" href="/Blog">Blog</a>
          <a id="Careers" className="menu-item" href="/Careers">Careers</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
      );
    }
  }

  export default Burger1;