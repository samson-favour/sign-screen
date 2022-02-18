import React from 'react'
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.jpg'
import dashboard from '../images/Icon (1).jpg'
import profile from '../images/Icon3.jpg'
import signUp from '../images/Vector.png'
import signIn from '../images/Vector.jpg'

const Navbar = ({toggle}) => {
    return(
        <nav className="navbar">
        <div class="nav-center">
            <div class="nav-header">
                <img src={logo} alt="" />
                <h1>PURITY UI DASHBOARD</h1>
            </div>
            <div>
            <button className='bars sidebar-toggle' onClick={toggle}>
                <FaBars />
            </button>
            </div>
            <ul class="nav-links" id="nav-links">
                   
                   <li class="nav-list">
                       <img src={dashboard} alt="" />
                       <a href="#" class="nav-link">DASHBOARD</a>
                   </li>
                   <li class="nav-list">
                       <img src={profile} alt="" />
                       <a href="#" class="nav-link">PROFILE</a>
                   </li>
                   <li class="nav-list">
                       <img src={signUp} alt="" />
                       <a href="#" class="nav-link">SIGN UP</a>
                   </li>
                   <li class="nav-list">
                       <img src={signIn} alt="" />
                       <a href="#" class="nav-link">SIGN IN</a>
                   </li>
               </ul>
               <div class="nav-button">
                   <button>
                       Free Download
                   </button>     
               </div>    
                  
        </div>
    </nav>
    )
}

export default Navbar;