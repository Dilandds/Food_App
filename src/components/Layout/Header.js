import { Fragment } from "react";
import mealimg from "../../asserts/meals.jpg";
import design from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={design.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div>
        <img className={design["main-image"]} src={mealimg}></img>
      </div>
    </Fragment>
  );
};

export default Header;
