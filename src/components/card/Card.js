import { useEffect, useState } from "react";
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
  NotHoverDiv,
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
    <CardContainer
      display={render}
      position={{
        top: "50px",
        left: "50px",
      }}
    >
      <CardToolBar display={render}>
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
        <NotHoverDiv render={render} hoverRender={hoverDivRender}>
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
                  />
                );
              })}
            {doneList.length === 0 && <Todo tag={-1} />}
          </CardTodoDiv>
        </NotHoverDiv>
      </CardMainDiv>
    </CardContainer>
  );
};

export default Card;
