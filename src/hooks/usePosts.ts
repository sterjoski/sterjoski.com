import { graphql, useStaticQuery } from 'gatsby'

interface Posts {
  allMdx: {
    nodes: [
      {
        frontmatter: {
          title: string
          slug: string
          author: string
        }
        excerpt: string
      },
    ]
  }
}

const usePosts = () => {
  const data: Posts = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `)
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }))
}

export default usePosts
