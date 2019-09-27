import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Valley Property Solutions"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="top-fp-cta">
                        <div className="inner">
                            <header className="major landing1">
                                <h1> Contact Us - Valley Property Solutions</h1>
                            </header>
                            <div class="content">
                                <p>(530) 953-5617&nbsp;&nbsp;‬|&nbsp;&nbsp;21975 Stoney Creek Pl Cottonwood, CA 96022</p>
                            </div>
                        </div>
                    </section>
                    <section id="one" className="tiles front-page">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major landing2">
                                <h3>We Understand</h3>
                                <p>Selling your home can seem like a very intimidating task whether its your choice or not. We just want you to know that we're here to make your life easier and help guid you through this process.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>We Offer Cash</h3>
                                <p>Cash is King and in real estate this can not be more true, most of our offers are in cash… why? Because sellers love cash. Cash offers are the reason we can close in a short amount of time. All of our offers come with a proof of funds to ensure you we have the funding to purchase the property. Along with a proof of funds we also submit a good size down payment.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Wholesaling</h3>
                                <p>What is wholesaling real estate? Wholesaling when a homeowner who owns his/her property free and clear and wants to sell but they don’t want to go threw an agent. In this situation we can go to your house and give it an "as is” appraisal, we then see how much the property would be estimated around after its remodeled, based on that information we will make an offer to put your house under contract. Once under contract we can market the contract then resell the to another redeveloper. You do not have to be a licensed real estate agent to wholesale properties. The advantage to using this strategy is the seller pays no commission fees.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Get An Offer!!</h3>
                                <p>Need to sell your property fast? Give is a call today at (530) 446-2271</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Join Our Team</h3>
                                <p>We are looking to build a team of assets, whether it be a group such as a company or individuals, we need you to bring value to the table and in return we’ll do the same. There’s many perks to working with us, we love to pay our hard working contractors on-time for the benchmarks they complete to our specs. We will be providing constant ...Read more</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>About Valley Property Solutions</h3>
                                <p>Our philosophy. Our mission</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="dark-line major">
                                <h2>See Our Current Projects</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Check Out What's Happening</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex