import { useEffect, useState } from "react";
import CircleBtn from "../circleBtn/CircleBtn";

import HoverDiv from "../hoverDiv/HoverDiv";
import {
  CardContainer,
  CardToolBar,
  CardPlusBtn,
  CardMainDiv,
} from "./Card.element";

const Card = ({ render, setRender }) => {
  useEffect(() => {
    setHoverDivRender(false);
  }, [render]);
  const [hoverDivRender, setHoverDivRender] = useState(false);

  return (
    <CardContainer display={render.toString()}>
      <CardToolBar>
        {/* <CardCircle color="red" onClick={() => setRender(!render)} />
        <CardCircle color="yellow" />
        <CardCircle color="green" /> */}
        <CircleBtn
          color="red"
          type="button"
          render={render}
          setRender={setRender}
        />
        <CircleBtn color="yellow" type="button" />
        <CircleBtn color="green" type="button" />
        <CardPlusBtn onClick={() => setHoverDivRender(true)} />
      </CardToolBar>
      <CardMainDiv>
        <HoverDiv
          hoverDivRender={hoverDivRender && render}
          setHoverDivRender={setHoverDivRender}
        />
      </CardMainDiv>
    </CardContainer>
  );
};

export default Card;
