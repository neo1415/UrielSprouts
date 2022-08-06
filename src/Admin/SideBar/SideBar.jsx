import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>UrielSprouts</span>
        </div>
        <hr></hr>
        <div className='center'>
            <ul>
                <li>
                   <Link to ='/list'><span>CV review</span></Link> 
                </li>
                <li>
                <Link to ='/contact'><span>Contact Us</span></Link> 
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar