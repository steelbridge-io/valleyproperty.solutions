import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import SEO from '../components/seo'


import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import ourServicesFront from '../assets/images/ourServicesFront.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <SEO />
                <Helmet
                    title="Valley Property Solutions LLC | Wholesale Property Investing"
                    meta={[
                        { name: 'description', content: 'Wholesale Property Sales in California. Valley Property Solutions LLC helps you sell your home fast. We specialize in wholesale property investing.' },
                        { name: 'keywords', content: 'wholesale, property, home, realestate, wholesale property investing' },
                    ]}
                >
                    <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="top-fp-cta" className="tiles">
                        <div className="inner">
                            <div className="col-10">
                            <header className="major landing1">
                                <h1> Contact Us - Valley Property Solutions</h1>
                            </header>
                            <div class="content cta">
                                <h2>‭(530) 446-2271‬&nbsp;&nbsp;‬|&nbsp;&nbsp;21975 Stoney Creek Pl Cottonwood, CA 96022</h2>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section id="one" className="tiles front-page">
                        <article id="article-one" style={{backgroundImage: `url(${ourServicesFront})`}}>
                            <header className="major landing2">
                                <h3>Our Services  <span className="fa"></span></h3>
                                <p className="lead">How We Can Help You <Link to="/wholesale-home-help-services">...Read more</Link></p>
                            </header>
                            <Link to="/wholesale-home-help-services" className="link primary"></Link>
                        </article>
                        <article id="article-two" style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Common Reasons For Selling  <span className="fa"></span></h3>
                                <p className="lead">We Make Selling Easy <Link to="/common-reasons-for-selling">...Read more</Link></p>
                            </header>
                            <Link to="/common-reasons-for-selling" className="link primary"></Link>
                        </article>
                        <article id="article-three" style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Properties We Like  <span className="fa"></span></h3>
                                <p className="lead">Find out about the types and kinds of properties we purchase <Link to="/properties-we-purchase">...Read more</Link></p>
                            </header>
                            <Link to="/properties-we-purchase" className="link primary"></Link>
                        </article>
                        <article id="article-four" style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Get An Offer  !!</h3>
                                <p className="lead">Need to sell your property fast? Give is a call today at (530) 446-2271 <Link to="/wholesale-home-help-services/#getanoffer">...Read more</Link></p>
                            </header>
                            <Link to="/wholesale-home-help-services/#getanoffer" className="link primary"></Link>
                        </article>
                        <article id="article-five"  style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Join Our Team  <span className="fa fa-sign-in"></span></h3>
                                <p className="lead">We are looking to build a team of assets, whether it be a group such as a company or individuals, we need you to bring value to <Link to="/join-valley-property-solutions">...Read more</Link></p>
                            </header>
                            <Link to="/join-valley-property-solutions" className="link primary"></Link>
                        </article>
                        <article id="article-six" style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>About Valley Property Solutions  <span className="fa fa-graduation-cap"></span></h3>
                                <p className="lead">Our philosophy. Our mission <Link to="/about-valley-property-solutions">...Read more</Link></p>
                            </header>
                            <Link to="/about-valley-property-solutions" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="dark-line major">
                                <h2>See Our Current Projects  <span className="fa fa-home"></span></h2>
                            </header>
                            <p>We are currenlty working on developing this section of our website and will have a portfolio soon.</p>
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

let schemaOrgJSONLD = [
    {
        "@context": "http://www.schema.org",
        "@type": "RealEstateAgent",
        "name": "Valley Property Solutions",
        "url": "https://valleyproperty.solutions",
        "sameAs": [
            "https://valleyproperty.solutions/contact-us"
        ],
        "logo": "https://valleyproperty.solutions/static/VPS_Logo-462bff187d98b65f7b4e097adce34438.png",
        "description": "Northern California Wholesale Realestate Sales & Investments",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "21975 Stoney Creek Pl",
            "addressLocality": "Cottonwood",
            "addressRegion": "California",
            "postalCode": "96022",
            "addressCountry": "United States"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.358980",
            "longitude": "-122.218530"
        },
        "hasMap": "https://www.latlong.net/c/?lat=40.358978&long=-122.218529",
        "openingHours": "Mo, Tu, We, Th, Fr 08:00-17:00",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "(530) 953-5617‬",
            "contactType": "Telephone"
        }
    }
]