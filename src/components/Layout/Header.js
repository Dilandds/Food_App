import { Fragment, useContext } from "react";
import mealimg from "../../asserts/meals.jpg";
import cartcontext from "../../store/cart-content";
import design from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={design.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onCartClick={props.onCartClick}
          onCloseCart={props.onCloseCart}
        ></HeaderCartButton>
      </header>
      <div>
        <img className={design["main-image"]} src={mealimg}></img>
      </div>
    </Fragment>
  );
};

export default Header;
