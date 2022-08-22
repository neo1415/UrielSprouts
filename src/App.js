import React from 'react'
import './App.scss'
import { Routes, Route, Router} from 'react-router-dom';
import Home from './Pages/Home';
import Review from './Pages/Review';
import AdminHome from './Admin/AdminHome';
import Login from './Admin/Login/Login';
import { AuthContextProvider } from './Context/AuthContext';
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
import SignUp from './Admin/Authentication/SignUp';
import ProtectedRoute from './Admin/Authentication/ProtectedRoute';
import ResetPassword from './Admin/Authentication/ResetPassword';
import ContactUser from './Admin/Singleuser/ContactUser';
import TestimonialUser from './Admin/Singleuser/TestimonialUser';
import EmployUser from './Admin/Singleuser/EmployUser';
import ExecEmployUser from './Admin/Singleuser/ExecEmployUser';
import Checkout from './Components/Checkout/Checkout';
import { useLocation } from 'react-router-dom';
import AnimateRouters from './Components/AnimateRouters';

const App = () => {
  // const {currentUser} = useContext(AuthContext)

  // const RequireAuth= ({children})=>{
  //   return currentUser ? (children) : <Navigate to={'/Login'} />
  // }



  return (
    <div className='app'>
    <AuthContextProvider>
    <AnimateRouters />  
      <Routes>
          
          <Route exact path="/login"
            element = {<Login />} />
            <Route exact path="/signin"
            element = {<SignIn />} />
            <Route exact path="/signup"
            element = {<SignUp />} />
            <Route exact path="/resetpassword"
            element = {<ResetPassword />} />

            <Route exact path="/adminHome">
              <Route index element = {  <ProtectedRoute><AdminHome /></ProtectedRoute>  } />
              <Route path='/adminHome/:id' element = { <ProtectedRoute><SingleUser /></ProtectedRoute>} />
            </Route>
            <Route exact path="/list">
              <Route index element = { <ProtectedRoute><List /></ProtectedRoute>   } />
              <Route path='/list/:id' element = {<ProtectedRoute><SingleUser /></ProtectedRoute>} />
            </Route>
            <Route exact path="/contact">
              <Route index element = { <ProtectedRoute><Contact /></ProtectedRoute>   } />
              <Route path='/contact/:id' element = {<ProtectedRoute><ContactUser /></ProtectedRoute>} />
            </Route>
            <Route exact path="/testimonialadmin">
              <Route index element = {  <ProtectedRoute><TestimonialsAdmin /></ProtectedRoute> } />
              <Route path='/testimonialadmin/:id' element = {<ProtectedRoute><TestimonialUser /></ProtectedRoute>} />
            </Route>
            <Route exact path="/brands">
              <Route index element = { <ProtectedRoute><Brands /></ProtectedRoute>   } />
              <Route path='/brands/:id' element = {<ProtectedRoute><SingleUser /></ProtectedRoute>} />
            </Route>
            <Route exact path="/employ">
              <Route index element = {  <ProtectedRoute ><Employ /></ProtectedRoute>  } />
              <Route path='/employ/:id' element = {<ProtectedRoute><EmployUser /></ProtectedRoute>} />
            </Route>
            <Route exact path="/employ-exec">
              <Route index element = {  <ProtectedRoute ><EmployExec /></ProtectedRoute>  } />
              <Route path='/employ-exec:id' element = {<ProtectedRoute><ExecEmployUser /></ProtectedRoute>} />
            </Route>
            <Route exact path="/upload">
              <Route index element = {  <ProtectedRoute ><Upload /></ProtectedRoute>  } />
              <Route path='/upload:id' element = {<ProtectedRoute><SingleUser /></ProtectedRoute>} />
            </Route>
      </Routes>
  

      </AuthContextProvider>
    </div>
  )
}

export default App