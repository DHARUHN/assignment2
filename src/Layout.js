import React from 'react'
import "./Layout.css";
import "./Service.css";
import { Outlet, Link } from "react-router-dom"
export default function Layout() {
    return (
        <div>
            <nav>
                <ul className="nav_bar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}