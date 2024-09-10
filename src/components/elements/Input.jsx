import React from "react";
import styled from "styled-components";

export default function input({title,type}) {
    return(
        <Wrapper>
        <InputTitle>
            {title}
            <InputMandatory>
                *
            </InputMandatory>
        </InputTitle>
        <InputContent>
            <input type={type} placeholder={title} className="outline_none bg-transparent border-0 w-100 fs-6" />
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
`
const InputMandatory = styled.sup`
    color: #FF0000;
    font-size: 14px;
    padding: 0px 4px;
`
const InputContent = styled.div`
    padding: 16px;
    background-color: #F1F5F9;
    border-radius: 54px;
`