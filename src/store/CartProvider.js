import CartContext from "./cart-content";

const CartProvider = (props) => {
  const handleAddItems = () => {};
  const handleremoveItems = () => {};
  const cartcontext = {
    items: [],
    totalamount: 0,
    addItems: handleAddItems,
    removeItems: handleremoveItems,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
