
import Home from './pages/homePage/Home';
import { Routes, Route } from "react-router-dom";
import Livraison from './pages/livraison/Livraison';
import Service from './pages/services/Service';
import About from './pages/a propos/About';
import Avancement from './pages/avancement colis/Avancement';
import Contact from './pages/contact/Contact';
import Auth from './pages/auth/Auth/Auth';
import Admin from './pages/admin/Admin';
import Multistep from './components/multistep/Multistep';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Print from './pages/avancement colis/Print';

function App() {
  const [clients,setClients ] = useState([])
useEffect(()=>{
  axios.get('http://localhost:5000/api/client/')
  .then(response => {
    setClients(response.data)
  })
  .catch((error) => {
    console.log(error);
  })
}) 



  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="livraison" element={<Livraison />} />
        <Route path="service" element={<Service />} />
        <Route path="apropos" element={<About />} />
        <Route path="avancement" element={<Avancement />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Auth />} />
        <Route data = {clients} path="admin" element={<Admin />} />
        <Route path="multistep" element={<Multistep />} />
        <Route path="print" element={<Print />} />
          
    

      </Routes>
    
    </div>
  );
}

export default App;
