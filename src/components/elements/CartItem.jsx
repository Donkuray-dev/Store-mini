import React from "react";
import { useState } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CartItem({img,ItemName}) {

    const [count, setCount] = useState(0);


    return(
        <Wrapper>
            <div className="container">
                <WrapperInner>
                    <ItemProfile>
                        <img src={img} />
                        <p className="item_name">{ItemName}</p>
                    </ItemProfile>
                    <ItemData>
                        <ItemSubtract  onClick={() => setCount(count - 1)}>
                            <svg width="10" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.183594 2.38641V0.367188H8.37112V2.38641H0.183594Z" fill="#171717"/>
                            </svg>
                        </ItemSubtract>
                        <p className="item_count">{count}</p>
                        <ItemAdd onClick={() => setCount(count + 1)}>
                            <svg width="12" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.75762 12.1174V7.3045H0V5.31294H4.75762V0.5H6.85982V5.31294H11.6174V7.3045H6.85982V12.1174H4.75762Z" fill="#F5F7F8"/>
                            </svg>
                        </ItemAdd>
                        <ItemDelete>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6811 7.28802C14.6811 7.28802 14.2738 12.3393 14.0376 14.467C13.9251 15.4833 13.2973 16.0788 12.2691 16.0975C10.3123 16.1328 8.35334 16.135 6.39734 16.0938C5.40809 16.0735 4.79084 15.4705 4.68059 14.4723C4.44284 12.3258 4.03784 7.28802 4.03784 7.28802" stroke="#A0A0A0" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.7185 4.86665H3" stroke="#A0A0A0" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.2677 4.86666C12.6789 4.86666 12.1719 4.45041 12.0564 3.87366L11.8742 2.96166C11.7617 2.54091 11.3807 2.24991 10.9464 2.24991H7.77169C7.33744 2.24991 6.95644 2.54091 6.84394 2.96166L6.66169 3.87366C6.54619 4.45041 6.03919 4.86666 5.45044 4.86666" stroke="#A0A0A0" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </ItemDelete>
                    </ItemData>
                </WrapperInner>
            </div> 
        </Wrapper>
    );
}

const Wrapper = styled.div`

`
const WrapperInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 42px 0 0;
`
const ItemProfile = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`
const ItemData = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`
const ItemSubtract = styled.button`
    background-color: #EFF4FF ;
    border: none;
    padding: 5px 11px;
    border-radius: 4px;
`
const ItemAdd = styled.button`
    background-color: #2563EB ;
    border: none;
    padding: 4px 10px;
    border-radius: 4px;
`
const ItemDelete = styled.button`
    margin: 0 0 0 61px;
    border-radius: 50px;
    border: none;
    background-color: #EBEBEB ;
    width: 34px;
    height: 34px;
    padding: 3px 0 8px;
`