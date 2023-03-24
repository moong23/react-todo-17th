import styled from "styled-components";

export const CardContainer = styled.div`
  width: ${(props) => (props.display ? "max(300px, 30vw)" : "0")};
  height: ${(props) => (props.display ? "max(500px, 50vw)" : "0")};
  position: ${(props) => (props.display ? "initial" : "fixed")};
  top: ${(props) => props.position.top};
  left: ${(props) => props.position.left};
  margin: 0 auto;
  background-color: #1e1e1e;
  border-radius: 12px;
  z-index: 2;
  visibility: ${(props) => (props.display ? "visible" : "hidden")};
  box-shadow: 0 0 10px 0px #000000;
  transition: width 0.2s, height 0.2s, visibility 0.05s linear 0.15s;
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
  visibility: ${(props) => (props.display ? "visible" : "hidden")};
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
    background-color: #656565;
    cursor: url(Link.cur) 0 0, pointer;
    /* cursor: url(../../assets/Link.cur) 0 0, pointer; */
  }
  &::before {
    content: "+";
  }
`;

export const NotHoverDiv = styled.div`
  opacity: ${(props) => (props.hoverRender ? 0 : 1)};
  display: ${(props) => (props.render ? "flex" : "none")};
  flex-direction: column;
  height: 100%;
  transition: opacity 0.1s;
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

export const CardTodoText = styled.h1`
  color: white;
  font-weight: 800;
  font-size: 20px;
  display: flex;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  padding: 8px 0 0 12px;
  margin-bottom: 8px;
`;

export const CardTodoDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  align-content: flex-start;
  overflow-x: hidden;
  width: 100%;
`;
