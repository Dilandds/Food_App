import design from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={design.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input {...props.input} ref={ref}></input>
    </div>
  );
});

export default Input;
