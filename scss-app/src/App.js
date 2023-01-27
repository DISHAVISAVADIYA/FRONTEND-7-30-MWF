import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/Contact" element={<Contact />} />
          <Route path="/Home" element={<Home />}/>
            
            

        </Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
