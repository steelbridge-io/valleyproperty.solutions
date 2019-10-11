import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerCommonreasons'
import SEO from '../components/seo'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import foreClosure from '../assets/images/foreClosure.jpg'
import probate from '../assets/images/probate.jpg'

const Landing = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | Common Reasons For Selling Your Home</title>
            <meta name="description" content="Discover reasons why people sell their homes. Understanding those reasons helps you determine your selling options. Sometimes it's wise to talk to an expert about how to sell your home in a way that is to your advantage." />
        </Helmet>

        <BannerLanding />

        <div id="main">

            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h2>There can be many reasons to sell your home</h2>
                    </header>
                    <p>From the inspiration to move elswhere or upgrade, to the tougher reasons, we can help you with the details of finding a buyer quickly.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={foreClosure} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="foreclosure" className="major landing1">
                                <h3>Pre-Foreclosure</h3>
                            </header>
                            <p>There’s nothing more devastating than losing your home due to one of life's many unexpected curveballs. We understand that you need to get out of your situation fast, so we make it our goal to take some stress off your shoulders by making this process go as smooth as possible. We buy in “as Is” condition, make all cash offers and can close in as little as 2 weeks. Are there late payments hurting your credit score? No problem, in some situations were able to bring your current payment up to date so that it shows payment history on your credit.</p>
                            <ul className="actions">
                                <li><Link to="/contact-us" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/*<div className="inner">
                    <header className="major landing1">
                        <h2>Pre-Foreclosure</h2>
                    </header>
                    <p>There’s nothing more devastating than losing your home due to one of life's many unexpected curveballs. We understand that you need to get out of your situation fast, so we make it our goal to take some stress off your shoulders by making this process go as smooth as possible. We buy in “as Is” condition, make all cash offers and can close in as little as 2 weeks. Are there late payments hurting your credit score? No problem, in some situations were able to bring your current payment up to date so that it shows payment history on your credit.</p>
                </div>*/}
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={probate} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="weoffercash" className="major landing1">
                                <h3>Probate (Homeowner Has Passed)</h3>
                            </header>
                            <p>The death of a loved one can be hard for anyone, and the last thing you want happening at this time is their debt falling on you. We can help you out by thoroughly explaining the states probate process so that you can make the right decision.</p>
                            <ul className="actions">
                                <li><Link to="/contact-us" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={pic09} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="wholesailing" className="major landing1">
                                <h3>Its Time To Move</h3>
                            </header>
                            <p>Are you wanting to explore new opportunities, or just find find a new house? We understand that you want change and we can contribute to that by closing quickly and without a hassle.</p>
                            <ul className="actions">
                                <li><Link to="/contact-us" className="button">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={pic10} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="getanoffer" className="major landing1">
                                <h3>Get An Offer!!</h3>
                            </header>
                            <p>Need to sell your property fast? Give is a call today at (530) 446-2271</p>
                            <ul className="actions">
                                <li><Link to="/contact-us" className="button">Contact Us Here</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing