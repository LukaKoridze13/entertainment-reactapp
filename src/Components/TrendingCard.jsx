import React, { useEffect, useState } from 'react'
import AddBookmark from './AddBookmark'

import InfoBox from './InfoBox'
export default function TrendingCard(props) {
    const [image, setImage] = useState(null)
    useEffect(() => {
        let name = props.movie.title.toLowerCase().replaceAll(' ', '-')
        let photo = require(`../assets/thumbnails/${name}/trending/large.jpg`)
        setImage(photo)
    }, [props.movie.title])
    return (
        <div className="trendingCard" style={{ backgroundImage: `url(${image})` }}>
            <AddBookmark title={props.movie.title} isBookmarked={props.movie.isBookmarked}/>
            <InfoBox movie={props.movie} marginTop='145px' />
        </div>
    )
}
