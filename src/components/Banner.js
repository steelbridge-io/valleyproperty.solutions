import React from 'react'
import pic08 from "../assets/images/pic08.jpg";
import logo from "../assets/images/VPS_Logo-white.png";
import {Link} from "gatsby";

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">

            <header className="major landing2">
                <div className="logo-box">
                <img src={logo} alt="" />
                </div>
            </header>
            <div className="content">
                <p className="lead"><strong>Valley Property Solutions, LLC</strong> is a residential redevelopment company that purchases homes in "as-is" condition. We make cash offers and can close in as little as 14 days. We purchase distressed/outdated properties then force appreciation by renovating the home. Once remodeled, we then sell the house at its appropriate price to a new homeowner/landlord. To find out more about how we can help you sell your home contact us. Let's get started.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
