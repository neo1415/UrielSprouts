import React,{useContext} from 'react'
import './App.scss'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Review from './Pages/Review';
import AdminHome from './Admin/AdminHome';
import Login from './Admin/Login/Login';
import { AuthContext } from './Context/AuthContext';
import SingleUser from './Admin/Singleuser/SingleUser';

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
          <Route exact path="/login"
           element = {<Login />} />
          <Route exact path="/adminHome">
            <Route index element = { <RequireAuth> <AdminHome /> </RequireAuth> } />
            <Route path='/adminHome/:id' element = {<RequireAuth ><SingleUser /></RequireAuth>} />
          </Route>
          
      </Routes>
    </div>
  )
}

export default App