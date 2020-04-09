import React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'
import usePosts from '../hooks/usePosts'

const index = () => {
  const { title, description } = useSiteMetadata()
  const posts = usePosts()
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <h2>posts</h2>
      {posts.map(post => (
        <>
          <h2>{post.title}</h2>
          <pre>{JSON.stringify(post, null, 2)}</pre>
        </>
      ))}
    </div>
  )
}

export default index
