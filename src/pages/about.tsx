import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="져니 소개">
      <p>맛잘알 져니입니당👊</p>
      <p>
        져니의 디져트 픽
        <ul>
          <li></li>
        </ul>
      </p>
      <p>
        져니의 커피 픽
        <ul>
          <li>링크커피</li>
          <li>홀모먼트</li>
        </ul>
      </p>
      <p className="py-9">
        <StaticImage src="../images/gamc2.png" alt="main" />
      </p>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Me</title>
