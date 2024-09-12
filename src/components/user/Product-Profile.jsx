import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
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
                            <ProductTitle className="font">
                                Pink Champagne Markess line Soon
                            </ProductTitle>
                            <p className="p font my-1">Grow - Shine - Memorable</p>
                            <ProductPriceing className="font">
                                    <h3><span>-20%</span>5000</h3>
                                    <p><span>M.R.P.</span><s>6000/</s></p>
                            </ProductPriceing>
                            <ProductBtn>
                                <CartBtn>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3L3.04936 3.20987C3.91136 3.38227 4.55973 4.09732 4.6472 4.97203L4.8 6.5M4.8 6.5L5.7886 14.7383C5.90922 15.7435 6.76195 16.5 7.77435 16.5H16.7673C18.3733 16.5 19.7733 15.407 20.1628 13.8489L21.2855 9.35783C21.6485 7.90619 20.5505 6.5 19.0542 6.5H4.8Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M13 13.5H9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="8.5" cy="20" r="1.5" fill="white"/>
                                        <circle cx="17.5" cy="20" r="1.5" fill="white"/>
                                    </svg>
                                    Add To Cart
                                </CartBtn>
                                <LikeBtn>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.66275 13.2136L9.82377 19.7066C11.0068 20.9533 12.9932 20.9533 14.1762 19.7066L20.3372 13.2136C22.5542 10.8771 22.5543 7.08892 20.3373 4.75244C18.1203 2.41597 14.5258 2.41597 12.3088 4.75245V4.75245C12.1409 4.92935 11.8591 4.92935 11.6912 4.75245V4.75245C9.47421 2.41597 5.87975 2.41597 3.66275 4.75245C1.44575 7.08892 1.44575 10.8771 3.66275 13.2136Z" stroke="#121212" stroke-width="1.5"/>
                                    </svg>
                                </LikeBtn>
                            </ProductBtn>
                            <AboutProduct>
                                <h3>About this Item</h3>
                                <p>Advanced noise-cancelling technology,coupled with a high-performance chip,elevates the depth of noise cancellation upto 49dB.This reduces noise and blocks out chaos and allows users to enjoy music immersively</p>
                            </AboutProduct>
                        </ProductDetails>
                    </Product>
                </WrapperInner>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`

`
const WrapperInner = styled.div`
    padding: 0 65px;
    width: 100%;
    max-width: 893px;
    margin: 0 auto;
    background-color: #F5F7F8;
    height: 100vh;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    column-gap: 319px;
    padding: 42px 0 0 ;
`
const Product = styled.div`
    margin: 38px 0 0 0;
    display: flex;
    justify-content: space-between;
`
const ProductOtherImgs = styled.div`
    display: grid;
    padding: 15px 0;
`
const ProductImg = styled.div`
    margin: 0 30px 0 17px;
`
const ProductDetails = styled.div`

`
const ProductTitle = styled.p`
    font-size: 27px;
    font-weight: 600;
    margin: 0;
`
const ProductPriceing = styled.div`
    margin: 20px 0 0 0;
`
const ProductBtn = styled.div`

`
const CartBtn = styled.button`

`
const LikeBtn = styled.button`

`
const AboutProduct = styled.div`

`