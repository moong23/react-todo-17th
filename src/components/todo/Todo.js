import { useEffect, useState } from "react";
import { TodoContainer, TodoTime, TodoTitle } from "./Todo.element";

const Todo = ({ id, content, tag, done }) => {
  const [toggleLeft, setToggleLeft] = useState(false);
  const [toggleRight, setToggleRight] = useState(false);
  const [timeString, setTimeString] = useState("");

  const calculateTime = (timestring) => {
    const timeNum = (Date.now() - new Date(timestring)) / 60000;
    const days = Math.floor(timeNum / 1440);
    const hours = Math.floor((timeNum % 1440) / 60);
    const minutes = Math.floor(timeNum % 60);

    let parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours % 24 > 0) parts.push(`${hours % 24}h`);
    if (minutes > 0) parts.push(`${minutes}m`);

    setTimeString(parts.length > 0 ? parts.join(" ") : "just now");
  };

  useEffect(() => {
    calculateTime(id);
    const timer = setInterval(() => {
      calculateTime(id);
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <TodoContainer
      toggleleft={toggleLeft}
      toggleright={done === "done" ? false : toggleRight}
    >
      <TodoTitle>{content}</TodoTitle>
      <TodoTime tag={tag}>{timeString}</TodoTime>
    </TodoContainer>
  );
};

export default Todo;
