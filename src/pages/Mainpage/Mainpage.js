import { useRecoilState } from "recoil";

import MainIcon from "../../components/mainIcon/MainIcon";

import {
  mainIconPositionState,
  textIconPositionState,
  clickedIconState,
} from "../../states/atoms";
import background_image from "../../assets/background_image.jpg";
import { MainpageContainer } from "./Mainpage.element";

const Mainpage = () => {
  const [mainIconPosition, setMainIconPosition] = useRecoilState(
    mainIconPositionState
  );
  const [textIconPosition, setTextIconPosition] = useRecoilState(
    textIconPositionState
  );
  const [clickedIcon, setClickedIcon] = useRecoilState(clickedIconState);

  const onClickHandler = (e) => {
    // 클릭한 위치가 메인 아이콘의 위치 안에 있는 경우
    if (
      e.pageX > mainIconPosition.left &&
      e.pageX < mainIconPosition.left + 76 &&
      e.pageY > mainIconPosition.top &&
      e.pageY < mainIconPosition.top + 100
    ) {
      if (clickedIcon === "main") {
        setClickedIcon("");
      } else {
        setClickedIcon("main");
      }
    } else if (
      e.pageX > textIconPosition.left &&
      e.pageX < textIconPosition.left + 76 &&
      e.pageY > textIconPosition.top &&
      e.pageY < textIconPosition.top + 100
    ) {
      if (clickedIcon === "text") {
        setClickedIcon("");
      } else {
        setClickedIcon("text");
      }
    } else {
      setClickedIcon("");
    }
  };
  return (
    <MainpageContainer src={background_image} onClick={onClickHandler}>
      <MainIcon name="main" position={mainIconPosition} />
      <MainIcon name="text" position={textIconPosition} />
    </MainpageContainer>
  );
};

export default Mainpage;
