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
                <p>Valley Property Solutions Inc. is a renowned environmental & engineering consulting firm based in Northern California, specializing in commercial real estate transactions and construction management.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
