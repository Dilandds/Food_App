import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [statesCart, setShowCart] = useState(false);

  const showCart = () => {
    setShowCart(true);
  };
  const hideCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {statesCart && <Cart onCloseCart={hideCart} />}
      <Header onCartClick={showCart}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
