import React,{useContext} from 'react'
import './App.scss'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Review from './Pages/Review';
import AdminHome from './Admin/AdminHome';
import Login from './Admin/Login/Login';
import { AuthContext, AuthContextProvider } from './Context/AuthContext';
import SingleUser from './Admin/Singleuser/SingleUser';
import List from './Admin/Table/Table';
import Contact from './Admin/Contact/Contact';
import TestimonialsAdmin from './Admin/TestimonialsAdmin/TestimonialsAdmin';
import Brands from './Admin/Brands/Brands';
import Employability from './Pages/Employability';
import Reg from './EmployabilityContainers/Reg';
import ExecReg from './EmployabilityContainers/ExecReg';
import Employ from './Admin/Employ/Employ';
import EmployExec from './Admin/EmployExec/Employ';
import Upload from './Admin/Gallery/Upload';
import SignIn from './Admin/Authentication/SignIn';
import Account from './Admin/Authentication/Account';
import SignUp from './Admin/Authentication/SignUp';

const App = () => {
  // const {currentUser} = useContext(AuthContext)

  // const RequireAuth= ({children})=>{
  //   return currentUser ? (children) : <Navigate to={'/Login'} />
  // }

  return (
    <div className='app'>

      <Routes >
          <Route exact path="/"
           element = {<Home />} />
          <Route exact path="/review"
           element = {<Review />} />
          <Route exact path="/employability"
           element = {<Employability />} />
          <Route exact path="registration"
           element = {<Reg />} />
            <Route exact path="executive-registration"
           element = {<ExecReg />} />
       
      </Routes>
      
      <AuthContextProvider>
        <Routes>
        <Route exact path="/login"
           element = {<Login />} />
          <Route exact path="/signin"
           element = {<SignIn />} />
          <Route exact path="/signup"
           element = {<SignUp />} />
          <Route exact path="/account"
           element = {<Account />} />
          <Route exact path="/adminHome">
            <Route index element = {  <AdminHome />  } />
            <Route path='/adminHome/:id' element = {<SingleUser />} />
          </Route>
          <Route exact path="/list">
            <Route index element = {  <List />  } />
            <Route path='/list/:id' element = {<SingleUser />} />
          </Route>
          <Route exact path="/contact">
            <Route index element = {  <Contact />  } />
            <Route path='/contact/:id' element = {<SingleUser />} />
          </Route>
          <Route exact path="/testimonialadmin">
            <Route index element = {  <TestimonialsAdmin />  } />
            <Route path='/testimonialadmin/:id' element = {<SingleUser />} />
          </Route>
          <Route exact path="/brands">
            <Route index element = {  <Brands />  } />
            <Route path='/brands/:id' element = {<SingleUser />} />
          </Route>
          <Route exact path="/employ">
            <Route index element = {  <Employ />  } />
            <Route path='/employ/:id' element = {<SingleUser />} />
          </Route>
          <Route exact path="/employ-exec">
            <Route index element = {  <EmployExec />  } />
            <Route path='/employ-exec:id' element = {<SingleUser />} />
          </Route>
          <Route exact path="/upload">
            <Route index element = {  <Upload />  } />
            <Route path='/upload:id' element = {<SingleUser />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App