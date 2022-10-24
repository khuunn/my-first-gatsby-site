import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="져니 소개">
      <p>맛잘알 져니입니당👊</p>
      <p className="py-9">
        <StaticImage src="../images/gamc2.png" alt="main" />
      </p>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <Seo title="져니 | Me" />
