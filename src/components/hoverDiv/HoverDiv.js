import { useEffect } from "react";
import CircleBtn from "../circleBtn/CircleBtn";
import {
  HoverButton,
  HoverDivContainer,
  HoverInput,
  HoverTagDiv,
  HoverTitle,
} from "./HoverDiv.element";

const HoverDiv = ({ hoverDivRender, setHoverDivRender }) => {
  return (
    <HoverDivContainer hoverDivRender={hoverDivRender}>
      <HoverTitle>TODO</HoverTitle>
      <HoverInput type="text" placeholder="할 일을 입력하세요." />
      <HoverTagDiv>
        <CircleBtn color="red" type="tag" />
        <CircleBtn color="blue" type="tag" />
        <CircleBtn color="orange" type="tag" />
        <CircleBtn color="yellow" type="tag" />
        <CircleBtn color="green" type="tag" />
        <CircleBtn color="purple" type="tag" />
      </HoverTagDiv>
      <HoverButton>추가</HoverButton>
    </HoverDivContainer>
  );
};

export default HoverDiv;
