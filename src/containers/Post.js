import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import HeadMeta from './HeadMeta'

export default withRouteData(({ post }) => (
  <div id="main-content">
    <HeadMeta title={post.title} />
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    {convert(post.contents)}
  </div>
))
