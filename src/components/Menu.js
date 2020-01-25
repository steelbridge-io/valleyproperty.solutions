import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/projects">Projects</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/wholesale-home-help-services">How We Can Help</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/properties-we-purchase">About Properties We Purchase</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/join-valley-property-solutions">Join Our Team</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/common-reasons-for-selling">Common Reasons For Selling</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/wholesaling">What Is Wholesaling?</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about-valley-property-solutions">About Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact-us">Contact Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/search">Search</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="/contact-us" className="button special fit">Get Started</a></li>
                {/*<li><a href="#" className="button fit">Log In</a></li>*/}
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
