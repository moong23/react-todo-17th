import { CardCircle } from "./CircleBtn.element";

const CircleBtn = ({ color, type, render, setRender }) => {
  if (type === "tag") {
    return <CardCircle color={color} type={type} />;
  } else if (color === "red" && type === "button") {
    return (
      <CardCircle
        color={color}
        type={type}
        onClick={() => setRender(!render)}
      />
    );
  } else {
    return <CardCircle color={color} type={type} />;
  }
};

export default CircleBtn;
