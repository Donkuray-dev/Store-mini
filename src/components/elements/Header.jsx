import React from "react";
import styled from "styled-components";

export default function Header(params) {
    return(
        <Wrapper className=" w-100 text-center ">
            <Title className=" text-light">
                Apka.store
            </Title>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: #2563EB;
    padding: 12px 0;
`
const Title = styled.h2`
    font-size: 41px;
    line-height: 69px;

`