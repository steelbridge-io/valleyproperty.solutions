import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/VPS_Logo.png'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>Thank You For Contacting Us</h1>
                    </header>
                    <div className="image main about-img"><img src={pic11} alt="" /></div>
                    <h2>Thanks for contacting us. We will be in touch with your soon.</h2>
                    <p>In the mean time, you can cal us anytime at <a href="tel:15309535617‬">(530) 953-5617</a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic