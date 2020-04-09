import { useStaticQuery, graphql } from 'gatsby'

interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const useSiteMetadata = () => {
  const data: SiteMetadata = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
