import React,{useEffect,useState} from 'react'
import { collection, getDocs, deleteDoc,doc, } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { db } from "../../Components/firebaseConfig";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from './contactTableSource';


const Contact = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async () =>{
          let list =[]
          try{
            const querySnapshot = await getDocs(collection(db,'contactForm'));
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
          await deleteDoc(doc(db, "contactForm", id));
          setData(data.filter((item) => item.id !== id));
        } catch (err) {
          console.log(err);
        }
      };
      const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                {/* <Link to="adminHome/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link> */}
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
      return (
        <div className="datatable">
          <div className="datatableTitle">
            Add New User
            <Link to="/adminHome/new" className="link">
              Add New
            </Link>
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
      );
}

export default Contact