import React from 'react'
const today = new Date();
import useSiteMetadata from "../hooks/user-sitemetadata";


const Footer = (props) => {

    const {title, description } = useSiteMetadata()
        return (
        <footer id="footer">
            <div className="inner">
                <ul className="icons">
                    <li><a href="https://twitter.com/valley_property" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/valleyproperty.solutions/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>

                <ul className="copyright">
                    <li>&copy;{today.getFullYear()} Valley Property Solutions</li><li>Design: <a href="https://steelbridge.io">Built on Gatsby.js</a></li>
                    <li>{title} - {description}</li>
                </ul>
            </div>
        </footer>
        )
}

export default Footer
