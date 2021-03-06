import React from "react";
import styled from "@emotion/styled";

// Mesh grid
export const Container = styled.div`
  width: 100vw - 150px;
  height: 100vh;
  border: 1px solid gray;
  background-color: ${(p) => p.background};
  background-size: 50px 50px;
  display: flex;
  background-repeat: repeat;

  > * {
    height: 100%;
    min-height: 100%;
    width: 100%;
  }
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      ${(p) => p.color} 26%,
      transparent 27%,
      transparent 74%,
      ${(p) => p.color} 75%,
      ${(p) => p.color} 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      ${(p) => p.color} 25%,
      ${(p) => p.color} 26%,
      transparent 27%,
      transparent 74%,
      ${(p) => p.color} 75%,
      ${(p) => p.color} 76%,
      transparent 77%,
      transparent
    );
`;

export const DiagramCanvas = (props) => {
  return (
    <Container
      background={props.background || "#444444"}
      color={props.color || "#888888"}
    >
      {props.children}
    </Container>
  );
};
