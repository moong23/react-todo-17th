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

  const [allList, setAllList] = useState([]);
  const todoList = allList ? allList.filter((item) => item.done === false) : [];
  const doneList = allList ? allList.filter((item) => item.done === true) : [];

  useEffect(() => {
    setAllList(JSON.parse(localStorage.getItem("todoList")) || []);
  }, [hoverDivRender]);
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
        <CardTodoText>TODO [{todoList.length}개]</CardTodoText>
        <CardTodoDiv>
          {todoList.length > 0 &&
            todoList.map((item) => {
              return (
                <Todo
                  key={item.id}
                  id={item.id}
                  content={item.content}
                  tag={item.tag}
                  done={item.done}
                  setAllList={setAllList}
                  allList={allList}
                />
              );
            })}
          {todoList.length === 0 && <Todo tag={-1} />}
        </CardTodoDiv>
        <CardTodoText>DONE [{doneList.length}개]</CardTodoText>
        <CardTodoDiv>
          {doneList.length > 0 &&
            doneList.map((item) => {
              return (
                <Todo
                  key={item.id}
                  id={item.id}
                  content={item.content}
                  tag={item.tag}
                  done={item.done}
                  setAllList={setAllList}
                  allList={allList}
                />
              );
            })}
          {doneList.length === 0 && <Todo tag={-1} />}
        </CardTodoDiv>
      </CardMainDiv>
    </CardContainer>
  );
};

export default Card;
