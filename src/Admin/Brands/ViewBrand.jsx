import React,{useEffect, useState} from 'react'
import { getDocs } from 'firebase/firestore';
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from './brandsTableSource';
import { collection } from 'firebase/firestore';
import { db, storage } from '../../Components/firebaseConfig';
import { deleteDoc, orderBy, query, onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './ViewBrand.scss'
import SideBar from '../SideBar/SideBar';
import { Params } from 'react-router-dom';
import { deleteObject,ref } from 'firebase/storage';

const ViewBrand = () => {

    const [data, setData] = useState([])

    const navigate=useNavigate()

    // useEffect(()=> {
    //     const fetchData = async () =>{
    //       let list =[]
    //       try{
    //         const querySnapshot = await getDocs(collection(db,'brands'));
    //         querySnapshot.forEach((doc)=>{
    //           list.push({id: doc.id, ...doc.data()})
    //           console.log(doc.id, "=>", doc.data());
    //         })
    //         setData(list)
    //         console.log(list)
    //       } catch(err){
    //         console.log(err)
    //       }
    //     }
    //     fetchData()
    //   },[])
    useEffect(()=> {
      const dataRef = collection(db, 'brands')
      const q = query(dataRef, orderBy('createdAt', 'desc'));
      onSnapshot(q,(snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id:doc.id,
          ...doc.data(),
        }))
        setData(data);
        console.log(data)
      })
    },[])

      const handleDelete = async (id) => {
        try {
          await deleteDoc(doc(db, "brands", id));
          setData(data.filter((item) => item.id !== id));
        } catch (err) {
          console.log(err);
        }
      };
    
      const handleView = async (id) => {
        navigate('/brands/' + id)
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
        <div className="brandslist">
          <div className="datatable">
          <div className="datatableTitle">
            Brands
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

export default ViewBrand