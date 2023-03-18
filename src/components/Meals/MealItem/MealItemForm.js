import design from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import React, { useRef, useState } from "react";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountValidity, setAmountValidity] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enterdAmount;
    // console.log(enterdAmountNumber);

    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountNumber < 1 ||
      enterdAmountNumber > 5
    ) {
      setAmountValidity(false);
      return;
    }

    props.getAmountSelected(enterdAmountNumber);
  };
  return (
    <form className={design.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
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
      {!amountValidity && <p>Please Enter a Valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
