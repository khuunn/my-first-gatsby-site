import { graphql, HeadFC, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

export interface IBlogPost {
  frontmatter: {
    title: string
    slug?: string
    date?: string
  }
  id: string
}

interface BlogPageProps {
  data: {
    allMdx: {
      nodes: IBlogPost[]
    }
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="져니 픽">
      <ul>
        {data.allMdx.nodes.map(({ frontmatter, id }) => (
          <article key={id}>
            <h2>
              <Link to={`/blog/${frontmatter.slug}`}>{frontmatter.title}</Link>
            </h2>
            <p>등록일: {frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          slug
          date
        }
        id
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="져니 | 픽" />
