
export const userColumns = [
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
    field: "customerName",
    headerName: "customer",
    width: 230,
  },
  {
    field: "company",
    headerName: "company",
    width: 230,
  },
  {
    field: "review",
    headerName: "Testimonial",
    width: 230,
    innerHeight:230
  },
  // {
  //   field: "createdAt",
  //   headerName: "time",
  //   width: 230,
  // },

];