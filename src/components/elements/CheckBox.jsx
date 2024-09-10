import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CheckBox({title,type}) {
    return(
        <Wrapper>
            <input type={type} className=" border-1 rounded-circle" />         
            <InputTitle>
                {title}
            </InputTitle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 12px 0 0;
    display: flex;
    gap: 8px;
    width: 100%;
    max-width: 186px;
`
const InputTitle = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #374151;
`
