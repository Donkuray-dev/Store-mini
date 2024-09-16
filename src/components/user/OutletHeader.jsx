import React from "react";
import styled from "styled-components";
import DummyLogo from "../../assets/img/Dummy-logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
const OutletHeader = () => {
  const Navigate = useNavigate();

  const handleRoot = () => {
    Navigate("/Cart");
  };

  const { totalUniqueItems, isEmpty, addItem } = useCart();

  return (
    <>
      <UserInfo>
        <BaseInfo>
          <img src={DummyLogo} />
          <div>
            <h3 className="font m-0">Gems Diamonds</h3>
            <StoreLink href="" className="font text-decoration-none text-dark">
              gemsdiamonds.mini.shop <CopyBtn>Copy</CopyBtn>
            </StoreLink>
          </div>
        </BaseInfo>
        <ProfileInfo>
          <svg
            className=" p-3 bg-body-secondary rounded-circle"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66276 13.2136L9.82378 19.7066C11.0068 20.9533 12.9933 20.9533 14.1762 19.7066L20.3373 13.2136C22.5543 10.8771 22.5543 7.08892 20.3373 4.75245C18.1203 2.41598 14.5258 2.41598 12.3088 4.75245C12.1409 4.92935 11.8591 4.92935 11.6912 4.75245C9.47422 2.41598 5.87975 2.41598 3.66275 4.75245C1.44576 7.08892 1.44576 10.8771 3.66276 13.2136Z"
              fill="#050505"
            />
          </svg>
          <CartBtn className="font " onClick={handleRoot}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3L3.04936 3.20987C3.91136 3.38227 4.55973 4.09732 4.6472 4.97203L4.8 6.5M4.8 6.5L5.7886 14.7383C5.90922 15.7435 6.76195 16.5 7.77435 16.5H16.7673C18.3733 16.5 19.7733 15.407 20.1628 13.8489L21.2855 9.35783C21.6485 7.90619 20.5505 6.5 19.0542 6.5H4.8Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M13 13.5H9"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="8.5" cy="20" r="1.5" fill="white" />
              <circle cx="17.5" cy="20" r="1.5" fill="white" />
            </svg>
            cart
            <supButton className="fs-6">
              {totalUniqueItems ? totalUniqueItems : isEmpty}
            </supButton>
          </CartBtn>
        </ProfileInfo>
      </UserInfo>
      <hr />
      <Outlet />
    </>
  );
};

export default OutletHeader;
const UserInfo = styled.div`
  padding: 47px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BaseInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  width: 100%;
  max-width: 375px;

  @media (max-width: 767px) {
    display: grid;
    row-gap: 15px;
  }
`;
const ProfileInfo = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  column-gap: 7px;

  @media (max-width: 767px) {
    display: none;
  }
`;
const CartBtn = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 15px;
  display: flex;
  column-gap: 4px;
`;
const StoreLink = styled.a`
  font-size: 17px;
`;
const CopyBtn = styled.button`
  font-size: 11px;
  border: none;
  padding: 1px 8px;
  background-color: #e8e8e8;
  color: #613eea;
  border-radius: 5px;
`;
