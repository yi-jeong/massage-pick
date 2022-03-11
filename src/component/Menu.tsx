import React from "react";
import styled from "styled-components";
import iconSrc from '../assets/img/menu-icon.png';

const MenuWrap = styled.div`
    width:100%;
    background:#fff;
    text-align:center;
`

const MenuContainer = styled.div`
    padding:0 1em;
    background:#fff;
    text-align:center;
`

const MenuTit = styled.h1`
    margin:2em 0;
    font-family: 'Montserrat';
    font-size:2em;
    font-weight:bold;
    color:#F2903B;
`

const MenuBoxWrap = styled.ul`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    margin-bottom:1em;
`

const MenuBox = styled.li`
    span{
        display:block;
        width:50px;
        height:50px;
        margin:0 auto 5px auto;
    }
    &: nth-child(1) span{
        background:url(${iconSrc}) 4px 4px no-repeat;
    }
    &: nth-child(2) span{
        background:url(${iconSrc}) -49px 4px no-repeat;
    }
    &: nth-child(3) span{
        background:url(${iconSrc}) -102px 4px no-repeat;
    }
    &: nth-child(4) span{
        background:url(${iconSrc}) -154px 4px no-repeat;
    }
    &: nth-child(5) span{
        background:url(${iconSrc}) 4px -56px no-repeat;
    }
    &: nth-child(6) span{
        background:url(${iconSrc}) -47px -56px no-repeat;
    }
    &: nth-child(7) span{
        background:url(${iconSrc}) -103px -52px no-repeat;
    }
    &: nth-child(8) span{
        background:url(${iconSrc}) -155px -54px no-repeat;
    }
    &: nth-child(9) span{
        background:url(${iconSrc}) 5px -113px no-repeat;
    }
    &: nth-child(10) span{
        background:url(${iconSrc}) -49px -113px no-repeat;
    }
    &: nth-child(11) span{
        background:url(${iconSrc}) -103px -113px no-repeat;
    }
    &: nth-child(12) span{
        background:url(${iconSrc}) -154px -113px no-repeat;
    }
    width:25%;
    margin-bottom:2em;
    font-size:0.9em;
`



function Menu(){
    return(
        <MenuWrap>
            <MenuContainer>
            <MenuTit>MassagePick</MenuTit>
            <MenuBoxWrap>
                <MenuBox>
                    <span className="icon"></span>
                    신규업소
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    1인샵
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    스웨디시
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    로미로미
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    타이
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    중국식
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    아로마
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    홈케어
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    왁싱
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    스파/사우나
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    쿠폰받기
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    이미지검색
                </MenuBox>
            </MenuBoxWrap>
            </MenuContainer>
        </MenuWrap>
    )
}

export default Menu;