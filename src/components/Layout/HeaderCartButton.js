import CartIcon from "../Cart/CartIcon";
import design from "./HeaderCartButton.module.css";
import { useContext } from "react";
import cartcontext from "../../store/cart-content";
const CartButton = (props) => {
  const ctx = useContext(cartcontext);
  const totalCartItems = ctx.items.reduce((count, item) => {
    return count + item.count;
  }, 0);

  return (
    <button className={design.button} onClick={props.onCartClick}>
      <span className={design.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={design.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
