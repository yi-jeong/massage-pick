import React, { useState } from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
    border-top:1px solid #f5f5f5;
    padding:2em 0;
    margin-bottom: 50px;
`

const FooterContainer = styled.div`
    padding:0 1em;
`

const FooterTit = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    h2{
        font-family: 'Montserrat';
        font-weight:800;
        font-size: 1.5em;
        color:#DDDDDD;
    }
    span{
        font-size:0.9em;
        color:#888;
    }
`

const FooterInfoWrap = styled.div`
    margin-top:1.5em;
    font-size:0.9em;
    letter-spacing:-1px;
    color:#555;
    p{
        padding:0.2em 0;
    }
    p span{
        font-weight:700;
    }
`

const FooterQuickWrap = styled.ul`
    margin-top:1.5em;
    display:flex;
`

const FooterQuick = styled.li`
    position:relative;
    margin-right:1em;
    font-size:0.9em;
    color:#666;
    ::after{
        content:'';
        position:absolute;
        top:0;
        right:-0.5em;
        width:1px; 
        height:100%;
        background:#ddd;
    }
    &: last-child::after{ display:none; }
`

function Footer(){
    const [info,setInfo] = useState(false);
    const Control = () => setInfo(!info);

    console.log(info);

    return(
        <FooterWrap>
            <FooterContainer>
                <FooterTit>
                    <h2>MassagePick</h2>
                    <span onClick={Control}>사업자정보</span>
                </FooterTit>
                { info && (
                <FooterInfoWrap>
                    <p><span>대표이사</span> 홍길동</p>
                    <p><span>대표전화</span> 02-000-0000</p>
                    <p>경기도 김포시 김포한강9로75번길 158 KR 이편한세상시티 한강신도시 A307</p>
                </FooterInfoWrap>
                )}
                <FooterQuickWrap>
                    <FooterQuick>이용약관</FooterQuick>
                    <FooterQuick>개인정보처리방침</FooterQuick>
                    <FooterQuick>사업자정보확인</FooterQuick>
                </FooterQuickWrap>
            </FooterContainer>
        </FooterWrap>
    )
}

export default Footer;