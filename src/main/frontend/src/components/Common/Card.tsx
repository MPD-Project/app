import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactElement;
};

const Card = ({ children }: Props) => {
  return <CardWrap>{children}</CardWrap>;
};

const CardWrap = styled.div`
  width: 100%;
  padding: 35px 30px;
  border-radius: 30px;
  background-color: var(--color-white);
  box-shadow: 5px 5px 10px 2px #e3e3e3;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export default Card;
