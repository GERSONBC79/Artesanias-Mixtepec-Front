import { useEffect } from "react";
import { BrowserRouter, 
          Route, 
          Routes, 
          useLocation } 
from "react-router-dom";
import { Main } from "./scenes/admin/Main";
import Login from "./scenes/Auth/Login";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import { Contact } from "./scenes/contact/Contact";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/ItemDetails/ItemDetails";


const ScrollToTop =  () => {
  const { pathname } = useLocation();

  useEffect( () => {
    window.scrollTo(0,0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        
        <Routes>
          <Route  path="/cuenta" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="pago" element={<Checkout />} />
          <Route path="pago/confirmado" element={<Confirmation />} />
          <Route path="/cuenta/1" element={<Main />} />
          <Route path="/contacto" element={<Contact />} />
           
        </Routes>
        <CartMenu />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
