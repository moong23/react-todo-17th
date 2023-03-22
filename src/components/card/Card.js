import {
  CardContainer,
  CardToolBar,
  CardCircle,
  CardPlusBtn,
} from "./Card.element";

const Card = ({ render, setRender }) => {
  console.log(render);
  return (
    <CardContainer display={render.toString()}>
      <CardToolBar>
        <CardCircle color="red" onClick={() => setRender(!render)} />
        <CardCircle color="yellow" />
        <CardCircle color="green" />
        <CardPlusBtn />
      </CardToolBar>
    </CardContainer>
  );
};

export default Card;
