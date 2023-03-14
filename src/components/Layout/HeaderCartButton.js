import CartIcon from "../Cart/CartIcon";
import design from "./HeaderCartButton.module.css";
const CartButton = (props) => {
  return (
    <button className={design.button}>
      <span className={design.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={design.badge}>3</span>
    </button>
  );
};

export default CartButton;
