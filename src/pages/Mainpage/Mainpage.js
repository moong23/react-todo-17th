import { useEffect, useState } from "react";

import MainIcon from "../../components/mainIcon/MainIcon";

import background_image from "../../assets/background_image.jpg";
import { MainpageContainer } from "./Mainpage.element";
import Card from "../../components/card/Card";

const Mainpage = ({ clickedIcon, setClickedIcon }) => {
  const [mainIconPosition, setMainIconPosition] = useState({
    top: 30,
    left: 30,
  });
  const [textIconPosition, setTextIconPosition] = useState({
    top: 160,
    left: 30,
  });

  useEffect(() => {
    setMainIconPosition({
      top: 30,
      left: 30,
    });
    setTextIconPosition({
      top: 160,
      left: 30,
    });
  }, []);

  const [mainRender, setMainRender] = useState(false);
  const [textRender, setTextRender] = useState(false);
  const resetClickedIcon = () => setClickedIcon("");

  const onClickHandler = (e) => {
    // 클릭 한번 한 경우
    if (e.detail === 1) {
      // 클릭한 위치가 아이콘의 위치 안에 있는 경우
      // 아이콘 클릭 state토글
      // 아이콘 위치 밖 클릭 -> clickedIcon state 초기화
      if (
        e.pageX > mainIconPosition.left &&
        e.pageX < mainIconPosition.left + 76 &&
        e.pageY > mainIconPosition.top &&
        e.pageY < mainIconPosition.top + 100
      ) {
        if (clickedIcon === "main") {
          resetClickedIcon();
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
          resetClickedIcon();
        } else {
          setClickedIcon("text");
        }
      } else {
        resetClickedIcon();
      }
    } else {
      // 더블 클릭한 경우 -> page open
      if (
        e.pageX > mainIconPosition.left &&
        e.pageX < mainIconPosition.left + 76 &&
        e.pageY > mainIconPosition.top &&
        e.pageY < mainIconPosition.top + 100
      ) {
        // setMainRender(true);
        setMainRender(!mainRender);
      } else if (
        e.pageX > textIconPosition.left &&
        e.pageX < textIconPosition.left + 76 &&
        e.pageY > textIconPosition.top &&
        e.pageY < textIconPosition.top + 100
      ) {
        setTextRender(!textRender);
        alert("WIP");
      }
    }
  };
  // onClickHandler 끝

  // TODO: react-draggable로 아이콘 위치 변경
  // -> position을 draggable 조건에 맞게 변경해야할듯
  return (
    <MainpageContainer src={background_image} onClick={onClickHandler}>
      <MainIcon
        name="main"
        position={mainIconPosition}
        clickedIcon={clickedIcon}
      />
      <MainIcon
        name="readme.txt"
        position={textIconPosition}
        clickedIcon={clickedIcon}
      />
      <Card render={mainRender} setRender={setMainRender} />
    </MainpageContainer>
  );
};

export default Mainpage;
