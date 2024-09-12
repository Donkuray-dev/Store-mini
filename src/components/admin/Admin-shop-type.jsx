import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stepper from '../elements/Stepper'
import Btn from '../elements/Btn'
import CheckBox from "../elements/CheckBox";
import Domain from "../elements/Domain";
import Header from "../elements/Header";



export default function  AdminShopType() {
    return(
        <Wrapper>
            <Header/>
            <div className="container">
                <div className="user_login">
                    <Stepper index={3}/>    
                    <WrapperInner className="">
                        <h2 className=" text-center">Your Brand Information</h2>
                        <Domain title={"Sub Domain"}/>
                        <InputTitle>
                            Select Store Type
                            <InputMandatory>
                                *
                            </InputMandatory>
                        </InputTitle>
                        <CheckBoxList>
                            <CheckBox title={"Whatsapp store"} type={"checkbox"}/>
                            <CheckBox title={"E-com website"} type={"checkbox"}/>
                            <CheckBox title={"B2B webiste"} type={"checkbox"}/>
                            <CheckBox title={"Reseller website"} type={"checkbox"}/>
                        </CheckBoxList>
                        <Btn title="Submit"/>
                    </WrapperInner>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`

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
const CheckBoxList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const InputTitle = styled.p`
    margin: 29px 0 0 0;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
`
const InputMandatory = styled.sup`
    color: #FF0000;
    font-size: 14px;
    padding: 0px 4px;
`