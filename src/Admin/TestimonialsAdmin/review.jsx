import React,{useEffect, useState} from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from './reviewTableSource';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../Components/firebaseConfig';
import { deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import SideBar from '../SideBar/SideBar';
import { orderBy } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './review.scss'

const Reviews = () => {
    // const [testimonials, setTestimonials] = useState([]);
    const [data, setData] = useState([])

    const navigate=useNavigate()

    useEffect(()=> {
        const fetchData = async () =>{
          let list =[]
          try{
            const querySnapshot = await getDocs(collection(db,'testimonials'));
            querySnapshot.forEach((doc)=>{
              list.push({id: doc.id, ...doc.data()})
              console.log(doc.id, "=>", doc.data());
            })
            setData(list)
            console.log(list)
          } catch(err){
            console.log(err)
          }
        }
        fetchData()
      },[])
    // useEffect(() => {
    //     const testRef = collection(db, 'testimonials');
    //     const q= query(testRef, orderBy('createdAt', 'desc'));
    //     onSnapshot(q, (snapshot) => {
    //       const test = snapshot.docs.map((doc) =>({
    //         id: doc.id,
    //         ...doc.data(),
    //       }));
    //       setTestimonials(test);
    //       console.log(test)
    //     });
    //   }, []);
    


    const handleDelete = async (id) => {
      try {
        await deleteDoc(doc(db, "testimonials", id));
        setData(data.filter((item) => item.id !== id));
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleView = async (id) => {
      navigate('/testimonials/' + id)
    };
  
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params, id) => {
          return (
            <div className="cellAction">
              {/* <Link to={"/adminid/" + id} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link> */}
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div>
              <div
                className="viewButton"
                onClick={() => handleView(params.row.id)}
              >
                View
              </div>
  
            </div>
          );
        },
      },
    ];
    return (
      <div className="testimonial-list">
        <div className="datatable">
        <div className="datatableTitle">
          Testimonials
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
      </div>
  
      
    );
}

export default Reviews