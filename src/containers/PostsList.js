
import React from 'react'
import { withRouteData, Link } from 'react-static'
import HeadMeta from './HeadMeta'

export default withRouteData(({ posts, is404}) => {
  console.log('posts from postlist:', posts)
  return (
    <div id="main-content">
      <HeadMeta title="Blog" />
      { is404 && (
        <div className="alert">Oops - couldn't find what you were looking for...</div>
      )}
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
})
