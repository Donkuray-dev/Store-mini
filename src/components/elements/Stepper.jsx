import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import React from "react";

export default function Stepper({ index }) {
  let steps = document.querySelectorAll(".step");
  let steplines = document.querySelectorAll(".step_line");

  function checker(i) {
    for (let i = 0; i <= 3; i++) {
      if (i == 0) {
      }
    }
  }

  checker(index);

  return (
    <>
      <Wrapper className="step w-100 d-flex align-items-center">
        {[1, 2, 3, 4].map((step) => (
          <React.Fragment key={step}>
            <Step
              className={`step rounded-circle w-100 ${
                index >= step ? "active" : ""
              }`}
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 3L5 8.5L2.5 6"
                stroke={index >= step ? "#FFF" : "#2563EB"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Step>
            {step < 4 && (
              <Stepline
                className={`step_line m-0 ${index > step ? "completed" : ""}`}
              />
            )}
          </React.Fragment>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 200px;
  margin: 39px auto 31px;
`;
const Step = styled.svg`
  padding: 4px;
  background-color: #d1d5db;
  max-width: 20px;
  height: 20px;
  transition: background-color 0.3s;
  &.active{
      background-color: #2563EB;
      color: white;
    }
    `;
const Stepline = styled.hr`
  border: 3px solid #d1d5db;
  background:#d1d5db;
  width: 40px;
  height: 0px;
  transition: background-color 0.3s;
  &.completed{
    opacity: 0.8;
    border: 3px solid #2563EB;
    background-color: #2563EB;
  }

`;
