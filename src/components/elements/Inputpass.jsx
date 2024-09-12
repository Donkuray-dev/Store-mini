import React, { useState } from "react";
import styled from "styled-components";

export default function Inputpass({ title, register, error }) {
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <Wrapper>
      <InputTitle>
        {title}
        <InputMandatory>*</InputMandatory>
      </InputTitle>
      <InputContent>
        <input
          type={passwordType}
          placeholder={title}
          className="outline_none bg-transparent border-0 w-100 fs-6"
          {...register}
        />
        <button
          onClick={togglePasswordVisibility}
          className="bg-transparent border-0"
        >
          {/* <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 8C16 8 13 2.5 8 2.5C3 2.5 0 8 0 8C0 8 3 13.5 8 13.5C13 13.5 16 8 16 8ZM1.173 8C1.65578 7.26459 2.21197 6.58008 2.833 5.957C4.12 4.668 5.88 3.5 8 3.5C10.12 3.5 11.879 4.668 13.168 5.957C13.789 6.58008 14.3452 7.26459 14.828 8C14.7707 8.08667 14.7057 8.18267 14.633 8.288C14.298 8.768 13.803 9.408 13.168 10.043C11.879 11.332 10.119 12.5 8 12.5C5.881 12.5 4.121 11.332 2.832 10.043C2.21097 9.41992 1.65578 8.73541 1.173 8Z"
              fill="#4B5563"
            />
            <path
              d="M8 5.5C7.33696 5.5 6.70107 5.76339 6.23223 6.23223C5.76339 6.70107 5.5 7.33696 5.5 8C5.5 8.66304 5.76339 9.29893 6.23223 9.76777C6.70107 10.2366 7.33696 10.5 8 10.5C8.66304 10.5 9.29893 10.2366 9.76777 9.76777C10.2366 9.29893 10.5 8.66304 10.5 8C10.5 7.33696 10.2366 6.70107 9.76777 6.23223C9.29893 5.76339 8.66304 5.5 8 5.5ZM4.5 8C4.5 7.07174 4.86875 6.1815 5.52513 5.52513C6.1815 4.86875 7.07174 4.5 8 4.5C8.92826 4.5 9.8185 4.86875 10.4749 5.52513C11.1313 6.1815 11.5 7.07174 11.5 8C11.5 8.92826 11.1313 9.8185 10.4749 10.4749C9.8185 11.1313 8.92826 11.5 8 11.5C7.07174 11.5 6.1815 11.1313 5.52513 10.4749C4.86875 9.8185 4.5 8.92826 4.5 8Z"
              fill="#4B5563"
            />
          </svg> */}
        </button>
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
