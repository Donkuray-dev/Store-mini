import React from "react";
import styled from 'styled-components'
import '../../style/Admin-Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stepper from '../elements/Stepper'
import Btn from '../elements/Btn'
import Input from '../elements/Input'
import Inputpass from "../elements/Inputpass";
import Header from "../elements/Header";




export default function AdminLogin() {
    return(
        <Wrapper>
            <Header/>
            <div className="container">
                <div className="user_login">
                    <Stepper/>    
                    <WrapperInner className="">
                        <h2 className=" text-center">User Information</h2>
                        <Input title="Email" type="email" />      
                        <Inputpass title="Password" type="password" /> 
                        <a href="/Admin-Contect">
                            <Btn title="Continue"/>
                        </a>     
                        <p className=" common_margin text-center fw-semibold">Already registered?<a href="" className="green text-decoration-none"> Click Here</a></p>
                    </WrapperInner>
                </div>
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
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    box-shadow: 0px 0px 2px gray;
`