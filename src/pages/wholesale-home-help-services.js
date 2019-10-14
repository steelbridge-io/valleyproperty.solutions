import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/seo'

import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import weOfferCash from '../assets/images/weOfferCash.jpg'
import weUnderstand from '../assets/images/weUnderstand.jpg'
import getanoffer from '../assets/images/getanoffer.jpg'
import wholeSailing from '../assets/images/wholeSailing.jpg'


const Landing = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | Our Services - How We Can Help You</title>
            <meta name="description" content="Find out how Valley Property Solutions can help you with selling your home fast. We work with you to find a buyer quickly. Cash for your home." />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h2>We Are Leaders</h2>
                    </header>
                    <p>To build a relaible and prdicatble home sales process, Valley Property Solutions helps you; makes the effort; and fosters collaberation amongst investors interested in your home. Here are some ways we can help you:</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={weUnderstand} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="weunderstand" className="major landing1">
                                <h3>We Understand</h3>
                            </header>
                            <p>Selling your home can seem like a very intimidating task whether its your choice or not. We just want you to know that we're here to make your life easier and help guid you through this process.</p>
                            <ul className="actions">
                                <li><Link to="/contact-us" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={weOfferCash} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="weoffercash" className="major landing1">
                                <h3>We Offer Cash</h3>
                            </header>
                            <p>Cash is King and in real estate this can not be more true, most of our offers are in cash… why? Because sellers love cash. Cash offers are the reason we can close in a short amount of time. All of our offers come with a proof of funds to ensure you we have the funding to purchase the property. Along with a proof of funds we also submit a good size down payment.</p>
                            <ul className="actions">
                                <li><Link to="/contact-us" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={wholeSailing} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="wholesailing" className="major landing1">
                                <h3>About Wholesaling</h3>
                            </header>
                            <p>If you own your property free and clear and you want to sell it but don’t want to go through an agent, this option might be for you.</p>
                            <ul className="actions">
                                <li><Link to="/wholesailing" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={getanoffer} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="getanoffer" className="major landing1">
                                <h3>Get An Offer!!</h3>
                            </header>
                            <p>Need to sell your property fast? Give is a call today at (530) 446-2271</p>
                            <ul className="actions">
                                <li><Link to="/contact-us" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing