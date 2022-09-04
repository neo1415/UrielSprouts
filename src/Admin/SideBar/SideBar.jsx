import React from 'react'
import './Sidebar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'

const SideBar = () => {
  const {user, logout} = UserAuth()

  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
      await logout()
      navigate('/signin')

    }catch (e){
      console.log(e.message)
    }
  }

  return (
    <div className='sidebar'>
        <div className='top'>
        <Link to ='/adminHome'><span className='logo'>UrielSprouts</span></Link>   
            <p>{user && user.displayName}</p>
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
        <hr/>
        <div className='bottom'>
        <p className='logout' onClick={handleLogout}>LogOut</p>
        </div>
       
    </div>
  )
}

export default SideBar