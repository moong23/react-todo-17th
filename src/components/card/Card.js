import { useEffect, useState, useMemo } from "react";
import CircleBtn from "../circleBtn/CircleBtn";

import HoverDiv from "../hoverDiv/HoverDiv";
import Todo from "../todo/Todo";
import {
  CardContainer,
  CardToolBar,
  CardPlusBtn,
  CardMainDiv,
  CardTodoDiv,
  CardTodoText,
} from "./Card.element";

const Card = ({ render, setRender }) => {
  useEffect(() => {
    setHoverDivRender(false);
  }, [render]);
  const [hoverDivRender, setHoverDivRender] = useState(false);

  const getItem = (query) => {
    return JSON.parse(localStorage.getItem("todoList")) || [];
  };
  const allList = useMemo(() => getItem(), [hoverDivRender]);
  const todoList = allList.filter((item) => item.done === false);

  return (
    <CardContainer display={render.toString()}>
      <CardToolBar>
        <CircleBtn
          color="red"
          type="button"
          render={render}
          setRender={setRender}
        />
        <CircleBtn color="yellow" type="button" />
        <CircleBtn color="green" type="button" />
        <CardPlusBtn onClick={() => setHoverDivRender(!hoverDivRender)} />
      </CardToolBar>
      <CardMainDiv>
        <HoverDiv
          hoverDivRender={hoverDivRender && render}
          setHoverDivRender={setHoverDivRender}
        />
        <CardTodoDiv>
          <CardTodoText>TODO [{todoList.length}개]</CardTodoText>
          {todoList.map((item) => {
            return (
              <Todo
                key={item.id}
                id={item.id}
                content={item.content}
                tag={item.tag}
                done={item.done}
              />
            );
          })}
        </CardTodoDiv>
      </CardMainDiv>
    </CardContainer>
  );
};

export default Card;
