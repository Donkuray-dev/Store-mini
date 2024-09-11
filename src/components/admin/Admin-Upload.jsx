import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Stepper from "../elements/Stepper";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import Header from "../elements/Header";

export default function AdminUpload() {
  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div className="user_login">
          <Stepper />
          <WrapperInner className="">
            <h2 className=" text-center">Your Brand Information</h2>
            <UploadSection>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"  
              >
                <path
                  d="M29.025 15.06C28.5211 12.5066 27.1464 10.2073 25.1356 8.55487C23.1248 6.90245 20.6027 5.99941 18 6C13.665 6 9.9 8.46 8.025 12.06C5.82035 12.2982 3.78151 13.3428 2.30023 14.993C0.818957 16.6432 -0.000257553 18.7825 6.07391e-08 21C6.07391e-08 25.965 4.035 30 9 30H28.5C32.64 30 36 26.64 36 22.5C36 18.54 32.925 15.33 29.025 15.06ZM21 19.5V25.5H15V19.5H10.5L18 12L25.5 19.5H21Z"
                  fill="#2563EB"
                />
              </svg>
              <UploadTitle className=" m-0 fw-medium">
                Upload Your Brand Logo
              </UploadTitle>
              <UploadLimts className="">
                PNG only 150px X 50px (ratio 3:1)
              </UploadLimts>
              
            </UploadSection>
            <UploadWarning>Brand Logo Cannot be empty</UploadWarning>
            <Input title="Brand Name" type="text" />
            <Input title="Tag Line" type="text" />
            <Input title="Location" type="text" />
            <BtnSection>
              <a href="/Admin-Contect">
                <Btn title="Back" />
              </a>
              <a href="/Admin-Shop-Type">
                <Btn title="Next" />
              </a>
            </BtnSection>
          </WrapperInner>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const WrapperInner = styled.div`
  width: 100%;
  max-width: 435px;
  padding: 25px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0px 0px 2px gray;
`;
const UploadSection = styled.div`
  text-align: center;
  border: 2px dashed #2563eb;
  border-radius: 8px;
  padding: 37px 0;
`;
const UploadTitle = styled.h3`
  font-size: 18px;
`;
const UploadLimts = styled.p`
  font-size: 12px;
  color: #1f2937cc;
`;
const UploadWarning = styled.p`
  font-size: 12px;
  color: #ff0c0c;
  font-weight: 500;
  font-family: "Space Grotesk", sans-serif;
`;
const BtnSection = styled.div`
  display: flex;
  gap: 20px;
`;
