import React, { useState } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Domain({title}) {
    
    function checker(params) {
            
        
    }

    return(
      <Wrapper>
         <Title>
            {title}
            <Mandatory>
                *
            </Mandatory>
        </Title>
        <DomainFinder>
            <DomainInput type="text" name="" id="DomianName"  />
            <Checked className=" rounded-circle w-100" width="15" height="15" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3L5 8.5L2.5 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </Checked>
            <DomainHolder disabled>Apka.store</DomainHolder>
        </DomainFinder>
      </Wrapper>  
    );
}

const Wrapper = styled.div`

`
const Title = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #374151;
`
const Mandatory = styled.sup`
    color: #FF0000;
    font-size: 14px;
    padding: 0px 4px;
`   
const DomainFinder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D1D5DB;
    border-radius: 50px;
`
const DomainInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    background: none;
    padding: 8px 12px;
`
const Checked = styled.svg`
    padding: 1px;
    max-width: 14px;
    height: 14px;
    background-color: #0AA649;
    border-radius: 50px;
    margin: 0 8px;
`
const DomainHolder = styled.button`
    background: #E2E8F0;
    border: none;
    border-radius: 50px;
    padding: 8px 25px;
    color: black;
`