import React from 'react'
import { Link, graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'
import piclogoleft from '../assets/images/VPS_Logo.png'

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

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major landing1">
                            <h1>{frontmatter.title}</h1>
                        </header>
                        <div className="image main about-img"><img src={piclogoleft} alt="Valley Property Solutions" /></div>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                        <ul className="actions welike">
                            <li><Link to={frontmatter.linkto} className="button">Contact Us To Learn More</Link></li>
                        </ul>

                    </div>
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
        description
        linkto
      }
    }
  }
`
