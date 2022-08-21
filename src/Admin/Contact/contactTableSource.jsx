
export const userColumns = [

  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  // {
  //   field: "createdAt",
  //   headerName: "time",
  //   width: 230,
  // },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "message",
    headerName: "Message",
    width: 230,
    height:600,    
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];