import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import AdminOption from "../AdminProfile/AdminOption.jsx"

const Header = () => {
    const { isAuthenticated } = useSelector((state) => state.admin);


    return (
        <>
            <div className="Navbar">
                <div className="nav-left">
                    <Link to="/">
                        <h1>TAP<span>BRO</span></h1>
                    </Link>
                </div>
                <div className="nav-middle">
                    <Link to="/">Home</Link>
                    <Link to="/goalandachivment">Goal & Achivment</Link>
                    <Link to="/contact">Contact</Link>
                    {isAuthenticated ? null : <Link to="/loginadmin">Login</Link>}
                    {/* {isAuthenticated ? <Search /> : null} */}
                </div>
                <div className="nav-right">
                    {/* {isAuthenticated ? <AdminOption /> : null} */}
                </div>
            </div>
        </>
    )
}

export default Header
