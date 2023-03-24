import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28vw;
  height: 60px;
  min-width: 280px;
  background-color: #323232;
  margin: 5px 0;
  border-radius: 8px;
  color: #aeaeae;
  box-sizing: border-box;
  padding: 10px;
  transform: ${(props) =>
    props.toggleleft
      ? "translateX(-20%)"
      : props.toggleright
      ? "translateX(20%)"
      : "translateX(0)"};
  transition: transform 0.3s;
`;

export const TodoTitle = styled.div`
  display: block;
  width: 90%;
  min-height: 24px;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 800;
`;

export const TodoTime = styled.div`
  font-size: 14px;
  align-self: flex-end;
  font-weight: 600;
  color: ${(props) => `var(--${props.tag}-tag)`};
`;
