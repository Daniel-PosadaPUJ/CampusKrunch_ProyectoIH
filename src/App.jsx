import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Homepage/homepage.jsx";
import HelpPage from "./Pages/Help/help.jsx";
import OrdersPage from "./Pages/Orders/orders.jsx";
import SellPage from "./Pages/Sell/sell.jsx";
import FavoritesPage from "./Pages/Favorites/favorites.jsx";
import ProductPage from "./Pages/Product/product.jsx";

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/footer.jsx";

import { ProductProvider } from "./Global/ReduxProducts.jsx";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ayuda" element={<HelpPage />} />
          <Route path="/pedidos" element={<OrdersPage />} />
          <Route path="/vender" element={<SellPage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
          {/*Aquí :id hace referencia a un parámetro dinámico*/}
          <Route path="/producto/:id" element={<ProductPage />} /> 
        </Routes>
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;