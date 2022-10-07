import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Animals from './Animals';
import Birds from './Birds';
import LoginSuccess from './LoginSuccess';
import EndangeredAnimals from './EndangeredAnimals';
import ExtinctAnimals from './ExtinctAnimals';
import EndangeredBirds from './EndangeredBirds';
import ExtinctBirds from './ExtinctBirds';
import Footer from './Components/Footer';
import Product from './Product';
import Homes from './Homes';
import Gallery from './Gallery';
import CartList from './CartList';
import Admin from './Admin';
import Payment from './Payment';
import StripeCheckout from 'react-stripe-checkout';
import Logout from './Logout';
function App() {
  return (
    
    <div className="page-container">

      <div className="content-wrap">
      
    <Router>
      <Navbar />
      <Routes>
        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>} />
        
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/animals' element={<Animals/>}/>
        <Route path='/birds' element={<Birds/>}/>
        <Route path='/loginsuccess' element={<LoginSuccess/>}/>
        <Route path='/endangeredanimals' element={<EndangeredAnimals/>}/>
        <Route path='/extinctanimals' element={<ExtinctAnimals/>}/>
        <Route path='/endangeredbirds' element={<EndangeredBirds/>}/>
        <Route path='/extinctbirds' element={<ExtinctBirds/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Homes' element={<Homes/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/CartList' element={<CartList/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Logout' element={<Logout/>}/>

        

      </Routes>
    </Router>
    </div>
    <Footer/>
    </div>
  );
}
  
export default App;
