import React from 'react'
import './AdminHome.scss'
import List from './Table/Table';
import Contact from './Contact/Contact';

const adminHome = () => {
  return (
    <div className='listContainer'>
        <div className='listTitle'>Latest Transactions</div>
        <List />
        <Contact />
    </div>
  )
}

export default adminHome