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
                   <Link to ='/employ'><span>Basic Path</span></Link> 
                </li>
                <li>
                   <Link to ='/employ-exec'><span>Executive Path</span></Link> 
                </li>
                <li>
                <Link to ='/contact'><span>Contact Us</span></Link> 
                </li>
                <li>
                <Link to ='/testimonialadmin'><span>Testimonials</span></Link> 
                </li>
                <li>
                <Link to ='/brands'><span>Brands</span></Link> 
                </li>
                <li>
                <Link to ='/upload'><span>Gallery</span></Link> 
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar