import React from 'react'
import Helmet from 'react-helmet'
import LayoutContact from '../components/layoutContact'
import pic11 from '../assets/images/pic11.jpg'
import piclogoleft from "../assets/images/vps_logo_403x182.png"
import SEO from '../components/seo'
import {graphql} from "gatsby";

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const {markdownRemark} = data // data.markdownRemark holds your post data
    const {frontmatter, html} = markdownRemark
    return (

        <LayoutContact>
            <SEO/>
            <Helmet>
                <title>{frontmatter.seoTitle}</title>
                <meta name="description"
                      content={frontmatter.description}/>
                <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
            </Helmet>
            <div id="main">

                <section id="top-fp-cta">
                    <div className="inner"><img src={piclogoleft} alt="Valley Property Solutions"/></div>
                    <div className="inner contact-us">
                        <header className="major landing1">
                            <h1>{frontmatter.title}</h1>
                        </header>
                        <div className="content cta">
                            <h2>{frontmatter.address}</h2>
                        </div>
                    </div>
                    <div className="contactUs-content">
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </section>


                <section id="contactus">
                    <div className="inner">
                        <section>
                            <form method="post" action="handler.php">
                                <div className="field half first">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name"/>
                                </div>
                                <div className="field half">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="6"></textarea>
                                </div>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" className="special"/></li>
                                    <li><input type="reset" value="Clear"/></li>
                                </ul>
                            </form>
                        </section>
                        <section id="contact-us-footer" className="split">
                            <section>
                                <div className="contact-method">
                                    <span className="icon alt fa-envelope"></span>
                                    <h3>Email</h3>
                                    <a href="mailto:contact@valleyproperty.solutions">contact@valleyproperty.solutions</a>
                                </div>
                            </section>
                            <section>
                                <div className="contact-method">
                                    <span className="icon alt fa-phone"></span>
                                    <h3>Business Phone</h3>
                                    <span>(530) 953-5617‬</span>
                                </div>
                                <div className="contact-method">
                                    <span className="icon alt fa-phone"></span>
                                    <h3>Cell Phone</h3>
                                    <span>(530) 953-5617</span>
                                </div>
                            </section>
                            <section>
                                <div className="contact-method">
                                    <span className="icon alt fa-home"></span>
                                    <h3>Address</h3>
                                    <span>21975 Stoney Creek Pl<br/>
                        Cottonwood, CA 96022<br/>
                        United States of America</span>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
            </div>
        </LayoutContact>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        seoTitle
        description
        address
      }
    }
  }
`

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
