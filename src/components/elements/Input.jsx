import React from "react";
import styled from "styled-components";

export default function Input({ title, type, register, error }) {
  return (
    <Wrapper>
      <InputTitle>
        {title}
        <InputMandatory>*</InputMandatory>
      </InputTitle>
      <InputContent>
        <input
          type={type}
          placeholder={title}
          className="outline_none bg-transparent border-0 w-100 fs-6"
          {...register}
        />
      </InputContent>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 28px 0 0;
`;

const InputTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
`;

const InputMandatory = styled.sup`
  color: #ff0000;
  font-size: 14px;
  padding: 0px 4px;
`;

const InputContent = styled.div`
  padding: 16px;
  background-color: #f1f5f9;
  border-radius: 54px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
