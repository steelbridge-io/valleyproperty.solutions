import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerJoinus'
import SEO from '../components/seo'

import assets from '../assets/images/assets.jpg'
import agents from '../assets/images/agents.jpg'
import privatelender from '../assets/images/privatelender.jpg'
import joinourteam from '../assets/images/joinourteam.jpg'

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
                <section id="two" className="spotlights">
                    <section>
                        <Link to="/contact-us" className="image">
                            <img src={assets} alt="Valley Property Solutions" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header id="assets-section" className="major landing1">
                                    <h3>{frontmatter.sectionTwoTitle}</h3>
                                </header>
                                <p>{frontmatter.sectionTwoContent}</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/contact-us" className="image">
                            <img src={agents} alt="Valley Property Solutions" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header id="weoffercash" className="major landing1">
                                    <h3>{frontmatter.sectionThreeTitle}</h3>
                                </header>
                                <p>{frontmatter.sectionThreeContent}</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/contact-us" className="image">
                            <img src={privatelender} alt="Valley Property Solutions" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header id="wholesailing" className="major landing1">
                                    <h3>{frontmatter.sectionFourTitle}</h3>
                                </header>
                                <p>{frontmatter.sectionFourContent}</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link to="/contact-us" className="image">
                            <img src={joinourteam} alt="Valley Property Solutions" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header id="getanoffer" className="major landing1">
                                    <h3>{frontmatter.sectionFiveTitle}</h3>
                                </header>
                                <p>{frontmatter.sectionFiveContent}</p>
                                <ul className="actions">
                                    <li><Link to={frontmatter.linkto} className="button">Contact Us Here</Link></li>
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
        seoTitle
        subTitle
        description
        sectionOneTitle
        sectionTwoTitle
        sectionTwoContent
        sectionThreeTitle
        sectionThreeContent
        sectionFourTitle
        sectionFourContent
        sectionFiveTitle
        sectionFiveContent
        linkto
      }
    }
  }
`
