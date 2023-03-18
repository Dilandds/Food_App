import Cartcontext from "../../../store/cart-content";
import design from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
const MealItem = (props) => {
  const cartctx = useContext(Cartcontext);

  const price = `$${props.price.toFixed(2)}`;
  const handleAmountSelected = (amount) => {
    console.log(amount);
    cartctx.addItems({
      id: props.id,
      name: props.name,
      count: amount,
      price: props.price,
    });
  };
  return (
    <li className={design.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={design.description}>{props.description}</div>
        <div className={design.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          getAmountSelected={handleAmountSelected}
          id={props.id}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
