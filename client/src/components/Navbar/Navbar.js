import React from 'react';
import { Link } from 'react-router-dom';
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
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
      </nav>
    </header>
);

export default navbar;
