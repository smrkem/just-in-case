
import React from 'react'
import { withRouteData, Link } from 'react-static'
import HeadMeta from './HeadMeta'

export default withRouteData(({ posts }) => (
  <div>
    <HeadMeta title="Blog" />
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
