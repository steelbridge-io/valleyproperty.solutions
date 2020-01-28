import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerCommonreasons'
import SEO from '../components/seo'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import foreClosure from '../assets/images/foreClosure.jpg'
import probate from '../assets/images/probate.jpg'
import getanoffer from '../assets/images/getanoffer.jpg'

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO />
            <Helmet>
                <title>{frontmatter.seoTitle}</title>
                <meta name="description" content={frontmatter.description} />
            </Helmet>

            <section id="banner" className="style2">
                <div className="inner">
                    <header className="major landing2">
                        <h1>{frontmatter.title}</h1>
                    </header>
                    <div className="content">
                        <h2>{frontmatter.subTitle}</h2>
                    </div>
                </div>
            </section>

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major landing1">
                            <h2>{frontmatter.sectionOneTitle}</h2>
                        </header>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </section>
            </div>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={foreClosure} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="foreclosure" className="major landing1">
                                <h3>{frontmatter.sectionTwoTitle}</h3>
                            </header>
                            <p>{frontmatter.sectionTwoContent}</p>
                            <ul className="actions">
                                <li><Link to={frontmatter.sectionTwoLink} className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={probate} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="weoffercash" className="major landing1">
                                <h3>{frontmatter.sectionThreeTitle}</h3>
                            </header>
                            <p>{frontmatter.sectionThreeContent}</p>
                            <ul className="actions">
                                <li><Link to={frontmatter.sectionThreeLink} className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={pic09} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="wholesailing" className="major landing1">
                                <h3>{frontmatter.sectionFourTitle}</h3>
                            </header>
                            <p>{frontmatter.sectionFourContent}</p>
                            <ul className="actions">
                                <li><Link to={frontmatter.sectionFourLink} className="button">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/contact-us" className="image">
                        <img src={getanoffer} alt="Valley Property Solutions" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header id="getanoffer" className="major landing1">
                                <h3>{frontmatter.sectionFiveTitle}</h3>
                            </header>
                            <p>{frontmatter.sectionFiveContent}</p>
                            <ul className="actions">
                                <li><Link to={frontmatter.sectionFiveLink} className="button">Contact Us Here</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

        </Layout>
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
        subTitle
        seoTitle
        description
        sectionOneTitle
        sectionTwoTitle
        sectionTwoContent
        sectionTwoLink
        sectionThreeTitle
        sectionThreeLink
        sectionThreeContent
        sectionFourTitle
        sectionFourLink
        sectionFourContent
        sectionFiveTitle
        sectionFiveLink
        sectionFiveContent
      }
    }
  }
`
