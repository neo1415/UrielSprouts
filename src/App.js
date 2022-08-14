import React,{useContext} from 'react'
import './App.scss'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Review from './Pages/Review';
import AdminHome from './Admin/AdminHome';
import Login from './Admin/Login/Login';
import { AuthContext } from './Context/AuthContext';
import SingleUser from './Admin/Singleuser/SingleUser';
import List from './Admin/Table/Table';
import Contact from './Admin/Contact/Contact';
import TestimonialsAdmin from './Admin/TestimonialsAdmin/TestimonialsAdmin';
import Brands from './Admin/Brands/Brands';
import Employability from './Pages/Employability';
import Reg from './EmployabilityContainers/Reg';
import ExecReg from './EmployabilityContainers/ExecReg';

const App = () => {
  const {currentUser} = useContext(AuthContext)

  const RequireAuth= ({children})=>{
    return currentUser ? (children) : <Navigate to={'/Login'} />
  }

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
          <Route exact path="/login"
           element = {<Login />} />
          <Route exact path="/adminHome">
            <Route index element = { <RequireAuth> <AdminHome /> </RequireAuth> } />
            <Route path='/adminHome/:id' element = {<RequireAuth ><SingleUser /></RequireAuth>} />
          </Route>
          <Route exact path="/list">
            <Route index element = { <RequireAuth> <List /> </RequireAuth> } />
            <Route path='/list/:id' element = {<RequireAuth ><SingleUser /></RequireAuth>} />
          </Route>
          <Route exact path="/contact">
            <Route index element = { <RequireAuth> <Contact /> </RequireAuth> } />
            <Route path='/contact/:id' element = {<RequireAuth ><SingleUser /></RequireAuth>} />
          </Route>
          <Route exact path="/testimonialadmin">
            <Route index element = { <RequireAuth> <TestimonialsAdmin /> </RequireAuth> } />
            <Route path='/testimonialadmin/:id' element = {<RequireAuth ><SingleUser /></RequireAuth>} />
          </Route>
          <Route exact path="/brands">
            <Route index element = { <RequireAuth> <Brands /> </RequireAuth> } />
            <Route path='/brands/:id' element = {<RequireAuth ><SingleUser /></RequireAuth>} />
          </Route>
      </Routes>
    </div>
  )
}

export default App