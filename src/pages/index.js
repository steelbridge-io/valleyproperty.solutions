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
                            <header className="major landing1">
                                <h1> Contact Us - Valley Property Solutions</h1>
                            </header>
                            <div class="content cta">
                                <h2>(530) 953-5617&nbsp;&nbsp;‬|&nbsp;&nbsp;21975 Stoney Creek Pl Cottonwood, CA 96022</h2>
                            </div>
                        </div>
                    </section>
                    <section id="one" className="tiles front-page">
                        <article id="article-one" style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major landing2">
                                <h3>We Understand  <span className="fa fa-check-circle-o"></span></h3>
                                <p className="lead">Selling your home can seem like a very intimidating task whether its your choice or not. We just want you to know that we're <Link to="/help-services">...Read more</Link></p>
                            </header>
                            <Link to="/help-services" className="link primary"></Link>
                        </article>
                        <article id="article-two" style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>We Offer Cash  <span className="fa fa-money"></span></h3>
                                <p className="lead">Cash is King and in real estate this can not be more true, most of our offers are in cash… why? Because sellers love cash. Cash offers are the <Link to="/help-services/#weoffercash">...Read more</Link></p>
                            </header>
                            <Link to="/help-services/#weoffercash" className="link primary"></Link>
                        </article>
                        <article id="article-three" style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Wholesaling  <span className="fa fa-life-ring"></span></h3>
                                <p className="lead">What is wholesaling real estate? Wholesaling when a homeowner who owns his/her property free and clear and wants to sell but they don’t want to <Link to="/help-services/#wholesailing">...Read more</Link></p>
                            </header>
                            <Link to="/help-services/#wholesailing" className="link primary"></Link>
                        </article>
                        <article id="article-four" style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Get An Offer  !!</h3>
                                <p className="lead">Need to sell your property fast? Give is a call today at (530) 446-2271 <Link to="/help-services/#getanoffer">...Read more</Link></p>
                            </header>
                            <Link to="/help-services/#getanoffer" className="link primary"></Link>
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
                                <p className="lead">Our philosophy. Our mission <Link to="/properties-we-purchase-what-properties-catch-our-attention">...Read more</Link></p>
                            </header>
                            <Link to="/properties-we-purchase-what-properties-catch-our-attention" className="link primary"></Link>
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