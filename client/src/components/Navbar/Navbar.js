import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css';

const navbar = props => (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div className="navbar_toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="navbar_logo"><a href="/">Faktura-utan-företag.se</a></div>
        <div className="spacer_nav" />
        <div className="navbar_navigation_items">
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
      </nav>
    </header>
);

export default navbar;
