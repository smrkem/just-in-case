import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import FeaturedPosts from './FeaturedPosts'

export default withRouteData(() => {
  return (
    <div id="main-content" className="home">
      <div className="hero">
        <h1><span>SHTF - When Shit Hits The Fan</span></h1>
        <p>The incident. The event. The big disaster. A breakdown in social order. Civilizational collapse.</p>
      </div>
      <section>
        <h2>Will you be prepared?</h2>
        <p></p>
      </section>
      <FeaturedPosts />
    </div>
  )
})
