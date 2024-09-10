import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import DummyLogo from "../../assets/img/Dummy-logo.png"
import DummyProduct1 from "../../assets/img/Dummy-product-1.png"
import DummyProduct2 from "../../assets/img/Dummy-product-2.png"
import DummyProduct3 from "../../assets/img/Dummy-product-3.png"
import DummyProduct4 from "../../assets/img/Dummy-product-4.png"
import DummyProduct5 from "../../assets/img/Dummy-product-5.png"
import DummyProduct6 from "../../assets/img/Dummy-product-6.png"


export default function UserProfile() {
    return(
        <Wrapper>
            <div className="container">
                <WrapperInner>
                    <UserInfo>
                        <BaseInfo>
                            <img src={DummyLogo}/>
                            <div>
                                <h3 className="font m-0">Gems Diamonds</h3>
                                <StoreLink href="" className="font text-decoration-none text-dark">gemsdiamonds.mini.shop <CopyBtn>Copy</CopyBtn></StoreLink>
                            </div>
                        </BaseInfo>
                        <ProfileInfo>
                            <svg className=" p-3 bg-body-secondary rounded-circle" width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66276 13.2136L9.82378 19.7066C11.0068 20.9533 12.9933 20.9533 14.1762 19.7066L20.3373 13.2136C22.5543 10.8771 22.5543 7.08892 20.3373 4.75245C18.1203 2.41598 14.5258 2.41598 12.3088 4.75245C12.1409 4.92935 11.8591 4.92935 11.6912 4.75245C9.47422 2.41598 5.87975 2.41598 3.66275 4.75245C1.44576 7.08892 1.44576 10.8771 3.66276 13.2136Z" fill="#050505"/>
                            </svg>
                            <CartBtn className="font ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 3L3.04936 3.20987C3.91136 3.38227 4.55973 4.09732 4.6472 4.97203L4.8 6.5M4.8 6.5L5.7886 14.7383C5.90922 15.7435 6.76195 16.5 7.77435 16.5H16.7673C18.3733 16.5 19.7733 15.407 20.1628 13.8489L21.2855 9.35783C21.6485 7.90619 20.5505 6.5 19.0542 6.5H4.8Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M13 13.5H9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="8.5" cy="20" r="1.5" fill="white"/>
                                    <circle cx="17.5" cy="20" r="1.5" fill="white"/>
                                </svg>
                                cart
                            </CartBtn>
                           
                        </ProfileInfo>
                    </UserInfo>
                    <hr />
                    <Search>
                        <SearchSection>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="8" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.5 16.9579L21.5 21.958" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <input type="search" className=" bg-transparent border-0 w-100 p " placeholder="Search Product"/>
                        </SearchSection>
                        <FilterSection>           
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3302 16.5929H4.02944" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.1405 6.90037H19.4412" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.72629 6.84625C8.72629 5.5506 7.66813 4.5 6.36314 4.5C5.05816 4.5 4 5.5506 4 6.84625C4 8.14191 5.05816 9.19251 6.36314 9.19251C7.66813 9.19251 8.72629 8.14191 8.72629 6.84625Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 16.5537C20 15.2581 18.9427 14.2075 17.6377 14.2075C16.3319 14.2075 15.2737 15.2581 15.2737 16.5537C15.2737 17.8494 16.3319 18.9 17.6377 18.9C18.9427 18.9 20 17.8494 20 16.5537Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Filter
                        </FilterSection>
                    </Search>
                    <CardSection>
                        <Card>  
                            <CardImageSection>
                                <CardImage src={DummyProduct1} />
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
                                <CardImage src={DummyProduct2} />
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
                                <CardImage src={DummyProduct3} />
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
                                <CardImage src={DummyProduct4} />
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
                                <CardImage src={DummyProduct5} />
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
                                <CardImage src={DummyProduct6} />
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
                    </CardSection>
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
const UserInfo = styled.div`
    padding: 47px  0 0 ;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BaseInfo = styled.div`
    display: flex;
    align-items: center;
    column-gap: 24px;
    width: 100%;
    max-width: 375px;
`
const ProfileInfo = styled.div`
    text-align: right;
    display: flex;
    align-items: center;
    column-gap: 7px;
`
const CartBtn = styled.button`
    border: none;
    background-color: #000;
    color: #fff;
    padding: 15px 35px;
    border-radius: 50px;
    font-size: 15px;
    display: flex;
    column-gap: 4px;
`
const StoreLink = styled.a`
    font-size: 17px;
`
const CopyBtn = styled.button`
    font-size: 11px;
    border: none;
    padding: 1px 8px;
    background-color: #E8E8E8;
    color: #613EEA;
    border-radius: 5px;
`
const Search = styled.div`
    padding: 0 13px;
    display: flex;
    column-gap: 36px;
`
const SearchSection = styled.div`
    background-color: #EBEBEB;
    padding: 16px 18px;
    border-radius: 50px;
    display: flex;
    column-gap: 25px;
    width: 100%;
`
const FilterSection = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    column-gap: 10px;
`
const CardSection = styled.div`
    margin: 56px 0 0 ;
    padding: 0 29px ;
    column-gap: 31px;
    row-gap: 26px;
    display: flex;
    flex-wrap: wrap;
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