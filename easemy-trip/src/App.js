import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home";

import Navbar from "./Components/Navbar/Navbar";
import { Login } from "./componentsB/authentication/Login";
import { Register } from "./componentsB/authentication/Register";

import { Payments } from "./componentsB/Payments";
import React from "react";
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
import CheckOut from "./Components/Home/CheckOut";
import Footer from "./Components/Home/Footer";

// import Home from './Components/Home/Home';

// import Navbar from './Components/Navbar/Navbar';
import { ProductLanding } from "./Components/ProductFlights/ProductLanding/ProductLanding";

function App() {
  // const dispatch = useDispatch()
  // const flightData = useSelector(state=>state.flightData.data)
  // useEffect(()=>{
  //   dispatch(fetchFlightData())
  // },[dispatch])

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<ProductLanding />} />
        <Route path="/Checkout" element={<CheckOut />} />
        <Route path="/check" element={<Payments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* footer aayega */}

      <Footer />
    </div>
  );
}

export default App;
