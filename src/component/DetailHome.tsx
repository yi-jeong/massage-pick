import React from "react";
import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import {heart} from 'react-icons-kit/fa/heart'
import {shareAlt} from 'react-icons-kit/fa/shareAlt'
import icon01 from "../assets/img/Icon-calendar.png";
import icon02 from "../assets/img/Icon-info.png";
import icon03 from "../assets/img/Icon-plus-square.png";
import icon04 from "../assets/img/Icon-map-pin.png";


const BoxWrap = styled.div`
    width:100%;
    background:#fff;
    margin:2.5em 0;
`

const Container = styled.div`
    padding:0 1em;
`

const DetailTit = styled.div`
    display:flex;
    justify-content: space-between;
    h1{
        font-size:2em;
        font-weight:800;
    }
    ul{ display:flex; } 
    .like{ display:flex; flex-wrap: wrap; text-align:center; }
    .like i { display:block; width:100%; }
    .like span{ display:block; width:100%; margin-top:0.1em; font-size:0.8em; }
`

const DetailAddress = styled.div`
    color:#666;
    font-size:0.9em;
    margin:1em 0;
`

const DetailTime = styled.div`
    margin:2em 0;
    h2{ display:flex; align-items: self-end; }
    h2 img{ margin-right:0.3em; }
    p{ color:#555; margin:0.5em 0; font-size:0.9em; }
`

const DetailInfo = styled.div`
    margin:2em 0;
    h2{ display:flex; align-items: self-end; }
    h2 img{ margin-right:0.3em; }
    p{ color:#555; margin:0.5em 0; font-size:0.9em; }
`

const DetailPlusInfo = styled.div`
    margin:2em 0;
    h2{ display:flex; align-items: self-end; }
    h2 img{ margin-right:0.3em; }
    ul{ display:flex; flex-wrap: wrap; gap: .5rem; margin-top: .5rem; color:#555; }
    ul li{ padding:0.5em 1em; background:#eee; border-radius:3em; font-size:0.8em; }
`

const DetailMap = styled.div`
    margin:2em 0;
    h2{ display:flex; align-items: self-end; }
    h2 img{ margin-right:0.3em; }
    div{ width:100%; height:250px; margin:0.5em 0; background:#eee; } 
`

function DetailHome(){
    return(
        <BoxWrap>
            <Container>
                <DetailTit>
                    <h1>마사지샵 상호명</h1>
                    <ul>
                        <li className="like"><Icon icon={heart} /><span>252</span></li>
                        <li><Icon icon={shareAlt} size={20}/></li>
                    </ul>
                </DetailTit>
                <DetailAddress>04520 서울시 중구 세종대로 124</DetailAddress>
                <DetailTime>
                    <h2><img src={icon01} />영업시간</h2>
                    <p>11:00 ~ 22:00</p>
                </DetailTime>
                <DetailInfo>
                    <h2><img src={icon02} />매장정보</h2>
                    <p>소개글이 들어갈 자리</p>
                </DetailInfo>
                <DetailPlusInfo>
                    <h2><img src={icon03} />부가정보</h2>
                    <ul>
                        <li>주차</li>
                        <li>wifi</li>
                        <li>음료</li>
                        <li>간식</li>
                        <li>1:1 책임 시술</li>
                    </ul>
                </DetailPlusInfo>
                <DetailMap>
                    <h2><img src={icon04} />오시는 길</h2>
                    <div></div>
                </DetailMap>
            </Container>
        </BoxWrap>
    )
}

export default DetailHome;