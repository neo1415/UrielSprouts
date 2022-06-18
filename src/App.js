import React,{useContext} from 'react'
// import { Header, About, Services, Team, Testimonial, Footer } from './Containers';
// import { NavBar } from './Components';
import './App.scss'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
// import Review from './Pages/Review';
// // import Mission from './Containers/Mission/Mission';
import AdminHome from './Admin/AdminHome';
// import Login from './Admin/Login/Login';
// import { AuthContext } from './Context/AuthContext';


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
          {/* <Route exact path="/review"
           element = {<Review />} />
          <Route exact path="/login"
           element = {<Login />} />*/} 
           <Route exact path="/adminHome"
           element = {  <AdminHome />} /> 
  
      </Routes>
    </div>
  )
}

export default App