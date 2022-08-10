
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: 'file',
    headerName:'image',
    width:60 ,
    renderCell:(params) => {
      return(
         <div className="cellWithImg">
          <img className="cellImg" src= {params.row.img} alt='avatar' />
        
         </div>
         )
    }
  },

  {
    field: "company",
    headerName: "Brand",
    width: 230,
  },
  // {
  //   field: "createdAt",
  //   headerName: "time",
  //   width: 230,
  // },

];