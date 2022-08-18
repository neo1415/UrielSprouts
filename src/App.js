import React from 'react'
import './App.scss'
import { Routes, Route} from 'react-router-dom';
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

const App = () => {
  // const {currentUser} = useContext(AuthContext)

  // const RequireAuth= ({children})=>{
  //   return currentUser ? (children) : <Navigate to={'/Login'} />
  // }

  return (
    <div className='app'>
    <AuthContextProvider>
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

  
        <Routes>
        <Route exact path="/login"
           element = {<Login />} />
          <Route exact path="/signin"
           element = {<SignIn />} />
          <Route exact path="/signup"
           element = {<SignUp />} />

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
            <Route path='/contact/:id' element = {<ProtectedRoute><SingleUser /></ProtectedRoute>} />
          </Route>
          <Route exact path="/testimonialadmin">
            <Route index element = {  <ProtectedRoute><TestimonialsAdmin /></ProtectedRoute> } />
            <Route path='/testimonialadmin/:id' element = {<ProtectedRoute><SingleUser /></ProtectedRoute>} />
          </Route>
          <Route exact path="/brands">
            <Route index element = { <ProtectedRoute><Brands /></ProtectedRoute>   } />
            <Route path='/brands/:id' element = {<ProtectedRoute><SingleUser /></ProtectedRoute>} />
          </Route>
          <Route exact path="/employ">
            <Route index element = {  <ProtectedRoute ><Employ /></ProtectedRoute>  } />
            <Route path='/employ/:id' element = {<ProtectedRoute><SingleUser /></ProtectedRoute>} />
          </Route>
          <Route exact path="/employ-exec">
            <Route index element = {  <ProtectedRoute ><EmployExec /></ProtectedRoute>  } />
            <Route path='/employ-exec:id' element = {<ProtectedRoute><SingleUser /></ProtectedRoute>} />
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