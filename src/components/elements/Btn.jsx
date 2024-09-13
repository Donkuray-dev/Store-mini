import React from "react";
import styled from "styled-components";

export default function Btn({ title, onClick }) {
  return (
    <Wrapper
      className=" rounded-pill w-100 border-0 text-light"
      onClick={onClick}
    >
      {title}
    </Wrapper>
  );
}
const Wrapper = styled.button`
  padding: 15px 0;
  background-color: #2563eb;
  font-size: 16px;
  line-height: 24px;
  margin: 28px 0 0;
`;
