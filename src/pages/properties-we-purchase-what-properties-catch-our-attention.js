import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import pic11 from '../assets/images/pic11.jpg'
import {Link} from "gatsby";

const Properties = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | What We Are About</title>
            <meta name="description" content="Discover how to seel your home as a for sell by owner. We help homeowners sell their home and bypass lengthy Realestate sales processes." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>Properties We Purchase</h1>
                        <h2>What Properties Cacth Our Attention</h2>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <h3>What Do We Like</h3>
                    <p>Valley Property Solutions, LLC is a residential redevelopment company. Residential redevelopment is renovating outdated or damaged homes and making them have a more clean, modern feeling to them. We believe that residential redevelopment is essential to the growth of new America and we’re proud to help contribute. If you have a house for sale that’s outdated, or just needs some T.L.C. don’t hesitate to give us a call at 5304462271. A majority of our focus goes to purchasing these type of properties. Since we remodel the house anyway, we love to buy in "as is” condition. You’re time is valuable to us so make offers and close at lightning fast speeds.</p>

                    <h3>About Wholesailing</h3>
                    <p>If you own your property free and clear and you want to sell it but don’t want to go through an agent, this option might be for you. </p>
                    <ul className="actions">
                        <li><Link to="/help/#wholesailing" className="button">Learn more about wholesailing</Link></li>
                    </ul>

                </div>
            </section>
        </div>

    </Layout>
)

export default Properties