import design from "./MealItem.module.css";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={design.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={design.description}>{props.description}</div>
        <div className={design.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
