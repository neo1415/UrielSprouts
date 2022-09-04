import React,{useEffect} from 'react'
import './Widget.scss'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlined from '@mui/icons-material/PersonOutlined'
import  {KeyboardArrowDown, ShoppingBagOutlined } from '@mui/icons-material'
import { query, where, collection, getDocs, } from 'firebase/firestore';
import { db } from '../../Components/firebaseConfig'
import { useState } from 'react';
import { doc } from 'firebase/firestore';

const Widget = ({type}) => {

  const [amount, setAmount] = useState(null)
  const [diff, setDiff] = useState(null)


let data;

switch(type){
  case 'user':
    data={
      title:'USERS',
      query: 'users',
      link:'see all Users',
      icon: <PersonOutlined className='icon' />
    };
    break;

    case 'basic':
    data={
      title:'Basic Pathway',
      query: 'registration',
      link:'View all Customers',
      icon: <ShoppingBagOutlined className='icon' />
    };
    break;

    case 'exec':
    data={
      title:'Executive PathWay',
      query: 'Exec-Registration',
      link:'view All Customers',
      icon: <ShoppingBagOutlined className='icon' />
    };
    break;
    default:
    break;
}

useEffect(() => {
  const fetchData = async () => {
    const today = new Date();
    const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

    const lastMonthQuery = query(
      collection(db, 'data.query'),
      where("createdAt", "<=", today),
      where("createdAt", ">", lastMonth)
    );
    const prevMonthQuery = query(
      collection(db, 'data.query'),
      where("createdAt", "<=", lastMonth),
      where("createdAt", ">", prevMonth)
    );

    const lastMonthData = await getDocs(lastMonthQuery);
    const prevMonthData = await getDocs(prevMonthQuery);

    setAmount(lastMonthData.docs.length);
    setDiff(
      ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
        100
    );
    console.log(amount)
  };
  fetchData();
}, []);



  return (
    <div className='widget'>
        <div className='left'>
            <span className='titler'>{data.title}</span>
            <span className='counter'> {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDown/> : <KeyboardArrowUp/> }
          {diff} %
        </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget