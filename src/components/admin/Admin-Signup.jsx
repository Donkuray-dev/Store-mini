import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/img/logo.png"
import Input from "../elements/Input";
import Inputpass from "../elements/Inputpass";
import Btn from "../elements/Btn";
import Header from "../elements/Header";


export default function AdminSignup() {
    return(
        <Wrapper>
            <Header/>
            <div className="container">
                <WrapperInner>
                <div className="logo text-center">
                    <img src={logo} className=""/>
                </div>
                <p className=" text-center">Sign In To <h3>Apka.Store</h3> </p>
                <p className=" text-center">Welcome back! Please enter your details </p>
                <Input title="Email" type="email" />      
                <Inputpass title="Password" type="password" />
                <Btn title="Sign in"/>
                <p className=" float-end"><a href="" className="link text-decoration-none fw-semibold">Forget Password?</a></p>
                </WrapperInner>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div `
`
const WrapperInner = styled.div`
    width: 100%;
    max-width: 435px;
    padding: 25px;
    margin: 0 auto;
    border-radius: 8px;

`