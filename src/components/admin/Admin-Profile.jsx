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


export default function AdminProfile() {
    return(
        <Wrapper>
            <div className="container">
                <WrapperInner>
                    <AdminInfo>
                        <BaseInfo>
                            <img src={DummyLogo}/>
                            <div>
                                <h3 className="font m-0">Gems Diamonds</h3>
                                <p className="font m-0">Grow - Shine - Memorable</p>
                                <p className="font m-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 10.4167C20 15.8445 13.6 21.5 12 21.5C10.4 21.5 4 15.8445 4 10.4167C4 6.04441 7.58172 2.5 12 2.5C16.4183 2.5 20 6.04441 20 10.4167Z" stroke="#121212" stroke-width="1.5"/>
                                        <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 15 7)" stroke="#121212" stroke-width="1.5"/>
                                    </svg>
                                    601-303, Jamna market, Mubai-36006
                                </p>
                            </div>
                        </BaseInfo>
                        <ProfileInfo>
                            <EditBtn className="font ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80585C14.5869 2.7311 16.3274 2.73044 17.4013 3.80438L19.8932 6.29623C20.958 7.36102 20.969 9.08478 19.918 10.1631L10.6849 19.6364C9.97933 20.3603 9.01167 20.7685 8.00124 20.7684L5.24909 20.7683C3.96984 20.7682 2.94823 19.7019 3.00203 18.4228L3.12019 15.6138C3.15968 14.6747 3.54996 13.7847 4.2138 13.1199L13.5137 3.80585ZM16.3415 4.86584C15.8533 4.37769 15.0622 4.37799 14.5744 4.86651L12.9113 6.53212L17.1911 10.8119L18.8446 9.11538C19.3224 8.62522 19.3173 7.84169 18.8333 7.3577L16.3415 4.86584ZM5.27446 14.1805L11.8514 7.59358L16.144 11.8862L9.61148 18.5886C9.18816 19.023 8.60756 19.2679 8.0013 19.2678L5.24916 19.2677C4.82274 19.2677 4.4822 18.9122 4.50014 18.4859L4.61829 15.6769C4.64199 15.1134 4.87616 14.5794 5.27446 14.1805ZM20.5148 20.6951C20.9289 20.6951 21.2645 20.3592 21.2645 19.9448C21.2645 19.5305 20.9289 19.1945 20.5148 19.1945H14.3931C13.9791 19.1945 13.6434 19.5305 13.6434 19.9448C13.6434 20.3592 13.9791 20.6951 14.3931 20.6951H20.5148Z" fill="white"/>
                                </svg>
                                Edit Profile
                            </EditBtn>
                            <StoreLink href="" className="font text-decoration-none text-dark">gemsdiamonds.mini.shop <CopyBtn>Copy</CopyBtn></StoreLink>
                        </ProfileInfo>
                    </AdminInfo>
                    <hr />
                    <AddBtn className="font">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_77)">
                                <path d="M10 11.875V3.125M16.875 11.875V16.25C16.875 16.595 16.595 16.875 16.25 16.875H3.75C3.405 16.875 3.125 16.595 3.125 16.25V11.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.125 8.75L10 11.875L6.875 8.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_77">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Add Product
                    </AddBtn>
                    <CardSection>
                        <Card>  
                            <CardImageSection>
                                <CardImage src={DummyProduct1} />
                                <CardDeleteBtn>
                                    <svg className=" align-text-top" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.19745 6.60376C3.55882 5.75225 4.16639 4.53711 5.23078 4.53711H13.6696C14.734 4.53711 15.3416 5.75225 14.7029 6.60376V6.60376C14.2371 7.22482 13.9854 7.9802 13.9854 8.75653V13.6074C13.9854 15.2772 12.6317 16.6309 10.9619 16.6309H7.93848C6.26868 16.6309 4.91504 15.2772 4.91504 13.6074V8.75653C4.91504 7.9802 4.66325 7.22482 4.19745 6.60376V6.60376Z" stroke="white" stroke-width="1.13379"/>
                                        <path d="M10.9619 12.8516L10.9619 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.93848 12.8516L7.93848 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.4736 4.53711L12.0623 3.3032C11.8566 2.6859 11.2789 2.26953 10.6282 2.26953H8.2722C7.62151 2.26953 7.04383 2.6859 6.83806 3.3032L6.42676 4.53711" stroke="white" stroke-width="1.13379" stroke-linecap="round"/>
                                    </svg>
                                </CardDeleteBtn>
                            </CardImageSection>
                            <CardDetails>
                                <p className="font p m-1 fw-semibold">Pink Champagne Marke <br /> line Soon</p>
                                <ProductDetail>
                                    <p className="font fw-bold">₹5000/-</p>
                                    <ProductEditBtn className="font">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80585C14.5869 2.7311 16.3274 2.73044 17.4013 3.80438L19.8932 6.29623C20.958 7.36102 20.969 9.08478 19.918 10.1631L10.6849 19.6364C9.97933 20.3603 9.01167 20.7685 8.00124 20.7684L5.24909 20.7683C3.96984 20.7682 2.94823 19.7019 3.00203 18.4228L3.12019 15.6138C3.15968 14.6747 3.54996 13.7847 4.2138 13.1199L13.5137 3.80585ZM16.3415 4.86584C15.8533 4.37769 15.0622 4.37799 14.5744 4.86651L12.9113 6.53212L17.1911 10.8119L18.8446 9.11538C19.3224 8.62522 19.3173 7.84169 18.8333 7.3577L16.3415 4.86584ZM5.27446 14.1805L11.8514 7.59358L16.144 11.8862L9.61148 18.5886C9.18816 19.023 8.60756 19.2679 8.0013 19.2678L5.24916 19.2677C4.82274 19.2677 4.4822 18.9122 4.50014 18.4859L4.61829 15.6769C4.64199 15.1134 4.87616 14.5794 5.27446 14.1805ZM20.5148 20.6951C20.9289 20.6951 21.2645 20.3592 21.2645 19.9448C21.2645 19.5305 20.9289 19.1945 20.5148 19.1945H14.3931C13.9791 19.1945 13.6434 19.5305 13.6434 19.9448C13.6434 20.3592 13.9791 20.6951 14.3931 20.6951H20.5148Z" fill="white"/>
                                        </svg>
                                        Edit
                                    </ProductEditBtn>
                                </ProductDetail>
                            </CardDetails>
                        </Card>
                        <Card>  
                            <CardImageSection>
                                <CardImage src={DummyProduct2} />
                                <CardDeleteBtn>
                                    <svg className=" align-text-top" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.19745 6.60376C3.55882 5.75225 4.16639 4.53711 5.23078 4.53711H13.6696C14.734 4.53711 15.3416 5.75225 14.7029 6.60376V6.60376C14.2371 7.22482 13.9854 7.9802 13.9854 8.75653V13.6074C13.9854 15.2772 12.6317 16.6309 10.9619 16.6309H7.93848C6.26868 16.6309 4.91504 15.2772 4.91504 13.6074V8.75653C4.91504 7.9802 4.66325 7.22482 4.19745 6.60376V6.60376Z" stroke="white" stroke-width="1.13379"/>
                                        <path d="M10.9619 12.8516L10.9619 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.93848 12.8516L7.93848 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.4736 4.53711L12.0623 3.3032C11.8566 2.6859 11.2789 2.26953 10.6282 2.26953H8.2722C7.62151 2.26953 7.04383 2.6859 6.83806 3.3032L6.42676 4.53711" stroke="white" stroke-width="1.13379" stroke-linecap="round"/>
                                    </svg>
                                </CardDeleteBtn>
                            </CardImageSection>
                            <CardDetails>
                                <p className="font p m-1 fw-semibold">Pink Champagne Marke <br /> line Soon</p>
                                <ProductDetail>
                                    <p className="font fw-bold">₹5000/-</p>
                                    <ProductEditBtn className="font">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80585C14.5869 2.7311 16.3274 2.73044 17.4013 3.80438L19.8932 6.29623C20.958 7.36102 20.969 9.08478 19.918 10.1631L10.6849 19.6364C9.97933 20.3603 9.01167 20.7685 8.00124 20.7684L5.24909 20.7683C3.96984 20.7682 2.94823 19.7019 3.00203 18.4228L3.12019 15.6138C3.15968 14.6747 3.54996 13.7847 4.2138 13.1199L13.5137 3.80585ZM16.3415 4.86584C15.8533 4.37769 15.0622 4.37799 14.5744 4.86651L12.9113 6.53212L17.1911 10.8119L18.8446 9.11538C19.3224 8.62522 19.3173 7.84169 18.8333 7.3577L16.3415 4.86584ZM5.27446 14.1805L11.8514 7.59358L16.144 11.8862L9.61148 18.5886C9.18816 19.023 8.60756 19.2679 8.0013 19.2678L5.24916 19.2677C4.82274 19.2677 4.4822 18.9122 4.50014 18.4859L4.61829 15.6769C4.64199 15.1134 4.87616 14.5794 5.27446 14.1805ZM20.5148 20.6951C20.9289 20.6951 21.2645 20.3592 21.2645 19.9448C21.2645 19.5305 20.9289 19.1945 20.5148 19.1945H14.3931C13.9791 19.1945 13.6434 19.5305 13.6434 19.9448C13.6434 20.3592 13.9791 20.6951 14.3931 20.6951H20.5148Z" fill="white"/>
                                        </svg>
                                        Edit
                                    </ProductEditBtn>
                                </ProductDetail>
                            </CardDetails>
                        </Card>
                        <Card>  
                            <CardImageSection>
                                <CardImage src={DummyProduct3} />
                                <CardDeleteBtn>
                                    <svg className=" align-text-top" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.19745 6.60376C3.55882 5.75225 4.16639 4.53711 5.23078 4.53711H13.6696C14.734 4.53711 15.3416 5.75225 14.7029 6.60376V6.60376C14.2371 7.22482 13.9854 7.9802 13.9854 8.75653V13.6074C13.9854 15.2772 12.6317 16.6309 10.9619 16.6309H7.93848C6.26868 16.6309 4.91504 15.2772 4.91504 13.6074V8.75653C4.91504 7.9802 4.66325 7.22482 4.19745 6.60376V6.60376Z" stroke="white" stroke-width="1.13379"/>
                                        <path d="M10.9619 12.8516L10.9619 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.93848 12.8516L7.93848 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.4736 4.53711L12.0623 3.3032C11.8566 2.6859 11.2789 2.26953 10.6282 2.26953H8.2722C7.62151 2.26953 7.04383 2.6859 6.83806 3.3032L6.42676 4.53711" stroke="white" stroke-width="1.13379" stroke-linecap="round"/>
                                    </svg>
                                </CardDeleteBtn>
                            </CardImageSection>
                            <CardDetails>
                                <p className="font p m-1 fw-semibold">Pink Champagne Marke <br /> line Soon</p>
                                <ProductDetail>
                                    <p className="font fw-bold">₹5000/-</p>
                                    <ProductEditBtn className="font">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80585C14.5869 2.7311 16.3274 2.73044 17.4013 3.80438L19.8932 6.29623C20.958 7.36102 20.969 9.08478 19.918 10.1631L10.6849 19.6364C9.97933 20.3603 9.01167 20.7685 8.00124 20.7684L5.24909 20.7683C3.96984 20.7682 2.94823 19.7019 3.00203 18.4228L3.12019 15.6138C3.15968 14.6747 3.54996 13.7847 4.2138 13.1199L13.5137 3.80585ZM16.3415 4.86584C15.8533 4.37769 15.0622 4.37799 14.5744 4.86651L12.9113 6.53212L17.1911 10.8119L18.8446 9.11538C19.3224 8.62522 19.3173 7.84169 18.8333 7.3577L16.3415 4.86584ZM5.27446 14.1805L11.8514 7.59358L16.144 11.8862L9.61148 18.5886C9.18816 19.023 8.60756 19.2679 8.0013 19.2678L5.24916 19.2677C4.82274 19.2677 4.4822 18.9122 4.50014 18.4859L4.61829 15.6769C4.64199 15.1134 4.87616 14.5794 5.27446 14.1805ZM20.5148 20.6951C20.9289 20.6951 21.2645 20.3592 21.2645 19.9448C21.2645 19.5305 20.9289 19.1945 20.5148 19.1945H14.3931C13.9791 19.1945 13.6434 19.5305 13.6434 19.9448C13.6434 20.3592 13.9791 20.6951 14.3931 20.6951H20.5148Z" fill="white"/>
                                        </svg>
                                        Edit
                                    </ProductEditBtn>
                                </ProductDetail>
                            </CardDetails>
                        </Card>
                        <Card>  
                            <CardImageSection>
                                <CardImage src={DummyProduct4} />
                                <CardDeleteBtn>
                                    <svg className=" align-text-top" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.19745 6.60376C3.55882 5.75225 4.16639 4.53711 5.23078 4.53711H13.6696C14.734 4.53711 15.3416 5.75225 14.7029 6.60376V6.60376C14.2371 7.22482 13.9854 7.9802 13.9854 8.75653V13.6074C13.9854 15.2772 12.6317 16.6309 10.9619 16.6309H7.93848C6.26868 16.6309 4.91504 15.2772 4.91504 13.6074V8.75653C4.91504 7.9802 4.66325 7.22482 4.19745 6.60376V6.60376Z" stroke="white" stroke-width="1.13379"/>
                                        <path d="M10.9619 12.8516L10.9619 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.93848 12.8516L7.93848 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.4736 4.53711L12.0623 3.3032C11.8566 2.6859 11.2789 2.26953 10.6282 2.26953H8.2722C7.62151 2.26953 7.04383 2.6859 6.83806 3.3032L6.42676 4.53711" stroke="white" stroke-width="1.13379" stroke-linecap="round"/>
                                    </svg>
                                </CardDeleteBtn>
                            </CardImageSection>
                            <CardDetails>
                                <p className="font p m-1 fw-semibold">Pink Champagne Marke <br /> line Soon</p>
                                <ProductDetail>
                                    <p className="font fw-bold">₹5000/-</p>
                                    <ProductEditBtn className="font">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80585C14.5869 2.7311 16.3274 2.73044 17.4013 3.80438L19.8932 6.29623C20.958 7.36102 20.969 9.08478 19.918 10.1631L10.6849 19.6364C9.97933 20.3603 9.01167 20.7685 8.00124 20.7684L5.24909 20.7683C3.96984 20.7682 2.94823 19.7019 3.00203 18.4228L3.12019 15.6138C3.15968 14.6747 3.54996 13.7847 4.2138 13.1199L13.5137 3.80585ZM16.3415 4.86584C15.8533 4.37769 15.0622 4.37799 14.5744 4.86651L12.9113 6.53212L17.1911 10.8119L18.8446 9.11538C19.3224 8.62522 19.3173 7.84169 18.8333 7.3577L16.3415 4.86584ZM5.27446 14.1805L11.8514 7.59358L16.144 11.8862L9.61148 18.5886C9.18816 19.023 8.60756 19.2679 8.0013 19.2678L5.24916 19.2677C4.82274 19.2677 4.4822 18.9122 4.50014 18.4859L4.61829 15.6769C4.64199 15.1134 4.87616 14.5794 5.27446 14.1805ZM20.5148 20.6951C20.9289 20.6951 21.2645 20.3592 21.2645 19.9448C21.2645 19.5305 20.9289 19.1945 20.5148 19.1945H14.3931C13.9791 19.1945 13.6434 19.5305 13.6434 19.9448C13.6434 20.3592 13.9791 20.6951 14.3931 20.6951H20.5148Z" fill="white"/>
                                        </svg>
                                        Edit
                                    </ProductEditBtn>
                                </ProductDetail>
                            </CardDetails>
                        </Card>
                        <Card>  
                            <CardImageSection>
                                <CardImage src={DummyProduct5} />
                                <CardDeleteBtn>
                                    <svg className=" align-text-top" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.19745 6.60376C3.55882 5.75225 4.16639 4.53711 5.23078 4.53711H13.6696C14.734 4.53711 15.3416 5.75225 14.7029 6.60376V6.60376C14.2371 7.22482 13.9854 7.9802 13.9854 8.75653V13.6074C13.9854 15.2772 12.6317 16.6309 10.9619 16.6309H7.93848C6.26868 16.6309 4.91504 15.2772 4.91504 13.6074V8.75653C4.91504 7.9802 4.66325 7.22482 4.19745 6.60376V6.60376Z" stroke="white" stroke-width="1.13379"/>
                                        <path d="M10.9619 12.8516L10.9619 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.93848 12.8516L7.93848 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.4736 4.53711L12.0623 3.3032C11.8566 2.6859 11.2789 2.26953 10.6282 2.26953H8.2722C7.62151 2.26953 7.04383 2.6859 6.83806 3.3032L6.42676 4.53711" stroke="white" stroke-width="1.13379" stroke-linecap="round"/>
                                    </svg>
                                </CardDeleteBtn>
                            </CardImageSection>
                            <CardDetails>
                                <p className="font p m-1 fw-semibold">Pink Champagne Marke <br /> line Soon</p>
                                <ProductDetail>
                                    <p className="font fw-bold">₹5000/-</p>
                                    <ProductEditBtn className="font">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80585C14.5869 2.7311 16.3274 2.73044 17.4013 3.80438L19.8932 6.29623C20.958 7.36102 20.969 9.08478 19.918 10.1631L10.6849 19.6364C9.97933 20.3603 9.01167 20.7685 8.00124 20.7684L5.24909 20.7683C3.96984 20.7682 2.94823 19.7019 3.00203 18.4228L3.12019 15.6138C3.15968 14.6747 3.54996 13.7847 4.2138 13.1199L13.5137 3.80585ZM16.3415 4.86584C15.8533 4.37769 15.0622 4.37799 14.5744 4.86651L12.9113 6.53212L17.1911 10.8119L18.8446 9.11538C19.3224 8.62522 19.3173 7.84169 18.8333 7.3577L16.3415 4.86584ZM5.27446 14.1805L11.8514 7.59358L16.144 11.8862L9.61148 18.5886C9.18816 19.023 8.60756 19.2679 8.0013 19.2678L5.24916 19.2677C4.82274 19.2677 4.4822 18.9122 4.50014 18.4859L4.61829 15.6769C4.64199 15.1134 4.87616 14.5794 5.27446 14.1805ZM20.5148 20.6951C20.9289 20.6951 21.2645 20.3592 21.2645 19.9448C21.2645 19.5305 20.9289 19.1945 20.5148 19.1945H14.3931C13.9791 19.1945 13.6434 19.5305 13.6434 19.9448C13.6434 20.3592 13.9791 20.6951 14.3931 20.6951H20.5148Z" fill="white"/>
                                        </svg>
                                        Edit
                                    </ProductEditBtn>
                                </ProductDetail>
                            </CardDetails>
                        </Card>
                        <Card>  
                            <CardImageSection>
                                <CardImage src={DummyProduct6} />
                                <CardDeleteBtn>
                                    <svg className=" align-text-top" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.19745 6.60376C3.55882 5.75225 4.16639 4.53711 5.23078 4.53711H13.6696C14.734 4.53711 15.3416 5.75225 14.7029 6.60376V6.60376C14.2371 7.22482 13.9854 7.9802 13.9854 8.75653V13.6074C13.9854 15.2772 12.6317 16.6309 10.9619 16.6309H7.93848C6.26868 16.6309 4.91504 15.2772 4.91504 13.6074V8.75653C4.91504 7.9802 4.66325 7.22482 4.19745 6.60376V6.60376Z" stroke="white" stroke-width="1.13379"/>
                                        <path d="M10.9619 12.8516L10.9619 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.93848 12.8516L7.93848 8.31641" stroke="white" stroke-width="1.13379" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.4736 4.53711L12.0623 3.3032C11.8566 2.6859 11.2789 2.26953 10.6282 2.26953H8.2722C7.62151 2.26953 7.04383 2.6859 6.83806 3.3032L6.42676 4.53711" stroke="white" stroke-width="1.13379" stroke-linecap="round"/>
                                    </svg>
                                </CardDeleteBtn>
                            </CardImageSection>
                            <CardDetails>
                                <p className="font p m-1 fw-semibold">Pink Champagne Marke <br /> line Soon</p>
                                <ProductDetail>
                                    <p className="font fw-bold">₹5000/-</p>
                                    <ProductEditBtn className="font">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80585C14.5869 2.7311 16.3274 2.73044 17.4013 3.80438L19.8932 6.29623C20.958 7.36102 20.969 9.08478 19.918 10.1631L10.6849 19.6364C9.97933 20.3603 9.01167 20.7685 8.00124 20.7684L5.24909 20.7683C3.96984 20.7682 2.94823 19.7019 3.00203 18.4228L3.12019 15.6138C3.15968 14.6747 3.54996 13.7847 4.2138 13.1199L13.5137 3.80585ZM16.3415 4.86584C15.8533 4.37769 15.0622 4.37799 14.5744 4.86651L12.9113 6.53212L17.1911 10.8119L18.8446 9.11538C19.3224 8.62522 19.3173 7.84169 18.8333 7.3577L16.3415 4.86584ZM5.27446 14.1805L11.8514 7.59358L16.144 11.8862L9.61148 18.5886C9.18816 19.023 8.60756 19.2679 8.0013 19.2678L5.24916 19.2677C4.82274 19.2677 4.4822 18.9122 4.50014 18.4859L4.61829 15.6769C4.64199 15.1134 4.87616 14.5794 5.27446 14.1805ZM20.5148 20.6951C20.9289 20.6951 21.2645 20.3592 21.2645 19.9448C21.2645 19.5305 20.9289 19.1945 20.5148 19.1945H14.3931C13.9791 19.1945 13.6434 19.5305 13.6434 19.9448C13.6434 20.3592 13.9791 20.6951 14.3931 20.6951H20.5148Z" fill="white"/>
                                        </svg>
                                        Edit
                                    </ProductEditBtn>
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
    height: fit-content;

    @media(max-width:767px){
        padding: 0 10px;
    }
