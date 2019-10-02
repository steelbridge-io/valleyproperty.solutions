import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import pic11 from '../assets/images/pic11.jpg'

const JoinVPS = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | Join Our Team</title>
            <meta name="description" content="Join Valley Property Solutions Team and invest in a great opportunity to help others sell homes while being a part of a family that takes an innovative approcah to aquiring wealth, rsources and solutions for the home buyer and seller." />

        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>Join Our Team</h1>
                        <h2>Who Are We Lookin For?</h2>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>

                    <h3>Assets</h3>
                    <p>We are looking to build a team of assets, whether it be a group such as a company or individuals, we need you to bring value to the table and in return we’ll do the same. There’s many perks to working with us, we love to pay our hard working contractors on-time for the benchmarks they complete to our specs. We will be providing constant work since our business plan is to start renovations on multiple houses within the next few months. For each property we provide a detailed scope of work that explains all the renovations we would like done to the property such as what we want demoed, if we want anything added/moved, new appliances, color scheme, etc. also listed on the scope of work Is an estimated cost for what document details.</p>

                    <h3>Agents</h3>
                    <p>We are looking for agents from every area to send us properties listed on the MLS that need work and are listed under market value, again we are looking to purchase multiple properties throughout the next few months and can offer DOUBLE COMMISSION!!!</p>

                    <h3>Private Lender</h3>
                    <p>Are you interested in investing in real estate?!! You can invest your money with us and earn 1% of your total investment every month. Lets say you lent us $30,000 to invest into one of our deals, if the rehab takes 6 months to complete then after the property is sold you will receive your original investment of $30,000 + 6%($1,800).</p>

                    <h4>Contact Us. Simply fill out our contact form below or give us a call. We want to help you. We definitely want to make this work out. Call anytime.</h4>
                </div>
            </section>
        </div>

    </Layout>
)

export default JoinVPS