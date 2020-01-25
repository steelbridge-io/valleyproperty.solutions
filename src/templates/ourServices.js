import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'

import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import weOfferCash from '../assets/images/weOfferCash.jpg'
import weUnderstand from '../assets/images/weUnderstand.jpg'
import getanoffer from '../assets/images/getanoffer.jpg'
import wholeSailing from '../assets/images/wholeSailing.jpg'

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
                {/*<section id="one">
                    <div className="inner">
                    <header className="major landing1">
                        <h2>{frontmatter.sectionOneTitle}</h2>
                    </header>
                   <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
                </section>*/}
                <section id="two" className="spotlights">
                    <section>
                        <Link to={frontmatter.sectionTwoLink} className="image">
                            <img src={weUnderstand} alt="Valley Property Solutions" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header id="weunderstand" className="major landing1">
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
                        <Link to={frontmatter.sectionThreeLink} className="image">
                            <img src={weOfferCash} alt="Valley Property Solutions" />
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
                        <Link to={frontmatter.sectionFourLink} className="image">
                            <img src={wholeSailing} alt="Valley Property Solutions" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header id="wholesailing" className="major landing1">
                                    <h3>{frontmatter.sectionFourTitle}</h3>
                                </header>
                                <p>{frontmatter.sectionFourContent}</p>
                                <ul className="actions">
                                    <li><Link to={frontmatter.sectionFourLink} className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to={frontmatter.sectionFiveLink} className="image">
                            <img src={getanoffer} alt="Valley Property Solutions" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header id="getanoffer" className="major landing1">
                                    <h3>{frontmatter.sectionFiveTitle}</h3>
                                </header>
                                <p>{frontmatter.sectionFiveContent}</p>
                                <ul className="actions">
                                    <li><Link to={frontmatter.sectionFiveLink} className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
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
        sectionOneTitle
        sectionTwoLink
        sectionThreeLink
        sectionFourLink
        sectionFiveLink
        sectionTwoTitle
        sectionThreeTitle
        sectionFourTitle
        sectionFiveTitle
        sectionTwoContent
        sectionThreeContent
        sectionFourContent
        sectionFiveContent
      }
    }
  }
`
