import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Stepper from "../elements/Stepper";
import Btn from "../elements/Btn";
import Input from "../elements/Input";
import "bootstrap/dist/css/bootstrap.min.css";
import Inputpass from "../elements/Inputpass";
import Header from "../elements/Header";

export default function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.href = "/Admin-Contect";
  };

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div className="user_login">
          <Stepper index={0} />
          <WrapperInner className="">
            <h2 className="text-center">User Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <Input
                title="Email"
                type="email"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                })}
                error={errors.email}
              />
              <Inputpass
                title="Password"
                type="password"
                register={register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                error={errors.password}
              />
              <a href="/Admin-Contect">
                <Btn title="Continue" />
              </a>
              <p className="common_margin text-center fw-semibold">
                Already registered?
                <a href="" className="green text-decoration-none">
                  Click Here
                </a>
              </p>
            </form>
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
