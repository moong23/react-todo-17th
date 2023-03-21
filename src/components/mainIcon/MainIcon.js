import { useRecoilState } from "recoil";
import { clickedIconState } from "../../states/atoms";

import icon_main from "../../assets/icon_main.png";
import icon_text from "../../assets/icon_text.png";

import {
  MainIconContainer,
  MainIconImg,
  MainIconImgDiv,
  MainIconSubText,
} from "./MainIcon.element";

const MainIcon = ({ name, position }) => {
  const [clickedIcon, setClickedIcon] = useRecoilState(clickedIconState);

  const RenderIcon = ({ iconSrc }) => {
    return (
      <MainIconContainer position={position}>
        <MainIconImgDiv clicked={clickedIcon === name}>
          <MainIconImg src={iconSrc} width="70" height="70" />
        </MainIconImgDiv>
        <MainIconSubText clicked={clickedIcon === name}>{name}</MainIconSubText>
      </MainIconContainer>
    );
  };

  if (name === "main") {
    return <RenderIcon iconSrc={icon_main} />;
  } else {
    return <RenderIcon iconSrc={icon_text} />;
  }
};

export default MainIcon;
