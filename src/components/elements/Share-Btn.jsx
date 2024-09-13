import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ShareBtn ({title,data}){
    return(
    <Wrapper>
        <InputTitle>
            {title}
        </InputTitle>
        <InputContent>
           <InputLink>{data}</InputLink>
           <svg width="59" height="53" viewBox="0 0 59 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 30.5V32.5C32 34.7091 30.2091 36.5 28 36.5H23C20.7909 36.5 19 34.7091 19 32.5V20.5C19 18.2909 20.7909 16.5 23 16.5H28C30.2091 16.5 32 18.2909 32 20.5V22.5" stroke="#020202" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M35 29.5L37.2929 27.2071C37.6834 26.8166 37.6834 26.1834 37.2929 25.7929L35 23.5" stroke="#020202" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M37 26.5L25 26.5" stroke="#020202" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </InputContent>
    </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 28px 0 0;
`
const InputTitle = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    text-align: left;
`
const InputContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background-color: #F1F5F9;
    border-radius: 54px;
`
const InputLink = styled.p`
    margin: 0;
    overflow: hidden;
`