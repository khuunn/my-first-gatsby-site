import { graphql, HeadFC } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

interface BlogPageProps {
  data: {
    allFile: {
      nodes: Array<{ name: string }>
    }
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="져니 픽">
      <ul>
        {data.allFile.nodes.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="져니 | 픽" />
