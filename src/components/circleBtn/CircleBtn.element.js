import styled from "styled-components";

export const CardCircle = styled.div`
  display: inline-block;
  margin: 0 4px;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
  background-color: ${(props) => `var(--${props.color}-${props.type})`};
  &:hover {
    cursor: url(Link.cur) 0 0, pointer;
  }
`;

export const InputCircle = styled.input`
  appearance: none;
  display: inline-block;
  margin: 0 4px;
  align-items: center;
  width: max(12px, 1.2vw);
  height: max(12px, 1.2vw);
  padding: 1px;
  border-radius: 50%;
  background-color: ${(props) => `var(--${props.color}-${props._type})`};
  &:hover {
    cursor: url(Link.cur) 0 0, pointer;
  }
  border: ${(props) =>
    props.selectedTag === props.value ? "1px solid white" : "none"};
  transition: border 0.3s ease-in-out;
`;
