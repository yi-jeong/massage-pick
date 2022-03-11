import React from "react";
import styled from "styled-components";
import itemimg01 from "../assets/img/item-img-01.png";
import itemimg02 from "../assets/img/item-img-02.png";
import { Icon } from 'react-icons-kit'
import {heart} from 'react-icons-kit/fa/heart'
import {commentO} from 'react-icons-kit/fa/commentO'

const ListStyleWrap = styled.ul`
    display:flex;
    flex-wrap:wrap;
    margin:1em -0.5em;
`

const ListStyleBoxWrap = styled.li`
    width:50%;
    margin:0.5em 0;
`
const ListStyleBoxPadding = styled.div`
    padding:0 0.5em;
    height:100%;
`

const ListStyleBox = styled.div`
    height:100%;
    background:#fff;
    border-radius:0.5em;
    box-shadow:0 4px 11px 0 rgb(0 0 0 / 7%);
    overflow:hidden;
    img{
        width:100%;
    }
    h3{
        font-size:1.2em;
        letter-spacing:-1px;
        font-weight:500;
        margin-bottom:0.5em;
    }
    p{
        font-size:0.9em;
        color:#555;
    }
    span{
        display: flex;
        align-items: flex-end;
        font-family: 'Montserrat';
        margin-right:1em;
    }
    i{
        margin-right:0.3em;
    }
`

const ListStyleBoxCon = styled.div`
    padding:1.2em;
`

function ListStyleN(){
    return(
        <ListStyleWrap>
            <ListStyleBoxWrap>
                <ListStyleBoxPadding>
                <ListStyleBox>
                    <img src={itemimg01}/>
                    <ListStyleBoxCon>
                        <h3>마사지샵 상호명</h3>
                        <p>선릉역 10번 출구 100M</p>
                    </ListStyleBoxCon>
                </ListStyleBox>
                </ListStyleBoxPadding>
            </ListStyleBoxWrap>
            <ListStyleBoxWrap>
                <ListStyleBoxPadding>
                <ListStyleBox>
                    <img src={itemimg02}/>
                    <ListStyleBoxCon>
                        <h3>마사지샵 상호명</h3>
                        <p>선릉역 10번 출구 100M</p>
                    </ListStyleBoxCon>
                </ListStyleBox>
                </ListStyleBoxPadding>
            </ListStyleBoxWrap>
            <ListStyleBoxWrap>
                <ListStyleBoxPadding>
                <ListStyleBox>
                    <img src={itemimg01}/>
                    <ListStyleBoxCon>
                        <h3>마사지샵 상호명</h3>
                        <p>선릉역 10번 출구 100M</p>
                    </ListStyleBoxCon>
                </ListStyleBox>
                </ListStyleBoxPadding>
            </ListStyleBoxWrap>
            <ListStyleBoxWrap>
                <ListStyleBoxPadding>
                <ListStyleBox>
                    <img src={itemimg02}/>
                    <ListStyleBoxCon>
                        <h3>마사지샵 상호명</h3>
                        <p>선릉역 10번 출구</p>
                    </ListStyleBoxCon>
                </ListStyleBox>
                </ListStyleBoxPadding>
            </ListStyleBoxWrap>
        </ListStyleWrap>
    )
}

export default ListStyleN;