import styled from "styled-components";

export const CardContainer = styled.div`
  width: max(300px, 30vw);
  height: max(480px, 48vw);
  margin: 0 auto;
  background-color: #1e1e1e;
  border-radius: 12px;
  z-index: 2;
  visibility: ${(props) => (props.display === "true" ? "visible" : "hidden")};
`;

export const CardToolBar = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 12px;
  background-color: #312f34;
  border-radius: 12px 12px 0 0;
  box-sizing: border-box;
  position: relative;
`;

export const CardPlusBtn = styled.div`
  width: 20px;
  height: 20px;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 24px;
  border-radius: 4px;
  position: absolute;
  right: 12px;
  padding: 2px;
  &:hover {
    cursor: pointer;
    background-color: #656565;
  }
  &::before {
    content: "+";
  }
`;

export const CardMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 40px);
  border-radius: 0 0 12px 12px;
  position: relative;
`;
