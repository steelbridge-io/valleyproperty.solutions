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
            <meta name="description" content="Find out about Valley Property Solutions. We are a Real Estate wholesaler located in Northern California. We help homeowners sell their homes fast. We have buyers who are ready today." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>About | Valley Property Solutions</h1>
                    </header>
                    <div className="image main about-img"><img src={piclogoleft} alt="Valley Property Solutions" /></div>
                    <p>Valley Property Solutions, LLC is a residential redevelopment company based out of Cottonwood, CA. With the beleif that remodeled homes are essential to new America, Valley Property Solutions focuses on purchasing distressed/ outdated homes. Once we purchase a property we start renovations. After the renovations are complete we then sell the property to a new homeowner/landlord.</p>
                    <p>When Christian Magana, owner of Valley Property Solutions graduated from High School he knew that he wanted to get into the game of real estate. After investing thousands into his real estate education and learning the proper tools to run a business, it was time to get started. Valley Property Solutions was established May 24, 2019 with the goal of creating gorgeous homes for new families while also helping the previous owners in any way we can.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
