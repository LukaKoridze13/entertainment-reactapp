import React, { useEffect, useState } from 'react'
import AddBookmark from './AddBookmark'
import InfoBox from './InfoBox'
export default function Card(props) {
    const [image, setImage] = useState(null)
    useEffect(() => {
        let name = props.movie.title.toLowerCase().replaceAll(' ', '-').replaceAll("’",'').replaceAll('ii','2').replaceAll(':','')
        let photo = require(`../assets/thumbnails/${name}/regular/large.jpg`)
        setImage(photo)
    }, [props.movie.title])
    return (
        <div className='card'>
            <div className="trendingCard" style={{ backgroundImage: `url(${image})` }}>
                <AddBookmark margin='15px 15px 0px 0px' title={props.movie.title} isBookmarked={props.movie.isBookmarked} ren={props.ren} setRen={props.setRen} />
            </div>
            <InfoBox movie={props.movie} marginTop='8px' />
        </div>

    )
}
