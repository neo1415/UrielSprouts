import React from 'react'
import './AdminHome.scss'
import Widget from './WIdgets/Widget';
import List from './homeAdmin/Table';
import Header from './homeAdmin/Header';
import SideBar from './SideBar/SideBar';
import Contact from './homeAdmin/Contact';
import Account from './Accounts/Account';
import { UserAuth } from '../Context/AuthContext'

const adminHome = () => {
  const {user} = UserAuth()
  return (
    <div className='listContainer'>
        <SideBar />
    <div className='AdminContainer'>
    <div className='topBar' style={{display:'flex', marginTop:-30}}>
      <input type='text' placeholder=' Search pages' className='adminSearch'/>
      <div style={{display:'flex'}}>
      <p style={{color:'black', fontSize:18, fontWeight:"800", marginRight:10, color:'#bf2e46'}}> {user && user.displayName}Ademola Daniel</p>
      <div style={{borderRadius:20, height:35, width:35,backgroundColor:'blue', display:'flex', justifyContent:'center'}}><p style={{color:'white',fontSize:20, fontWeight:800, position:'absolute'}}>A D</p></div>
      </div>
    </div>
    
    <div className='list-container ' style={{display:'flex'}}>   
      <Widget type='user' />
      <Widget type='basic' />
      <Widget type='exec' />
    </div>   
    <div className='Middle' style={{display:'flex', marginTop:35}}>
    <div className='adminHead' style={{flex:3, position:'relative'}}>
      <Header />
    </div>
    <div className='adminList' style={{flex:3}}>
      <Account />
    </div>
    </div>   
    <div className='adminList' style={{flex:3}}>
     <Contact />
    </div>  
    </div>
    </div>
  )
}

export default adminHome