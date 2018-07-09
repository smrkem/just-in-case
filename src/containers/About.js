
import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import HeadMeta from './HeadMeta'

export default withRouteData(({ about }) => (
  <div>
    <HeadMeta title="About Me" />
    {convert(about.contents)}
  </div>
))
