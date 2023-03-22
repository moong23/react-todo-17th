import styled from "styled-components";

export const MainpageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;
