import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartcontext from "../../store/cart-content";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartctx = useContext(cartcontext);

  const cartItemRemoveHandler = (id) => {
    cartctx.removeItems(id);
  };

  const cartItemAddHandler = (item) => {
    cartctx.addItems({
      ...item,
      count: 1,
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* we bind evry elemt of the array to a function. so When using the method that item will be used */}
      {cartctx.items.map((item) => (
        // <li key={item.id + Math.random()}>{item.name}</li>
        <CartItem
          key={item.id}
          name={item.name}
          id={item.id}
          amount={item.count}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  // console.log("asdas" + Math.random())

  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  const hasItems = cartctx.items.length > 0;

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>

        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
