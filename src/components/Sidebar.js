import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { BsPersonFill,BsPersonCircle } from 'react-icons/bs';
import { ImKey} from 'react-icons/im'
import {GiCube} from 'react-icons/gi'

const Sidebar = ({isOpen, toggle }) => {
    return(
      <aside class='sidebar show-sidebar' isOpen={isOpen} onClick={toggle}>
      <div class="sidebar-header">
          <h1>PURITY UI DASHBOARD</h1>
          <button className="close-btn" onClick={toggle}>
            <FaTimes/>
          </button>
      </div>
      <ul class='links'>
          <li>
            <span>
              <GiCube/>
            </span>
              <a href="#" class="nav-link">DASHBOARD</a>
          </li>
          <li>
              <span>
                <BsPersonFill />
              </span>
              <a href="#" class="nav-link">PROFILE</a>
          </li>
          <li>
              <span>
                <BsPersonCircle />
              </span>
              <a href="#" class="nav-link">SIGN UP</a>
          </li>
          <li>
              <span>
                <ImKey />
              </span>
              <a href="#" class="nav-link">SIGN IN</a>
          </li>
          <li class="btn">
              <button>
                  Free Download
              </button>  
          </li>
      </ul>
      
    </aside>
    )
}

export default Sidebar;