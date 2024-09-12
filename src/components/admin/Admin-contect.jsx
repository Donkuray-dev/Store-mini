import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Stepper from "../elements/Stepper";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import React from "react";
import Header from "../elements/Header";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
    // Redirect to Admin-Upload if the form is valid
    navigate("/Admin-Upload");
  };

  // Function to handle back navigation
  const handleBack = (data) => {
    console.log(data);
    navigate("/Admin-Login");
  };

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div className="user_login">
          <Stepper />

          <WrapperInner onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center">User Information</h2>
            <Input
              type="text"
              title="UserName"
              register={register("text", { required: "Username must be here" })}
              error={errors.text}
            />

            <Input
              type="number"
              title="Mobile Number"
              register={register("number", {
                required: "Mobile number is required",
                maxLength: {
                  value: 10,
                  message: "Number should be exactly 10 digits",
                },
                minLength: {
                  value: 10,
                  message: "Number should be exactly 10 digits",
                },
              })}
              error={errors.number}
            />
            <Input
              type="number"
              title="Whatsapp Number"
              register={register("wNum", {
                required: "Whatsapp number is required",
                maxLength: {
                  value: 10,
                  message: "Number should be exactly 10 digits",
                },
              })}
              error={errors.wNum}
            />

            <BtnSection>
              <Btn title="Back" type="button" onClick={handleBack}>
                Back
              </Btn>

              <Btn title="Next" type="submit">
                Next
              </Btn>
            </BtnSection>
          </WrapperInner>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const WrapperInner = styled.form`
  width: 100%;
  max-width: 435px;
  padding: 25px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0px 0px 2px gray;
`;

const BtnSection = styled.div`
  display: flex;
  gap: 20px;
`;
