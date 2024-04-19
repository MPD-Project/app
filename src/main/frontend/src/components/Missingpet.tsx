import React from "react";
import styled from "styled-components";

type Props = {};

const Missingpet = (props: Props) => {
  return (
    <MissingPetContainer>
      <h5>🚨 실종된 아이를 찾아주세요</h5>
      <div></div>
      <button>실종 게시판 이동</button>
    </MissingPetContainer>
  );
};

const MissingPetContainer = styled.div`
  padding-top: 20px;
  margin-top: 20px;
  width: 100%;
  border-top: 1px solid var(--color-visible40);
  h5 {
    margin-bottom: 25px;
    font-weight: 600;
    color: var(--color-visible40);
  }
  div {
    margin: auto;
    width: 130px;
    height: 180px;
    background-color: var(--color-visible30);
  }
  button {
    width: 100%;
    height: 30px;
    border: 1px solid var(--color-visible40);
    color: var(--color-visible40);
    font-weight: 600;
    background-color: var(--color-visible00);
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export default Missingpet;
