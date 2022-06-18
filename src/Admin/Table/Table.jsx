import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Table.scss'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/firebase";
import uploadFileProgress from "../../Components/FileUploader/uploadFileProgress";
import { addDoc } from "firebase/firestore";

const List = () => {
  const [data, setData] = useState([]);
  
  const [imageURL, setImageURL] = useState(null)

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

  // useEffect(() => {
  //   const uploadFile = async () => {
  //     const fileName =  file.name.split('.').pop();
  //     try {
  //       const url = await uploadFileProgress(
  //         file
  //       );
  //       const galleryDoc = {
  //         imageURL: url
  //       };
  //       await addDoc(collection, galleryDoc, fileName);
  //       setImageURL(null);
  //     } catch (error) {
  //       console.log({
  //         isAlert: true,
  //         severity: 'error',
  //         message: error.message,
  //         timeout: 8000,
  //         location: 'main',
  //       });
  //       console.log(error);
  //     }
  //   };
  //   setImageURL(URL.createObjectURL(file));
  //   uploadFile();
  // }, [file]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleDownload = async (id) => {
    try {
      const response = await fetch(imageURL);
      const data = await response.blob();
      const blob = URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = blob;
      link.download = id;
      link.click();
      URL.revokeObjectURL(blob);
      link.remove();
    } catch (error) {
      console.log({
        isAlert: true,
        severity: 'error',
        message: error.message,
        timeout: 8000,
        location: 'main',
      });
      console.log(error);
    }
  }
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="adminHome/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDownload(params.row.id)}
            >
              Download
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
};

export default List;

