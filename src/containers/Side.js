import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'

export default withRouteData(({featured}) => {

  return (
    <div id="sidebar">
      <section>
        <h2>Featured:</h2>
        {featured && featured.map((post) => (
          <div key={post.slug} className="featured-post">
            <Link to={`/posts/${post.slug}`} ><h3>{ post.title }</h3></Link>
            {convert(post.excerpt)}
          </div>
        ) )}
      </section>
    </div>
  )
})