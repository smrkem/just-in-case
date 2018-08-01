import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'


export default withRouteData(({posts}) => {
  console.log('posts', posts)
  return (
    <div id="main-content">
      

      <section>
        Welcome to Just In Case - my doomsday prepper product review blog.
      </section>
    </div>
  )
})
