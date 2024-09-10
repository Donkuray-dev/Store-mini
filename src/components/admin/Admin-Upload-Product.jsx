import React from "react";
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from '../elements/Btn'
import Input from '../elements/Input'
import DummyProduct1 from "../../assets/img/Dummy-product-1.png"
import DummyProduct2 from "../../assets/img/Dummy-product-2.png"
import DummyProduct3 from "../../assets/img/Dummy-product-4.png"



export default function AdminUploadPrompt() {
    return(
        <Wrapper id="UploadPrompt">
            <div className="container">
                    <WrapperInner className="">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className=" float-end">
                                <path d="M15.8607 2L1.99994 15.8608" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M16.0021 15.8633L2.1413 2.00251" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
                            </svg>
                            <h2 className="h2 text-center">Edit Product Info</h2>
                        <UploadSection> 
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.025 15.06C28.5211 12.5066 27.1464 10.2073 25.1356 8.55487C23.1248 6.90245 20.6027 5.99941 18 6C13.665 6 9.9 8.46 8.025 12.06C5.82035 12.2982 3.78151 13.3428 2.30023 14.993C0.818957 16.6432 -0.000257553 18.7825 6.07391e-08 21C6.07391e-08 25.965 4.035 30 9 30H28.5C32.64 30 36 26.64 36 22.5C36 18.54 32.925 15.33 29.025 15.06ZM21 19.5V25.5H15V19.5H10.5L18 12L25.5 19.5H21Z" fill="#2563EB"/>
                            </svg>
                            <UploadTitle className=" m-0 fw-medium">Upload Your Product Image</UploadTitle>
                            <UploadLimts className="">PNG only 150px X 50px (ratio 3:1)</UploadLimts>
                        </UploadSection>
                        <MoreOption>
                            <Img src={DummyProduct1}/>
                            <Img src={DummyProduct2}/>
                            <Img src={DummyProduct3}/>
                        </MoreOption>
                        <Input title="Product Name" type="text" />      
                        <Input title="Price" type="number" />      
                        <BtnSection>
                            <a href="/Admin-Contect">
                                <Btn title="Back"/>
                            </a>
                            <a href="/Admin-Shop-Type">
                                <Btn title="Next"/>
                            </a>
                        </BtnSection>  
                    </WrapperInner>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: block;
    
`
const WrapperInner = styled.div`
    width: 100%;
    max-width: 435px;
    padding: 25px;
    margin: 10vh auto 0;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    box-shadow: 0px 0px 2px gray;
`

const UploadSection = styled.div`
    text-align: center;
    border: 2px dashed #2563EB;
    border-radius: 8px;
    padding: 37px 0;
    height: 150px;
`
const MoreOption = styled.div`
    margin: 28px 0;
    display: flex; 
    column-gap: 16px;
`
const Img = styled.img`
    width: 70px;
`
const UploadTitle = styled.h3`
    font-size: 18px;
`
const UploadLimts = styled.p`
    font-size: 12px;
    color: #1F2937CC;
`
const BtnSection = styled.div`
    display: flex;
    gap: 20px;
`