
import "aos/dist/aos.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sponsers from "./pages/Sponsers";
import Matches from "./pages/Matches";
import './App.css'
import Gallery from "./pages/Gallery";

const App = () => {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/matches' element={<Matches />} />
      <Route path='/about' element={<About />} />
      <Route path='/sponsors' element={<Sponsers />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='*' element={<Home />} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;
