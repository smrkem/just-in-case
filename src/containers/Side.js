import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import FeaturedPosts from './FeaturedPosts'

export default withRouteData(({noSidebar}) => {
  if (noSidebar) return null

  return (
    <div id="sidebar">
      <FeaturedPosts />
    </div>
  )
})