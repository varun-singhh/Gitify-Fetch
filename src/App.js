import React, { useState } from 'react'
import './Components/Styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"
import firebase from "firebase/app"
import "firebase/auth"
import Home from './Components/Home';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import NotFound from './Components/NotFound';
import Context from './Components/Context';
import Footer from './Components/Footer';
import Header from './Components/Header';
import firebaseConfig from "./Config/firebaseConfig"
import { toast } from 'react-toastify';
firebase.initializeApp(firebaseConfig)
function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>

      <ToastContainer 
      position="top-center"
      autoClose={2000}
      hideProgressBar/>
      
      <Context.Provider value={{ user, setUser }}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer/>
      </Context.Provider>
    </Router>
  )
}

export default App
