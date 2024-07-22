import React from 'react'
import logo from '../assets/IMAGES/NoWallsLogo.png'


export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                   <img src= {logo} alt="" />
                    <div className="log">
                        <ul>
                            <li>Services</li>
                            <li>Subscribe</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
            </div>
        </>
    )
}
export default Navbar

