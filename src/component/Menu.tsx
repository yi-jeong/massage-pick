import React from "react";
import styled from "styled-components";
import iconSrc from '../assets/img/menu-icon.png';
import { Link } from "react-router-dom";

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
    a{
        text-decoration:none;
        color:#333;
    }
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
                <Link to="/search">
                    <span className="icon"></span>
                    ????????????
                </Link>
                </MenuBox>
                <MenuBox>
                <Link to="/search">
                    <span className="icon"></span>
                    1??????
                </Link>
                </MenuBox>
                <MenuBox>
                <Link to="/search">
                    <span className="icon"></span>
                    ????????????
                </Link>
                </MenuBox>
                <MenuBox>
                <Link to="/search">
                    <span className="icon"></span>
                    ????????????
                </Link>
                </MenuBox>
                <MenuBox>
                <Link to="/search">
                    <span className="icon"></span>
                    ??????
                </Link>
                </MenuBox>
                <MenuBox>
                <Link to="/search">
                    <span className="icon"></span>
                    ?????????
                </Link>
                </MenuBox>
                <MenuBox>
                <Link to="/search">
                    <span className="icon"></span>
                    ?????????
                </Link>
                </MenuBox>
                <MenuBox>
                <Link to="/search">
                    <span className="icon"></span>
                    ?????????
                </Link>
                </MenuBox>
                <MenuBox>
                <Link to="/search">
                    <span className="icon"></span>
                    ??????
                </Link>
                </MenuBox>
                <MenuBox>
                <Link to="/search">
                    <span className="icon"></span>
                    ??????/?????????
                </Link>
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    ????????????
                </MenuBox>
                <MenuBox>
                    <span className="icon"></span>
                    ???????????????
                </MenuBox>
            </MenuBoxWrap>
            </MenuContainer>
        </MenuWrap>
    )
}

export default Menu;