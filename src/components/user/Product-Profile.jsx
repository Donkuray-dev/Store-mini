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
                    <SimilerProduct>
                        <h3 className="font big">Similer Product</h3>
                        <SimilerProductList>
                            <Card>
                                <CardImageSection>
                                    {/* <CardImage src={SimilerProduct1} /> */}
                                    <CardLikeBtn>
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66275 10.2136L7.82377 16.7066C9.00675 17.9533 10.9932 17.9533 12.1762 16.7066L18.3372 10.2136C20.5542 7.87708 20.5543 4.08892 18.3373 1.75244C16.1203 -0.584027 12.5258 -0.584026 10.3088 1.75245C10.1409 1.92935 9.85907 1.92935 9.69121 1.75245C7.47421 -0.584026 3.87975 -0.584026 1.66275 1.75245C-0.55425 4.08892 -0.554249 7.87708 1.66275 10.2136Z" fill="white" fill-opacity="0.72"/>
                                        </svg>
                                    </CardLikeBtn>
                                </CardImageSection>
                                <CardDetails>
                                    <p className="font p m-1 fw-semibold">Pink Champagne Marke <br /> line Soon</p>
                                    <ProductDetail>
                                        <p className="font fw-bold">₹5000/-</p>
                                        <ProductPriceBtn className="font">
                                            Add To Cart
                                        </ProductPriceBtn>
                                    </ProductDetail>
                                </CardDetails>
                            </Card>
                            <Card>
                                <CardImageSection>
                                    {/* <CardImage src={SimilerProduct2} /> */}
                                    <CardLikeBtn>
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66275 10.2136L7.82377 16.7066C9.00675 17.9533 10.9932 17.9533 12.1762 16.7066L18.3372 10.2136C20.5542 7.87708 20.5543 4.08892 18.3373 1.75244C16.1203 -0.584027 12.5258 -0.584026 10.3088 1.75245C10.1409 1.92935 9.85907 1.92935 9.69121 1.75245C7.47421 -0.584026 3.87975 -0.584026 1.66275 1.75245C-0.55425 4.08892 -0.554249 7.87708 1.66275 10.2136Z" fill="white" fill-opacity="0.72"/>
                                        </svg>
                                    </CardLikeBtn>
                                </CardImageSection>
                                <CardDetails>
                                    <p className="font p m-1 fw-semibold">Pink Champagne Marke <br /> line Soon</p>
                                    <ProductDetail>
                                        <p className="font fw-bold">₹5000/-</p>
                                        <ProductPriceBtn className="font">
                                            Add To Cart
                                        </ProductPriceBtn>
                                    </ProductDetail>
                                </CardDetails>
                            </Card>
                            <Card>
                                <CardImageSection>
                                    {/* <CardImage src={SimilerProduct3} /> */}
                                    <CardLikeBtn>
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.66275 10.2136L7.82377 16.7066C9.00675 17.9533 10.9932 17.9533 12.1762 16.7066L18.3372 10.2136C20.5542 7.87708 20.5543 4.08892 18.3373 1.75244C16.1203 -0.584027 12.5258 -0.584026 10.3088 1.75245C10.1409 1.92935 9.85907 1.92935 9.69121 1.75245C7.47421 -0.584026 3.87975 -0.584026 1.66275 1.75245C-0.55425 4.08892 -0.554249 7.87708 1.66275 10.2136Z" fill="white" fill-opacity="0.72"/>
                                        </svg>
                                    </CardLikeBtn>
                                </CardImageSection>
                                <CardDetails>
                                    <p className="font p m-1 fw-semibold">Pink Champagne Marke <br /> line Soon</p>
                                    <ProductDetail>
                                        <p className="font fw-bold">₹5000/-</p>
                                        <ProductPriceBtn className="font">
                                            Add To Cart
                                        </ProductPriceBtn>
                                    </ProductDetail>
                                </CardDetails>
                            </Card>
                        </SimilerProductList>
                    </SimilerProduct>
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
    background-color: #F5F7F8;
    height: 100vh;
`
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
    align-items: center;
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
const ProductTitle = styled.p`
    font-size: 27px;
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    line-height: 30px; 
`
const ProductPriceing = styled.div`
    margin: 20px 0 0 0;
    margin: 15px 0 0 0;
`
const ProductBtn = styled.div`
    margin: 14px 0 0 0;
    display: flex;
    column-gap: 16px;
    align-items: center;
`
const CartBtn = styled.button`
    background: #000;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 15px 32px;
    border-radius: 50px;
`
const LikeBtn = styled.button`
    border: 1px solid #000;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 16px;
    border-radius: 50px;
`
const AboutProduct = styled.div`
    margin: 14px 0 0 0;
`
const SimilerProduct = styled.div`
    margin: 51px 0 0 0;
`
const SimilerProductList = styled.div`
    margin: 28px 0 0 0;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
`
const Card = styled.div`
    width: 100%;
    max-width: 214px;
`
const CardImageSection = styled.div`
    width: 214px;
    height: 214px;
`
const CardImage = styled.img`
    position: absolute;
`
const CardLikeBtn = styled.button`
    position: relative;
    z-index: 9999;
    float: right;
    margin: 5px;
    border: none;
    border-radius: 50px;
    height: 35px;
    background: none;
`
const CardDetails = styled.div`
`
const ProductDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ProductPriceBtn = styled.button`
    border: none;
    background-color: #000;
    color: #fff;
    padding: 9px 15px;
    border-radius: 50px;
    font-size: 12px;
`