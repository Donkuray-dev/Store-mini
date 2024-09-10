import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../elements/Header";
import HandShake from "../../assets/img/Congratulation.png"
import ShareBtn from "../elements/Share-Btn";


export default function AdminUrl(){
    return(
        <Wrapper>
            <Header/>
            <div className="container">
                <WrapperInner>
                    <img src={HandShake}/>
                    <LinkSection>
                        <h2>Congratulation! Your account has been created</h2>
                        <ShareBtn title={"AdminUrl"} data={"https://localvocal.Dashbord.apka.store"}/>
                        <ShareBtn title={"StoreUrl"} data={"https://localvocal.apka.store"}/>
                    </LinkSection>
                </WrapperInner>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`

`
const WrapperInner = styled.div`
    text-align: center;
    margin: 69px 0 0; 

`
const LinkSection = styled.div`
    width: 100%;
    max-width: 435px;
    padding: 25px 29px;
    margin: 28px auto 0;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
`







