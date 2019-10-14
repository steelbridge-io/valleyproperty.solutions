import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section id="contact-footer">
                <h3>Contact Us</h3>
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
                        <a href="mailto:contact@valleyproperty.solutions" title="click to send contact email to Valley Property Solutions">contact@valleyproperty.solutions</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Business Phone</h3>
                        <span><a href="tel:15304462271" title="Business telephone number for Valley Property Solutions">‭(530) 446-2271</a>‬‬</span>
                    </div>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Cell Phone</h3>
                        <span><a href="tel:15309535617" title="Cell Phone Number To Call Valley Property Solutions">(530) 953-5617</a></span>
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
)

export default Contact
