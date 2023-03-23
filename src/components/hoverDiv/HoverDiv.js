import { useEffect, useState } from "react";
import CircleBtn from "../circleBtn/CircleBtn";
import {
  HoverButton,
  HoverDivContainer,
  HoverInput,
  HoverTagDiv,
  HoverTitle,
} from "./HoverDiv.element";

const HoverDiv = ({ hoverDivRender, setHoverDivRender }) => {
  const [todoValue, setTodoValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("red");

  useEffect(() => {
    setTodoValue("");
    setSelectedTag("red");
  }, [hoverDivRender]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkInputValidation(todoValue)) {
      alert("INVALID TODO INPUT");
    } else {
      // success on submit
      setHoverDivRender(false);
    }
  };
  const handleTodoChange = (e) => {
    setTodoValue(e.target.value);
  };
  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };
  const checkInputValidation = (inputstring) => {
    inputstring = inputstring.trim();
    inputstring = inputstring.replace(/\s+/g, " ");
    if (inputstring === "") {
      return false;
    }
    return true;
  };

  return (
    <HoverDivContainer
      action="#"
      hoverDivRender={hoverDivRender}
      onSubmit={handleSubmit}
    >
      <HoverTitle>TODO</HoverTitle>
      <HoverInput
        type="text"
        placeholder="할 일을 입력하세요."
        value={todoValue || ""}
        onChange={handleTodoChange}
      />
      <HoverTagDiv>
        <CircleBtn
          color="red"
          value="red"
          type="tag"
          name="tag"
          selectedTag={selectedTag}
          handleTagChange={handleTagChange}
        />
        <CircleBtn
          color="blue"
          value="blue"
          type="tag"
          name="tag"
          selectedTag={selectedTag}
          handleTagChange={handleTagChange}
        />
        <CircleBtn
          color="orange"
          value="orange"
          type="tag"
          name="tag"
          selectedTag={selectedTag}
          handleTagChange={handleTagChange}
        />
        <CircleBtn
          color="yellow"
          value="yellow"
          type="tag"
          name="tag"
          selectedTag={selectedTag}
          handleTagChange={handleTagChange}
        />
        <CircleBtn
          color="green"
          value="green"
          type="tag"
          name="tag"
          selectedTag={selectedTag}
          handleTagChange={handleTagChange}
        />
        <CircleBtn
          color="purple"
          value="purple"
          type="tag"
          name="tag"
          selectedTag={selectedTag}
          handleTagChange={handleTagChange}
        />
      </HoverTagDiv>
      <HoverButton>추가</HoverButton>
    </HoverDivContainer>
  );
};

export default HoverDiv;
