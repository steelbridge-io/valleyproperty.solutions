import React from 'react'
const today = new Date();


const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>

            <ul className="copyright">
                <li>&copy;{today.getFullYear()} Valley Property Solutions</li><li>Design: <a href="https://valleyproperty.solutions/website">Ask Us About Our Website</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
