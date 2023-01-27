import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from './Component/Home';
import Women from './Component/Women';
import Men from './Component/Men';
import Kids from './Component/Kids';
import Offer from './Component/Offer';
import Account from './Component/Account';
import Contact from './Component/Contact';
import Nopage from './Component/Nopage';
import Main from "./Component/Main";


// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Sign from "./Component/Sign";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>

            <Route path="/Home" element={<Home />} />
            <Route path="Women" element={<Women />} />
            <Route path="Men" element={<Men/>}/>
            <Route path="Kids" element={<Kids/>}/>
            <Route path="Offer" element={<Offer/>}/>
            <Route path="Account" element={<Account/>}/>
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<Nopage/>}/>
            <Route path="/Sign" element={<Sign/>}/>
            

          






          </Route>
      </Routes>
      
      
      </BrowserRouter>
    
    </>
  );
}

export default App;
