import './Nav.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import Navlinks from "./Navlinks"
import Logo from "../../Images/logo5.jpeg"

function createNavLink(item) {
    return <li key={item.id}><NavLink exact to={`/category/${item.category}`} >{item.name}</NavLink></li>
}

function NavBar() {
    const [isactive, setActive] = useState(false)
    const clickHandler = () => setActive((prevState) => !prevState);
    const user = localStorage.getItem("user")
    let loggedIn = true;
    if (user == null) {
        loggedIn = false;
    }

    return (
        <div className="Nav-Container">
            <nav className="navbar">
                {/* <div className="logo">
                    
                    <span className="siren">Blogssteria</span>
                </div> */}
                <div className="nav-list web-bg-nav">
                    <div onClick={clickHandler}><i className="fas menu-btn fa-bars" ></i> </div>
                    <div className='space'>
                        <div className='logo-img'><img width="100px" height="100px" src={Logo} alt='LOGO' /></div>
                        <div className='logo-text'>Blogsteria</div>
                        <ul className={isactive ? "show" : ""}>
                            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                            {Navlinks.map(createNavLink)}

                            <li><NavLink exact to="/GetStarted" activeClassName="active">{loggedIn ? "View Profile" : "Get Started"}</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default NavBar;
