import { useEffect, useRef, useState } from "react";
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

  const todoInput = useRef();

  useEffect(() => {
    setTodoValue("");
    setSelectedTag("red");
    todoInput.current.focus();
  }, [hoverDivRender]);

  const handleTodoAdd = (todoValue, selectedTag) => {
    const todoList = JSON.parse(localStorage.getItem("todoList")) ?? [];
    const newTodo = {
      id: new Date(),
      content: todoValue,
      tag: selectedTag,
      done: false,
    };
    todoList.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkInputValidation(todoValue)) {
      alert("INVALID TODO INPUT");
      todoInput.current.focus();
    } else {
      // success on submit
      handleTodoAdd(todoValue, selectedTag);
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
        ref={todoInput}
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
