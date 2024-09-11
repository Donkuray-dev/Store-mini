import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Stepper from "../elements/Stepper";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import React from "react";
import Header from "../elements/Header";
import { useForm } from "react-hook-form";

export default function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div className="user_login">
          <Stepper />

          <WrapperInner onSubmit={handleSubmit((data)=> {
          console.log(data);
          window.location.href = "/Admin-Upload"
          })}>
            <h2 className=" text-center">User Information</h2>
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
                required: "mobile number is requires",
                maxLength: {
                  value: 10,
                  message: "number should be atleat 10 digit",
                },
                minLength: {
                  value: 10,
                  message: "number should be atleat 10 digit",
                },
              })}
              error={errors.number}
            />
            <Input
              type="number"
              title="Whatsapp Number"
              register={register("wNum", {
                required: "Whatsapp number required",
                maxLength: {
                  value: 10,
                  message: "number should be atleat 10 digit",
                },
              })}
              error={errors.wNum}
            />

            <BtnSection>
              <a href="/Admin-Login">
                <Btn title="Back" />
              </a>
              <a href="/Admin-Upload">
                <Btn title="Next" type="submit" />
              </a>
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
