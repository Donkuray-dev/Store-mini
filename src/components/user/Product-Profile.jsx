import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductMainImg from "../../assets/img/ProductImg.png";
import ProductOtherImg1 from "../../assets/img/ProductOtherImg1.png";
import ProductOtherImg2 from "../../assets/img/ProductOtherImg2.png";
import ProductOtherImg3 from "../../assets/img/ProductOtherImg3.png";
import ProductOtherImg4 from "../../assets/img/ProductOtherImg4.png";


export default function ProductProfile() {
    return(
        <Wrapper>
            <div className="container">
                <WrapperInner>
                    <Title>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6668 10.6666L6.27627 15.0572C5.75557 15.5779 5.75557 16.4221 6.27627 16.9428L10.6668 21.3333M6.66679 16L25.3335 16" stroke="#171717" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <p className=" h2">Product</p>
                    </Title>
                    <Product>
                        <ProductOtherImgs>
                            <img src={ProductOtherImg1} />
                            <img src={ProductOtherImg2} />
                            <img src={ProductOtherImg3} />
                            <img src={ProductOtherImg4} />
                        </ProductOtherImgs>
                        <ProductImg>
                            <img src={ProductMainImg} />
                        </ProductImg>
                        <ProductDetails>
                            <ProductTitle>
                                Pink Champagne Markess line Soon
                            </ProductTitle>
                            <p>Grow - Shine - Memorable</p>
                            <></>
                        </ProductDetails>
                    </Product>
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
  display: flex;
  align-items: center;
  column-gap: 319px;
  padding: 42px 0 0;
`;
const Product = styled.div`
    margin: 38px 0 0 0;
    display: flex;
    justify-content: space-between;
`
const ProductOtherImgs = styled.div`
    display: grid;
    row-gap: 30px;
    padding: 15px 0;
`
const ProductImg = styled.div`

`
const ProductDetails = styled.div`

`
const ProductTitle = styled.p``