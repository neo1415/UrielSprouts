import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './Context/AuthContext';


// import {createStore, applyMiddleware,compose} from 'redux'
// import rootReducer from './Context/rootRducer';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk'
// import {createFirestoreInstance} from 'redux-firestore'
// import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
// import firebaseConfig from './Components/firebaseConfig';
// import * as firebase from 'firebase/app'

// const store = createStore(rootReducer, 

//       applyMiddleware(thunk.withExtraArgument({getFirebase})),
     
// );

// const rrfProps ={
//   firebase,
//   config:{firebaseConfig},
//   dispatch:store.dispatch,
//   createFirestoreInstance
// }
  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  {/* <Provider store={store}> */}
  {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
  <AuthContextProvider>
  <App />
  </AuthContextProvider>
  {/* </ReactReduxFirebaseProvider> */}
  {/* </Provider> */}
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
