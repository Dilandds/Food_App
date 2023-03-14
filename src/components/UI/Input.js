import design from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={design.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input {...props.input}></input>
    </div>
  );
};

export default Input;
