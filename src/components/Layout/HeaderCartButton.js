import CartIcon from "../Cart/CartIcon";
import design from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import cartcontext from "../../store/cart-content";
const CartButton = (props) => {
  const [btnIsHighlishted, setButtonHighlighted] = useState(false);

  const ctx = useContext(cartcontext);
  const { items } = ctx;

  const totalCartItems = ctx.items.reduce((count, item) => {
    return count + item.count;
  }, 0);

  const buttonClasses = `${design.button} ${
    btnIsHighlishted ? design.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonHighlighted(true);
    console.log("here");
    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onCartClick}>
      <span className={design.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={design.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
