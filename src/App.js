import './App.css';
import './Responsivef.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './component/Home'; 
import Logimg from './component/Logoimg';
import Blogs from './component/Blogs';
import Buttonlog from './component/Buttonlog';
import Contact from './component/Contact';
import Landen from './component/Landen';
import Overons from './component/Overone';
import Reisen from './component/Reisen';
//import Linktime from './component/Link';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        

        <Routes>
        <Route path="/logimg" element={<Logimg />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/buttolog" element={<Buttonlog/>} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/landen" element={<Landen />} />
        <Route path="/overons" element={<Overons />}/>
        <Route path="/Reisen" element={<Reisen />}/>
        

        </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
