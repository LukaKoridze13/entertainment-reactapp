import React, { useEffect, useState } from 'react'
import BE from '../assets/icon-bookmark-empty.svg'
import BF from '../assets/icon-bookmark-full.svg'
import InfoBox from './InfoBox'
export default function TrendingCard(props) {
    const [image, setImage] = useState(null)
    useEffect(() => {
        let name = props.movie.title.toLowerCase().replaceAll(' ', '-')
        let photo = require(`../assets/thumbnails/${name}/trending/large.jpg`)
        setImage(photo)
    }, [])
    return (
        <div className="trendingCard" style={{ backgroundImage: `url(${image})` }}>
            <div className="img">
                <img src={BE} alt="Bookmark" />
            </div>
            <InfoBox movie={props.movie} />
        </div>
    )
}
