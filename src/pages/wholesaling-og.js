import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import wholeSailingGeneric from '../assets/images/wholesalingGeneric.jpg'
import {Link} from "gatsby";

const Properties = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | What We Are About</title>
            <meta name="description" content="Learn about wholesale Real Estate. What is wholesale Real Estate sales? We can guide you through the wholesale Real Estate sales process." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>Wholesaling</h1>
                    </header>
                    <span className="image main"><img src={wholeSailingGeneric} alt="" /></span>
                    <h3>Wholesaling</h3>
                    <p>What is wholesaling real estate? Wholesaling when a homeowner who owns his/her property free and clear and wants to sell but they don’t want to go through an agent. In this situation we can go to your house and give it an "as is” appraisal, we then see how much the property would be estimated around after its remodeled, based on that information we will make an offer to put your house under contract. Once under contract we can market the contract then resell the to another redeveloper. You do not have to be a licensed real estate agent to wholesale properties. The advantage to using this strategy is the seller pays no commission fees.</p>


                    <ul className="actions welike">
                        <li><Link to="/contact-us" className="button">Contact Us To Learn More</Link></li>
                    </ul>

                </div>
            </section>
        </div>

    </Layout>
)

export default Properties
