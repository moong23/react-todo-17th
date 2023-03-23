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
    cursor: pointer;
  }
`;
