import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="져니 홈">
      <p>져니 홈에 오신 것을 환영합니당✌</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="져니 | 홈" />
