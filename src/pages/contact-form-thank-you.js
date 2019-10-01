import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import pic11 from '../assets/images/VPS_Logo.png'

const Generic = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | Thank You</title>
            <meta name="description" content="Thanks you for contacting Vaelley Property Solutions" />
            <meta name="robots" content="noindex" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>Thank You For Contacting Us</h1>
                    </header>
                    <div className="image main about-img"><img src={pic11} alt="Valley Property Solutions" /></div>
                    <h2>Thanks for contacting us. We will be in touch with your soon.</h2>
                    <p>In the mean time, you can cal us anytime at <a href="tel:15309535617‬">(530) 953-5617</a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic