import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import { Head } from 'react-static'


export default withRouteData((home) => {
  console.log('home', home)
  let { featured } = home
  return (
    <div>
      <Head>
        <title>Just In Case | Doomsday Prepping Made Easy</title>  
      </Head>      
      <section>
        Welcome to Just In Case - my doomsday prepper product review blog.
      </section>
      <section>
        {convert(featured.contents)}
      </section>
    </div>
  )
})
