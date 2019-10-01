import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/seo'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Our Services - How We Can Help You</title>
            <meta name="description" content="Landing Page" />
            <meta name="robots" content="noindex" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h2>We Understand</h2>
                    </header>
                    <p>Selling your home can seem like a very intimidating task whether its your choice or not. We just want you to know that we're here to make your life easier and help guid you through this process.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major landing1">
                                <h3>We Offer Cash</h3>
                            </header>
                            <p>Cash is King and in real estate this can not be more true, most of our offers are in cash… why? Because sellers love cash. Cash offers are the reason we can close in a short amount of time. All of our offers come with a proof of funds to ensure you we have the funding to purchase the property. Along with a proof of funds we also submit a good size down payment.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major landing1">
                                <h3>Wholesaling</h3>
                            </header>
                            <p>What is wholesaling real estate? Wholesaling when a homeowner who owns his/her property free and clear and wants to sell but they don’t want to go threw an agent. In this situation we can go to your house and give it an "as is” appraisal, we then see how much the property would be estimated around after its remodeled, based on that information we will make an offer to put your house under contract. Once under contract we can market the contract then resell the to another redeveloper. You do not have to be a licensed real estate agent to wholesale properties. The advantage to using this strategy is the seller pays no commission fees.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major landing1">
                                <h3>Get An Offer!!</h3>
                            </header>
                            <p>Need to sell your property fast? Give is a call today at (530) 446-2271</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing