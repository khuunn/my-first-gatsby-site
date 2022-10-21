import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="져니 소개">
      <p>
        맛잘알 져니입니당👊
      </p>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Me</title>