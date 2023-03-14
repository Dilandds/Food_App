import design from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <form className={design.form}>
      <Input
        lable="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      ></Input>
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
