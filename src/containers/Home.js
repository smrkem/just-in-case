import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ featured }) => {
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
