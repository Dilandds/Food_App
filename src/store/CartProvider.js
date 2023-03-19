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
    //If the newly added item is already exist
    const newTotalAmount =
      prevstate.totalAmount + action.item.price * action.item.count;

    const existingItemIndex = prevstate.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = prevstate.items[existingItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingItem) {
      //get the existing item but change the count attribute
      updatedItem = {
        ...existingItem,
        count: existingItem.count + action.item.count,
      };
      //replae the item with the updated item
      updatedItems = [...prevstate.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = prevstate.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    //If the newly added item is already exist

    const existingItemIndex = prevstate.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = prevstate.items[existingItemIndex];
    const newTotalAmount = prevstate.totalAmount - existingItem.price;

    let updatedItems;
    let updatedItem;

    if (existingItem.count == 1) {
      // remove the item
      updatedItems = prevstate.items.filter(
        (item) => item.id != existingItem.id
      );
      // updatedItems = [...prevstate.items.splice(existingItemIndex, 1)];
      console.log("here");
    } else if (existingItem.count > 1) {
      //reduce the count of the item
      updatedItem = {
        ...existingItem,
        count: existingItem.count - 1,
      };
      updatedItems = [...prevstate.items];
      updatedItems[existingItemIndex] = updatedItem;
      console.log("here1");
    }

    return {
      items: updatedItems,
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
    dispatchCartAction({ type: "REMOVE", id: id });
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
