import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';


function App() {
  return (
    
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/Home" element={<Home/>} />
    <Route path="/Student" element={<Student/>} />
    <Route path="/Contact" element={<Contact/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
