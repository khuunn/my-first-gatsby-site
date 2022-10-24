import { graphql, HeadFC } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { IBlogPost } from '.'

interface IBlogPostPage {
  mdx: IBlogPost
}

interface BlogPostPageProps {
  children: any
  data: IBlogPostPage
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ children, data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>등록일: {data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export default BlogPostPage

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head: HeadFC<IBlogPostPage> = ({ data }) => {
  return <Seo title={data.mdx.frontmatter.title} />
}
