import React from "react";
import styled from "styled-components";
import itemimg01 from "../assets/img/item-img-01.png";
import itemimg02 from "../assets/img/item-img-02.png";
import { Icon } from 'react-icons-kit'
import {heart} from 'react-icons-kit/fa/heart'
import {commentO} from 'react-icons-kit/fa/commentO'
import { Link } from "react-router-dom";

const ListStyleWrap = styled.ul`
    display:flex;
    flex-wrap:wrap;
    margin:1em -0.5em;
`

const ListStyleBoxWrap = styled.li`
    width:50%;
    margin:0.5em 0;
`

const ListStyleBox = styled.div`;
    padding:0 0.5em;
    a{
        text-decoration:none;
        color:#000;
    }
    img{
        width:100%;
        border-radius:0.5em;
    }
    h3{
        font-size:1.2em;
        letter-spacing:-1px;
        font-weight:500;
        margin:0.5em 0;
    }
    p{
        display:flex;
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

function ListStyleP(){
    return(
        <ListStyleWrap>
            <ListStyleBoxWrap>
                <ListStyleBox>
                <Link to="/detail" >
                    <img src={itemimg01}/>
                    <h3>마사지샵 상호명</h3>
                    <p>
                        <span><Icon size={16} icon={commentO} /> 1524</span>
                        <span><Icon size={16} icon={heart} /> 252</span>
                    </p>
                </Link>
                </ListStyleBox>
            </ListStyleBoxWrap>
            <ListStyleBoxWrap>
                <ListStyleBox>
                <Link to="/detail" >
                    <img src={itemimg02}/>
                    <h3>마사지샵 상호명</h3>
                    <p>
                        <span><Icon size={16} icon={commentO} /> 1524</span>
                        <span><Icon size={16} icon={heart} /> 252</span>
                    </p>
                </Link>
                </ListStyleBox>
            </ListStyleBoxWrap>
            <ListStyleBoxWrap>
                <ListStyleBox>
                <Link to="/detail" >
                    <img src={itemimg01}/>
                    <h3>마사지샵 상호명</h3>
                    <p>
                        <span><Icon size={16} icon={commentO} /> 1524</span>
                        <span><Icon size={16} icon={heart} /> 252</span>
                    </p>
                </Link>
                </ListStyleBox>
            </ListStyleBoxWrap>
            <ListStyleBoxWrap>
                <ListStyleBox>
                <Link to="/detail" >
                    <img src={itemimg02}/>
                    <h3>마사지샵 상호명</h3>
                    <p>
                        <span><Icon size={16} icon={commentO} /> 1524</span>
                        <span><Icon size={16} icon={heart} /> 252</span>
                    </p>
                </Link>
                </ListStyleBox>
            </ListStyleBoxWrap>
        </ListStyleWrap>
    )
}

export default ListStyleP;