`
const AdminInfo = styled.div`
    padding: 47px  0 0 ;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width:767px){
        display: grid;
    }
`
const BaseInfo = styled.div`
    display: flex;
    align-items: center;
    column-gap: 24px;
    width: 100%;

    @media(max-width:767px){



        img{
            width: 70px;
        }
        h3{
            font-size: 20px;
        }
        p{
            font-size: 11px;
            line-height: 15px;
        }

    }
`
const ProfileInfo = styled.div`
    text-align: right;

    @media(max-width:767px){
        text-align: left;
    }
`
const EditBtn = styled.button`
    border: none;
    background-color: #000;
    color: #fff;
    padding: 15px 35px;
    border-radius: 50px;
    font-size: 15px;
    margin: 0 0 15px;

    @media(max-width:767px){
        font-size: 11px;
        padding: 5px 25px;
        margin: 15px 0 0;
    }
 `
const StoreLink = styled.a`
    font-size: 17px;

    @media(max-width:767px){
        margin: 15px 0 0;
    }
`
const CopyBtn = styled.button`
    font-size: 11px;
    border: none;
    padding: 1px 8px;
    background-color: #E8E8E8;
    color: #613EEA;
    border-radius: 5px;
 
`
const AddBtn = styled.button`
    background-color: #2563EB;
    border-radius: 50px;
    border: none;
    padding: 15px 47px;
    font-size: 15px;
    color: #fff;
    display: flex;
    column-gap: 10px;
    margin: 0 auto;
`
const CardSection = styled.div`
    margin: 56px 0 0 ;
    padding: 0 29px ;
    column-gap: 31px;
    row-gap: 26px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 0px;
    }
`
const Card = styled.div`
    width: 100%;
    max-width: 214px;

    @media (max-width: 767px) {
        max-width: 107px;
    }
`
const CardImageSection = styled.div`
    width: 214px;
    height: 214px;

    @media (max-width: 767px) {
        width: 107px;
        height: 107px;
    }
`
const CardImage = styled.img`
    position: absolute;

    @media (max-width: 767px) {
        width: 107px;
        height: 107px;
    }
`
const CardDeleteBtn = styled.button`
    position: relative;
    z-index: 9999;
    float: right;
    padding: 8px;
    margin: 5px;
    background-color: #000;
    border: none;
    border-radius: 50px;
    height: 35px;
`
const CardDetails = styled.div`

`
const ProductDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        display: grid;
    }
`
const ProductEditBtn = styled.button`
    border: none;
    background-color: #000;
    color: #fff;
    padding: 9px 15px;
    border-radius: 50px;
    font-size: 12px;
`






