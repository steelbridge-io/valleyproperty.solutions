import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import pic11 from '../assets/images/pic11.jpg'

const Reasons = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | Reasons For Selling Your Home</title>
            <meta name="description" content="Three reasons why one sells their home and how we can make the sale of you home happen fast." />

        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>Common Reasons For Selling</h1>
                        <h2>We Make Selling Easy</h2>
                    </header>
                    <span className="image main"><img src={pic11} alt="Valley Property Solutions" /></span>

                    <h3>Pre-Foreclosure</h3>
                    <p>There’s nothing more devastating than losing your home due to one of life's many unexpected curveballs. We understand that you need to get out of your situation fast, so we make it our goal to take some stress off your shoulders by making this process go as smooth as possible. We buy in “as Is” condition, make all cash offers and can close in as little as 2 weeks. Are there late payments hurting your credit score? No problem, in some situations were able to bring your current payment up to date so that it shows payment history on your credit.</p>

                    <h3>Probate (Homeowner Has Passed)</h3>

                    <p>The death of a loved one can be hard for anyone, and the last thing you want happening at this time is their debt falling on you. We can help you out by thoroughly explaining the states probate process so that you can make the right decision.</p>

                    <h3>Its Time To Move</h3>
                    <p>Are you wanting to explore new opportunities, or just find find a new house? We understand that you want change and we can contribute to that by closing quickly and without a hassle.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Reasons