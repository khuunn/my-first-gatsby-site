import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Me</title>