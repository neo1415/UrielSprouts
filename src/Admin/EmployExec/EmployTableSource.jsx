
export const userColumns = [ 
//  {
//     field: "createdAt",
//     headerName: "Date",
//     width: 230,
//     type:'string'
//   },
  {
    field: "firstname",
    headerName: "First Name",
    width: 180,
  },
  {
    field: "lastname",
    headerName: "Last Name",
    width: 180,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "birthday",
    headerName: "Age",
    width: 100,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 80,
  },
  {
    field: "levelOfEducation",
    headerName: "Education",
    width: 230,
  },
  {
    field: "PrefferedAreaOfExpertise",
    headerName: "Expertise",
    width: 230,
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