import React from "react";
import { Link,Outlet } from "react-router-dom";
function Header() {
    return (
        <React.Fragment>
        <header>
        <h1>MY BLOG</h1>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/blog">Blog</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><Link to ="/About">About</Link></li>

                </ul>
        <Outlet/>
                
        </nav>
            </header>
            </React.Fragment>
    );
}
export default Header;