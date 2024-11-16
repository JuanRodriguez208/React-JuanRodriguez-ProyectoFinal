import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import SpecialBrownies from "./components/SpecialBrownies";
import Contact from "./components/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemDetailSpecialContainer from "./components/ItemDetailSpecialContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"; // Ruta de checkout
import Footer from "./components/Footer"; // Asegúrate de importar el footer
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a BRY brownies🍫 ʕ•́ᴥ•̀ʔっ♡ !" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a BRY brownies🍫 ʕ•́ᴥ•̀ʔっ♡ !" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/brownies-especiales" element={<SpecialBrownies />} />
          <Route path="/special/:id" element={<ItemDetailSpecialContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      {/* Aquí agregamos el footer */}
      <Footer />
    </>
  );
};

export default App;
