import { CardCircle, InputCircle } from "./CircleBtn.element";

const CircleBtn = ({
  color,
  type,
  render,
  setRender,
  name,
  value,
  selectedTag,
  handleTagChange,
}) => {
  if (type === "tag") {
    // using type as _type since 'type' is reserved word in input
    return (
      <InputCircle
        type="radio"
        color={color}
        _type={type}
        name={name}
        value={value}
        selectedTag={selectedTag}
        onClick={handleTagChange}
      />
    );
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
