import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <SEO />
        <Helmet>
            <title>Valley Property Solutions | Our Projects</title>
            <meta name="description" content="Discover what Valley Property Solutions can do in helping you with wholesale property sales, home renovation and remodel. Review our projects here." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major landing1">
                        <h1>We Are Bulding Our Property Page</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="Valley Property Solutions" /></span>
                    <p>Sorry we just don' have the Properties content quite ready yet. We are working with our web developer on the final layout and should have someting to share in a week or so.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic