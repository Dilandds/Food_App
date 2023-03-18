import CartContext from "./cart-content";
import { useReducer } from "react";

//initial state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//dont need  to run when component rerenders so use outside the component scope
const cartReducer = (prevstate, action) => {
  if (action.type === "ADD") {
    const newItems = prevstate.items.concat(action.item);
    const newTotalAmount =
      prevstate.totalAmount + action.item.value * action.item.count;
    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartstate, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const handleAddItems = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const handleremoveItems = (id) => {
    dispatchCartAction({ type: "Remove", id: id });
  };
  const cartcontext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
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
