import React from 'react'
import { Head } from 'react-static'

const HeadMeta = (props) => {
    return (
        <Head>
            <title>{props.title ? props.title + ' - ' : ""} Just In Case | Doomsday Prepping Made Easy</title>
        </Head>
    )
}

export default HeadMeta
