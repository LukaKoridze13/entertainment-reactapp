import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import HomeIcon from './HomeIcon'
import MoviesIcon from './MoviesIcon'
import TvShowsIcon from './TvShowsIcon'
import BookmarksIcon from './BookmarksIcon'
export default function Navigation(p) {
    function hover(e) {
        if (e.target.getAttribute('fill') !== '#FC4747') {
            e.target.setAttribute('fill', '#FC4747')
        } else {
            e.target.setAttribute('fill', '#5A698F')
        }
    }
    return (
        <nav>
            <Logo />
            <div className="icon">
                <NavLink to='/entertainment-reactapp/home'>
                    <HomeIcon onMouseEnter={hover} onMouseLeave={hover} />
                </NavLink>
                <NavLink to='/entertainment-reactapp/home/movies'>
                    <MoviesIcon onMouseEnter={hover} onMouseLeave={hover} />
                </NavLink>
                <NavLink to='/entertainment-reactapp/home/tv-series'>
                    <TvShowsIcon onMouseEnter={hover} onMouseLeave={hover} />
                </NavLink>
                <NavLink to='/entertainment-reactapp/home/bookmarks'>
                    <BookmarksIcon onMouseEnter={hover} onMouseLeave={hover} />
                </NavLink>
            </div>
        </nav>
    )
}
