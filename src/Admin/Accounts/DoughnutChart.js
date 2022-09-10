import React,{useEffect} from 'react'
import {Doughnut} from 'react-chartjs-2';
import { query, where, collection, getDocs, } from 'firebase/firestore';
import { db } from '../../Components/firebaseConfig'
import { useState } from 'react';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import './DoughnutChart.scss'

const DoughnutChart = () => {

    const [cvMoney, setCvMoney] = useState(null)
    const [basicMoney, setBasicMoney] = useState(null)
    const [execMoney, setExecMoney] = useState(null)
    const [cMoney, setCMoney] = useState(null)
    const [bMoney, setBMoney] = useState(null)
    const [eMoney, setEMoney] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          const today = new Date(new Date());
          const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
          const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
          const thisMonth = new Date(new Date().setMonth(today.getMonth()));
      
          const cvlastMonthQuery = query(
            collection(db, 'users'),
            where("timestamp", "<=", today),
            where("timestamp", ">", lastMonth)
          );
          const cvprevMonthQuery = query(
            collection(db, 'users'),
            where("timestamp", "<=", lastMonth),
            where("timestamp", ">", prevMonth)
          );
      
          const cvthisMonthQuery = query(
            collection(db,'users'),
            where("timestamp", "<=", thisMonth),
            where("timestamp", ">", prevMonth)
          );
      
          const cvlastMonthData = await getDocs(cvlastMonthQuery);
          const cvprevMonthData = await getDocs(cvprevMonthQuery);
          const cvthisMonthData = await getDocs(cvthisMonthQuery);
      
          setCvMoney(((cvthisMonthData.docs.length)*1000).toLocaleString("en-US") )
          setCMoney((cvthisMonthData.docs.length)*1000) 
      
        
          const BasiclastMonthQuery = query(
            collection(db, 'registratiom'),
            where("timestamp", "<=", today),
            where("timestamp", ">", lastMonth)
          );
          const BasicprevMonthQuery = query(
            collection(db, 'registration'),
            where("timestamp", "<=", lastMonth),
            where("timestamp", ">", prevMonth)
          );
      
          const BasicthisMonthQuery = query(
            collection(db, 'registration'),
            where("timestamp", "<=", thisMonth),
            where("timestamp", ">", prevMonth)
          );
      
          const BasiclastMonthData = await getDocs(BasiclastMonthQuery);
          const BasicprevMonthData = await getDocs(BasicprevMonthQuery);
          const BasicthisMonthData = await getDocs(BasicthisMonthQuery);
      
          setBasicMoney(((BasicthisMonthData.docs.length)*12000).toLocaleString("en-US") )
          setBMoney((BasicthisMonthData.docs.length)*12000)

          const execlastMonthQuery = query(
            collection(db, 'Exec-Registration'),
            where("timestamp", "<=", today),
            where("timestamp", ">", lastMonth)
          );
          const execprevMonthQuery = query(
            collection(db, 'Exec-Registration'),
            where("timestamp", "<=", lastMonth),
            where("timestamp", ">", prevMonth)
          );
      
          const execthisMonthQuery = query(
            collection(db, 'Exec-Registration'),
            where("timestamp", "<=", thisMonth),
            where("timestamp", ">", prevMonth)
          );
      
          const execlastMonthData = await getDocs(execlastMonthQuery);
          const execprevMonthData = await getDocs(execprevMonthQuery);
          const execthisMonthData = await getDocs(execthisMonthQuery);
      
          setExecMoney(((execthisMonthData.docs.length)*35000).toLocaleString("en-US") )
          setEMoney((execthisMonthData.docs.length)*35000)

            console.log(cvMoney)
            console.log(basicMoney)
            console.log(execMoney)

        };
        fetchData();
      }, []);
      
      const values= [cMoney, bMoney,eMoney]
      console.log(values)

    const data = {
        labels: ['CV Review','Basic Pathway','Executive Pathway'],
        datasets: [
            {
                label: 'Attendance for Week 1',
                data:[12000, 75000,105000],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgb(253, 27, 27)',
                '#f403d1',
                '#0492c2'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
    
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Total Earnings',
                color:'#bf2e46',
                font: {
                    size:34,
                    weight:800
                },
                padding:{
                    top:30,
                    bottom:30
                },
                responsive:true,
                size:70,
                animation:{
                    animateScale: true,
                               }
            }
        }
    
    }

  return (
    <div className='doughnutChart'>
    <Doughnut data={data} options={options} />

    <div className='Earnings'>
      <p style={{color:'rgb(253, 27, 27)', fontWeight:900}}>CV Review : ₦ {cvMoney}</p>
      <p style={{color:'#f403d1' ,fontWeight:900}}>Basic Pathway : ₦ {basicMoney}</p>
      <p style={{color:'#0492c2', fontWeight:900}}>Executive Pathway : ₦ {execMoney}</p>
    </div>
</div>
  )
}

export default DoughnutChart