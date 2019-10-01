import React from 'react'
import Helmet from 'react-helmet'
import LayoutContact from '../components/layoutContact'
import pic11 from '../assets/images/pic11.jpg'
import piclogoleft from "../assets/images/VPS_Logo.png";

const ContactUs = (props) => (

    <LayoutContact>
        <Helmet>
            <title>Valley Property Solutions | Contact Us</title>
            <meta name="description" content="Contact a realestate wholesale service and take the first step in getting cash for your home." />
        </Helmet>
        <div id="main">
            <div><img src={piclogoleft} alt="" /></div>
            <section id="top-fp-cta">
                <div className="inner contact-us">
                    <header className="major landing1">
                        <h1> Contact Us - Valley Property Solutions</h1>
                    </header>
                    <div className="content cta">
                        <h2>(530) 953-5617&nbsp;&nbsp;‬|&nbsp;&nbsp;21975 Stoney Creek Pl Cottonwood, CA 96022</h2>
                    </div>
                </div>
            </section>


            <section id="contactus">
                <div className="inner">
                    <section>
                        <form method="post" action="handler.php">
                            <div className="field half first">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="6"></textarea>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="special" /></li>
                                <li><input type="reset" value="Clear" /></li>
                            </ul>
                        </form>
                    </section>
                    <section id="contact-us-footer" className="split">
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-envelope"></span>
                                <h3>Email</h3>
                                <a href="#">contact@valleyproperty.solutions</a>
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
                                <span>21975 Stoney Creek Pl<br />
                        Cottonwood, CA 96022<br />
                        United States of America</span>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </div>
    </LayoutContact>
)

export default ContactUs