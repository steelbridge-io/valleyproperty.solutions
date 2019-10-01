import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import piclogoleft from '../assets/images/VPS_Logo.png'

const Generic = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | About Us</title>
            <meta name="description" content="Find out about Valley Property Solutions. We are a realestate wholeseller located in Northern California. We help homeowners sell their homes fast. We have buyers who are ready today." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>About | Valley Property Solutions</h1>
                    </header>
                    <div className="image main about-img"><img src={piclogoleft} alt="Valley Property Solutions" /></div>
                    <p></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic