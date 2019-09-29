import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/projects">Projects</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/help">How We Can Help</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact-us">Contact Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="/" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
