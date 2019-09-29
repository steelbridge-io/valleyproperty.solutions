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
                                <h3>We Understand  <span className="fa fa-check-circle-o"></span></h3>
                                <p className="lead">Selling your home can seem like a very intimidating task whether its your choice or not. We just want you to know that we're <Link to="/help">...Read more</Link></p>
                            </header>
                            <Link to="/help" className="link primary"></Link>,
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>We Offer Cash  <span className="fa fa-money"></span></h3>
                                <p className="lead">Cash is King and in real estate this can not be more true, most of our offers are in cash… why? Because sellers love cash. Cash offers are the <Link to="/help/#weoffercash">...Read more</Link></p>
                            </header>
                            <Link to="/help/#weoffercash" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Wholesaling  <span className="fa fa-life-ring"></span></h3>
                                <p className="lead">What is wholesaling real estate? Wholesaling when a homeowner who owns his/her property free and clear and wants to sell but they don’t want to <Link to="/help/#wholesailing">...Read more</Link></p>
                            </header>
                            <Link to="/help/#wholesailing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Get An Offer  !!</h3>
                                <p className="lead">Need to sell your property fast? Give is a call today at (530) 446-2271 <Link to="/help/#getanoffer">...Read more</Link></p>
                            </header>
                            <Link to="/help/#getanoffer" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Join Our Team  <span className="fa fa-sign-in"></span></h3>
                                <p className="lead">We are looking to build a team of assets, whether it be a group such as a company or individuals, we need you to bring value to <Link to="/contact-us">...Read more</Link></p>
                            </header>
                            <Link to="/contact-us" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>About Valley Property Solutions  <span className="fa fa-graduation-cap"></span></h3>
                                <p className="lead">Our philosophy. Our mission <Link to="/about">...Read more</Link></p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="dark-line major">
                                <h2>See Our Current Projects  <span className="fa fa-home"></span></h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/projects" className="button next">Check Out What's Happening</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex