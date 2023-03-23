import styled, { keyframes } from "styled-components";
const slideIn = keyframes`
    from {
        transform: translateY(-10%);
    }
    to {
        transform: translateY(0);
    }
`;
export const HoverDivContainer = styled.form`
  position: absolute;
  visibility: ${(props) =>
    props.hoverDivRender === true ? "visible" : "hidden"};
  opacity: ${(props) => (props.hoverDivRender === true ? 1 : 0)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 20vw;
  min-width: 200px;
  min-height: 200px;
  border: 1px solid rgb(132, 132, 132);
  border-radius: 8px;
  background-color: #18181a;
  color: white;
  justify-content: space-evenly;
  transition: opacity 0.3s ease-in-out;
  animation: ${slideIn} 0.3s;
`;

export const HoverTitle = styled.h1`
  font-size: max(24px, 3vw);
  font-weight: 500;
  font-style: italic;
  margin-bottom: 8px;
`;

export const HoverInput = styled.input`
  width: 80%;
  height: max(28px, 2.5vw);
  border-radius: 4px;
  box-sizing: border-box;
  border: none;
  padding: 0 8px;
  color: white;
  box-shadow: inset -1px -1px 2px 0px #656565;
  background-color: #2c2830;
  font-size: max(12px, 1.2vw);
  &:focus {
    outline: none;
  }
`;

export const HoverTagDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  justify-content: space-between;
`;

export const HoverButton = styled.button`
  width: 40%;
  height: max(24px, 2.2vw);
  border: none;
  border-radius: 4px;
  background-color: #2c2830;
  box-shadow: inset -1px -1px 2px 0px #656565;
  color: white;
  font-size: max(12px, 1.2vw);
  font-weight: 500;
  margin-top: 8px;
  cursor: pointer;
`;
