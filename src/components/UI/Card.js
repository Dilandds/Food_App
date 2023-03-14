import design from "./Card.module.css";

const Card = (props) => {
  return <div className={design.card}>{props.children}</div>;
};
export default Card;
