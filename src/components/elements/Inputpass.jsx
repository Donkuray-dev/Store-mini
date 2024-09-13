import React, { useState } from "react";
import styled from "styled-components";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function Inputpass({ title, register, error }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <InputTitle>
        {title}
        <InputMandatory>*</InputMandatory>
      </InputTitle>
      <InputContent>
        <input
          type={showPassword ? "text" : "password"}
          placeholder={title}
          className="outline_none bg-transparent border-0 w-100 fs-6"
          {...register}
        />
        <a onClick={togglePasswordVisibility} className="border-0 text-end text-black">
          {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
        </a>
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
  display: flex;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;
