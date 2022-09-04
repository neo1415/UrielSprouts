import React from 'react'
import './AdminHome.scss'
import Contact from './Contact/Contact';
import Widget from './WIdgets/Widget';
import List from './homeAdmin/Table';
import Header from './homeAdmin/Header';
import SideBar from './SideBar/SideBar';

const adminHome = () => {
  return (
    <div className='listContainer'>
        <SideBar />
    <div className='AdminContainer'>
    
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
      <List />
    </div>
    </div>   
    <div className='adminList' style={{flex:3}}>
     <List />
    </div>  
    </div>
    </div>
  )
}

export default adminHome