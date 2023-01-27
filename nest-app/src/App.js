import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import Vendor from './Components/Vendor';
import Main from './Components/Main';
import Service from './Components/Service';
import Deals from "./Components/Deals";
import No from "./Components/No";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />} >
        <Route path="/Home" element={<Home />} />
          <Route index element={ <Main/>} />
        
          <Route path="/Vendor" element={<Vendor />} />
          <Route path="/Service" element={<Service />}/>
          <Route path="/Deals" element ={<Deals/>}/>
<Route path="*" element ={<No/>}/>
          
        
          </Route>
      </Routes>
  
    </BrowserRouter>
  );
}
  export default App;
