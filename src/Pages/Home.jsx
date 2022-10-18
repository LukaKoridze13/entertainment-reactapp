import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from '../Components/Navigation'
import Search from '../Components/Search'
import { checkLogin } from '../LocalStorage'

export default function Home() {
    let navigate = useNavigate()
    const [search, setSearch] = useState('Search for movies or TV series')
    function change(event) {
        setSearch(event.target.value)
    }
    useEffect(() => {
        if (!checkLogin()) {
            navigate('/entertainment-reactapp/')
        }
    })
    return (
        <div className="home">
            <div className="left">
                <Navigation />
            </div>
            <div className="right">
                <Search search={search} setSearch={setSearch} onClick={() => { search === 'Search for movies or TV series' && setSearch('') }} onChange={change} />
                <Outlet />
            </div>
        </div>
    )
}
