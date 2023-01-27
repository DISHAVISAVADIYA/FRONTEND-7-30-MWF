import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Section from "./Section";
import Blog from './Blog';


function App() {
   
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Section />} />  
                    <Route path="Blog" element={ <Blog/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default App;
