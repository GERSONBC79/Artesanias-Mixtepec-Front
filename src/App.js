import { useEffect } from "react";
import { BrowserRouter, 
          Route, 
          Routes, 
          useLocation } 
from "react-router-dom";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import CartMenu from "./scenes/global/CartMenu";
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
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="pago" element={<Checkout />} />
          <Route path="pago/confirmado" element={<Confirmation />} />
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
