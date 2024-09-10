import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import React from "react";


export default function Stepper({index}) {
    let steps = document.querySelectorAll('.step')
    let steplines = document.querySelectorAll('.step_line')

    function checker(i) {
        for (let i = 0; i <= 3; i++) {
                if (i == 0) {
                    
                }
        }
    }

    checker(index);

    return(
        <>
            <Wrapper className="step w-100 d-flex align-items-center">
                <Step className=" rounded-circle w-100 " id='step-1' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 3L5 8.5L2.5 6" stroke="#6b7280" stroke-linecap="round" stroke-linejoin="round"/>
                </Step>
                <Stepline className="step_line m-0" id='stepline-1' />
                <Step className="step rounded-circle w-100 " id='step-2' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 3L5 8.5L2.5 6" stroke="#6b7280" stroke-linecap="round" stroke-linejoin="round"/>
                </Step>
                <Stepline className="step_line m-0" id='stepline-2' />
                <Step className="step rounded-circle w-100 " id='step-3' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 3L5 8.5L2.5 6" stroke="#6b7280" stroke-linecap="round" stroke-linejoin="round"/>
                </Step>
                <Stepline className="step_line m-0" id='stepline-3' />
                <Step className="step rounded-circle w-100 " id='step-4' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 3L5 8.5L2.5 6" stroke="#6b7280" stroke-linecap="round" stroke-linejoin="round"/>
                </Step>
            </Wrapper>
        </>
    );
}


const Wrapper = styled.div `
    max-width: 200px;
    margin: 39px auto 31px;
`
const Step = styled.svg`
    padding:4px ;
    background-color: #D1D5DB;
    max-width: 20px;
    height: 20px;
`
const Stepline = styled.hr`
    border: 2px solid #D1D5DB;
    width: 40px;
    height: 0px;
`