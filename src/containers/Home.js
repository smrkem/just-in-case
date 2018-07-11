import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import HeadMeta from './HeadMeta'


export default withRouteData((home) => {
  let { featured } = home
  return (
    <div>
      

      <section>
        Welcome to Just In Case - my doomsday prepper product review blog.
      </section>
      <section>
        {convert(featured.contents)}
      </section>
    </div>
  )
})
