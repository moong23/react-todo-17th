import styled from "styled-components";

export const MainIconContainer = styled.div`
  width: 76px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${(props) => `${props.position.top}px`};
  left: ${(props) => `${props.position.left}px`};
  align-items: center;
`;

export const MainIconImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  box-sizing: border-box;
  border: ${(props) => (props.clicked ? "2px solid rgb(176 176 176)" : "none")};
  border-radius: 6px;
  background-color: ${(props) => (props.clicked ? "rgb(0, 0, 0, 0.5)" : "")};
`;
export const MainIconImg = styled.img`
  width: 70px;
  object-fit: cover;
`;

export const MainIconSubText = styled.p`
  font-size: 18px;
  display: flex;
  padding: 1px 4px;
  justify-content: center;
  margin-top: 4px;
  border-radius: 4px;
  background-color: ${(props) => (props.clicked ? "#2A62D9" : "")};
`;
