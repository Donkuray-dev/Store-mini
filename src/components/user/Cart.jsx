import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function AdminProfile() {
    return(
        <Wrapper>
            <div className="container">
                <WrapperInner>
                    <Title>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6668 10.6666L6.27627 15.0572C5.75557 15.5779 5.75557 16.4221 6.27627 16.9428L10.6668 21.3333M6.66679 16L25.3335 16" stroke="#171717" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <p>Cart</p>
                    </Title>
                </WrapperInner>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
const WrapperInner = styled.div`
  padding: 0 65px;
  width: 100%;
  max-width: 893px;
  margin: 0 auto;
  background-color: #f5f7f8;
  height: 100vh;
`;
const Title = styled.div`
    color: #000;
`
