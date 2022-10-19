import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from '../Components/Navigation'
import Search from '../Components/Search'
import { checkLogin } from '../LocalStorage'

export default function Home() {
    let navigate = useNavigate()
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
                <Search />
                <Outlet />
            </div>
        </div>
    )
}
