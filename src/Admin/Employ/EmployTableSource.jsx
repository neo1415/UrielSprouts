import moment from 'moment'

export const userColumns = [
 
  {
    field: "createdAt",
    headerName: "Date",
    width: 200,  
    dataType: 'date',  
    format: 'dd/MM/yyyy hh:mm'   
  },

  {
    field: "firstname",
    headerName: "First Name",
    width: 150,
  },
  {
    field: "lastname",
    headerName: "Last Name",
    width: 150,
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
    field: "complete",
    headerName: "Status",
    width: 85,     
  },
];