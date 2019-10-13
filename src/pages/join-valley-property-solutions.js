import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerJoinus'
import SEO from '../components/seo'

import assets from '../assets/images/assets.jpg'
import agents from '../assets/images/agents.jpg'
import privatelender from '../assets/images/privatelender.jpg'
import joinourteam from '../assets/images/joinourteam.jpg'

const Landing = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | Join Valley Property Solutions Team</title>
            <meta name="description" content="Join our team at Valley Property Solutions. Find out about how to work with us. Find out how we work with you." />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h2>Here's a few reasons why working with us can be a win/win</h2>
                    </header>
                    <p>We want to invest in the future. Your future. How about you?</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={assets} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="assets-section" className="major landing1">
                                <h3>Assets</h3>
                            </header>
                            <p>We are looking to build a team of assets, whether it be a group such as a company or individuals, we need you to bring value to the table and in return we’ll do the same. There’s many perks to working with us, we love to pay our hard working contractors on-time for the benchmarks they complete to our specs. We will be providing constant work since our business plan is to start renovations on multiple houses within the next few months. For each property we provide a detailed scope of work that explains all the renovations we would like done to the property such as what we want demoed, if we want anything added/moved, new appliances, color scheme, etc. also listed on the scope of work Is an estimated cost for what document details.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={agents} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="weoffercash" className="major landing1">
                                <h3>Agents</h3>
                            </header>
                            <p>We are looking for agents from every area to send us properties listed on the MLS that need work and are listed under market value, again we are looking to purchase multiple properties throughout the next few months and can offer DOUBLE COMMISSION!!!</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={privatelender} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="wholesailing" className="major landing1">
                                <h3>Private Lender</h3>
                            </header>
                            <p>Are you interested in investing in real estate?!! You can invest your money with us and earn 1% of your total investment every month. Lets say you lent us $30,000 to invest into one of our deals, if the rehab takes 6 months to complete then after the property is sold you will receive your original investment of $30,000 + 6%($1,800).</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={joinourteam} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="getanoffer" className="major landing1">
                                <h3>Interested In Joining?</h3>
                            </header>
                            <p>Call us! We want to hear from you (530) 446-2271</p>
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