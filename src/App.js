import React from 'react'
import Bootstrap from'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import bootstrap from'../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './compone/Home'
import Navbar from'./compone/Navbar'
import Payroll from './compone/Payroll'
import Benefits from './compone/Benefits'
import SignIn from './compone/SignIn'
import Pricing from './compone/Pricing'
import WorkWithUs from './compone/WorkWithUs'
import css from './index.css'
import CSS from './SignIn.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';



import {Switch,Route,Redirect} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      
      <switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/payroll' component={Payroll}/>
       /*
        <Route exact path='/workwithus' component={WorkWithUs}/>
        <Route exact path='/signin' component={SignIn}/>
        <Redirect to='/'/>
    
      </switch>
    </div>
  )
}

export default App
