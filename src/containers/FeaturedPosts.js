import React from 'react'
import { Link } from 'react-static'
import { featuredPosts } from '../postsmeta'

const FeaturedPosts = ({slug, title, excerpt}) => (
  <section className="featured-posts">
    <h2>Featured:</h2>
    {featuredPosts.map(post => (
      <div key={post.slug} className="featured-post">
        <h3>
          <Link to={`/posts/${post.slug}`} >{ post.title }</Link>
        </h3>
        <p>{post.excerpt}</p>
      </div> 
    ))}
  </section>
)

export default FeaturedPosts