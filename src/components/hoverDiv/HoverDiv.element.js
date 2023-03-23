import styled from "styled-components";

export const HoverDivContainer = styled.form`
  position: absolute;
  visibility: ${(props) =>
    props.hoverDivRender === true ? "visible" : "hidden"};
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
  opacity: 1;
  justify-content: space-evenly;
  /* transition: 0.5s; */
  /* animation: slideIn 0.1s; */
`;

export const HoverTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 8px;
`;

export const HoverInput = styled.input`
  width: 80%;
  height: 28px;
  border-radius: 4px;
  box-sizing: border-box;
  border: none;
  padding: 0 8px;
  color: white;
  box-shadow: inset -1px -1px 2px 0px #656565;
  background-color: #2c2830;
`;

export const HoverTagDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
`;

export const HoverButton = styled.button`
  width: 40%;
  height: 24px;
  border: none;
  border-radius: 4px;
  background-color: #2c2830;
  box-shadow: inset -1px -1px 2px 0px #656565;
  color: white;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  cursor: pointer;
`;
