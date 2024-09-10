import React from "react";
import styled from 'styled-components'
import '../../style/Admin-Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stepper from '../elements/Stepper'
import Btn from '../elements/Btn'
import Input from '../elements/Input'
import Header from "../elements/Header";




export default function AdminLogin() {
    return(
        <Wrapper>
            <Header/>
            <div className="container">
                <div className="user_login">
                    <Stepper/>    
                    <WrapperInner>
                        <h2 className=" text-center">User Information</h2>
                        <Input title="Username" type="text" />      
                        <Input title="Mobile Number" type="number" />      
                        <Input title="Whatsapp Number" type="number" />   
                         <BtnSection>
                            <a href="/Admin-Login">
                                <Btn title="Back"/>
                            </a>
                            <a href="/Admin-Upload">
                                <Btn title="Next"/>
                            </a>
                        </BtnSection>  
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
const BtnSection = styled.div`
    display: flex;
    gap: 20px;
`