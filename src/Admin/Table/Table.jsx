import { DataGrid } from "@mui/x-data-grid";
import { userColumns} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import './Table.scss'
import { useNavigate } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Components/firebaseConfig";
import {AuthContext} from '../../Context/AuthContext'
import SideBar from "../SideBar/SideBar";


const List = () => {
  const [data, setData] = useState([]);
  // const {currentUser} = useContext(AuthContext)
  const navigate=useNavigate()
  
  useEffect(()=> {
    const fetchData = async () =>{
      let list =[]
      try{
        const querySnapshot = await getDocs(collection(db,'users'));
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
  console.log(data)



  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleView = async (id) => {
    navigate('/list/' + id)
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
    <div className="list">
        <SideBar />
      <div className="datatable">
      <div className="datatableTitle">
        CV Review
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

};

export default List;

