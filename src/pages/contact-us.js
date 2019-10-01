import React from 'react'
import Helmet from 'react-helmet'
import LayoutContact from '../components/layoutContact'

import pic11 from '../assets/images/pic11.jpg'



const ContactUs = (props) => (

    <LayoutContact>
    <Helmet>
        <title>Generic - Forty by HTML5 UP</title>
        <meta name="description" content="Generic Page" />
    </Helmet>
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
            <section className="split">
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
    </LayoutContact>
)

export default ContactUs